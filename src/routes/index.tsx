import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const Portfolio = lazy(() => import("@/components/portfolio/Portfolio"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dandu Rama Siva Naga Raju | DevOps Engineer | AWS | Cloud & Automation" },
      {
        name: "description",
        content:
          "DevOps Engineer fresher portfolio showcasing AWS cloud infrastructure, Terraform, CI/CD, Docker, Kubernetes, GitHub Actions, Jenkins and DevSecOps projects.",
      },
      {
        property: "og:title",
        content: "Dandu Rama Siva Naga Raju | DevOps Engineer | Cloud & Automation",
      },
      {
        property: "og:description",
        content:
          "Computer Science graduate with hands-on experience in AWS, Terraform, CI/CD, Docker, Kubernetes and DevSecOps.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Dandu Rama Siva Naga Raju | DevOps Engineer | Cloud & Automation",
      },
      {
        name: "twitter:description",
        content: "AWS · Terraform · CI/CD · Docker · Kubernetes · DevSecOps",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dandu Rama Siva Naga Raju",
          jobTitle: "DevOps Engineer",
          url: "/",
          sameAs: [
            "https://github.com/Nagaraju-209",
            "https://www.linkedin.com/in/dandu-rama-siva-naga-raju/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#05070d]" />}>
      <Portfolio />
    </Suspense>
  );
}
