import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .max(255, "Email is too long.")
    .email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(2000, "Message is too long (2000 characters max)."),
  // Honeypot: must stay empty for real humans.
  company: z.string().max(0).optional().default(""),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactResult = { ok: true } | { ok: false; error: string };

const GENERIC_ERROR = "Unable to send your message right now. Please try again later.";

// Best-effort in-memory throttle (per warm serverless instance).
const recent = new Map<string, number>();
const WINDOW_MS = 30_000;

function throttled(key: string): boolean {
  const now = Date.now();
  for (const [k, at] of recent) if (now - at > WINDOW_MS) recent.delete(k);
  const last = recent.get(key);
  if (last && now - last < WINDOW_MS) return true;
  recent.set(key, now);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }): Promise<ContactResult> => {
    // Silently accept honeypot hits so bots get no feedback.
    if (data.company) return { ok: true };

    const apiKey = process.env["RESEND_API_KEY"];
    const to = process.env["CONTACT_EMAIL"];
    const from = process.env["CONTACT_FROM_EMAIL"];

    if (!apiKey || !to || !from) {
      console.error(
        "[contact] Missing email configuration: RESEND_API_KEY / CONTACT_EMAIL / CONTACT_FROM_EMAIL",
      );
      return { ok: false, error: GENERIC_ERROR };
    }

    if (throttled(data.email.toLowerCase())) {
      return {
        ok: false,
        error: "You just sent a message. Please wait a moment before resending.",
      };
    }

    const submittedAt = new Date().toISOString();
    const name = escapeHtml(data.name);
    const email = escapeHtml(data.email);
    const message = escapeHtml(data.message);

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: data.email,
          subject: `Portfolio Contact: ${data.name}`,
          text: [
            "New portfolio contact message",
            "",
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Submitted: ${submittedAt}`,
            "",
            "Message:",
            data.message,
          ].join("\n"),
          html: `<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a">
  <h2 style="margin:0 0 16px">New portfolio contact message</h2>
  <p style="margin:0"><strong>Name:</strong> ${name}</p>
  <p style="margin:0"><strong>Email:</strong> ${email}</p>
  <p style="margin:0"><strong>Submitted:</strong> ${submittedAt}</p>
  <p style="margin:16px 0 4px"><strong>Message:</strong></p>
  <p style="white-space:pre-wrap;margin:0">${message}</p>
</div>`,
        }),
      });

      if (!response.ok) {
        console.error(`[contact] Resend failed [${response.status}]: ${await response.text()}`);
        return { ok: false, error: GENERIC_ERROR };
      }

      return { ok: true };
    } catch (error) {
      console.error("[contact] Unexpected send failure", error);
      return { ok: false, error: GENERIC_ERROR };
    }
  });
