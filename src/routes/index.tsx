import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const Portfolio = lazy(() => import("@/components/portfolio/Portfolio"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dandu Rama Siva Naga Raju — DevOps Engineer & Cloud Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Dandu Rama Siva Naga Raju — DevOps Engineer specializing in Jenkins, Docker, Kubernetes, AWS and Spring Boot CI/CD pipelines.",
      },
      { property: "og:title", content: "Dandu Rama Siva Naga Raju — DevOps Engineer" },
      {
        property: "og:description",
        content:
          "DevOps Engineer building production-grade CI/CD pipelines with Jenkins, Docker, Kubernetes, AWS and Spring Boot.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dandu Rama Siva Naga Raju — DevOps Engineer" },
      {
        name: "twitter:description",
        content: "DevOps · Cloud · Java Backend · CI/CD Automation",
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
