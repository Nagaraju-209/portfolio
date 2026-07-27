import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Server,
  Cloud,
  Container,
  ShieldCheck,
  TestTube,
  Database,
  MonitorCog,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const TYPING_WORDS = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Java Developer",
  "CI/CD Automation",
  "Kubernetes",
  "AWS",
];

export const STATS = [
  { value: "2+", label: "Major Projects" },
  { value: "2", label: "Internships" },
  { value: "10+", label: "DevOps Tools" },
  { value: "AWS", label: "Cloud" },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { title: "Languages", icon: Code2, skills: ["Java", "Python", "SQL", "Bash"] },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Spring Data JPA", "REST API", "Swagger"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS EC2", "IAM", "S3", "Lambda", "CloudFormation"],
  },
  {
    title: "DevOps",
    icon: Container,
    skills: ["Git", "GitHub", "Jenkins", "Docker", "Docker Compose", "Kubernetes", "Terraform"],
  },
  { title: "DevSecOps", icon: ShieldCheck, skills: ["SonarQube", "Trivy"] },
  { title: "Testing", icon: TestTube, skills: ["JUnit", "Mockito", "JaCoCo"] },
  { title: "Database", icon: Database, skills: ["MySQL"] },
  { title: "Operating Systems", icon: MonitorCog, skills: ["Linux", "Windows"] },
];

export const PROJECTS = [
  {
    title: "Production DevOps CI/CD Pipeline",
    flagship: true,
    description:
      "End-to-end, production-grade Jenkins pipeline that builds a Spring Boot service, runs quality gates, scans images, ships to Docker Hub and deploys to Kubernetes with health, readiness and liveness probes.",
    stack: [
      "Spring Boot",
      "Java",
      "MySQL",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "SonarQube",
      "Trivy",
      "Swagger",
      "JUnit",
      "JaCoCo",
    ],
    features: [
      "Production-grade Jenkins pipeline",
      "Maven build automation",
      "Automated testing (JUnit + JaCoCo)",
      "SonarQube code quality gates",
      "Trivy image vulnerability scanning",
      "Docker image build & Docker Hub push",
      "Kubernetes deployment with ConfigMaps, Secrets & PVC",
      "Health, readiness & liveness probes",
      "Swagger API + Spring Boot Actuator",
    ],
    timeline: [
      "GitHub",
      "Jenkins",
      "Maven Build",
      "JUnit Tests",
      "SonarQube",
      "Trivy",
      "Docker Build",
      "Docker Hub",
      "Kubernetes",
      "Spring Boot",
    ],
    github: "https://github.com/Nagaraju-209/production-devops-pipeline",
  },
  {
    title: "AWS CloudFormation Infrastructure Deployment",
    flagship: false,
    description:
      "Infrastructure as Code project provisioning EC2, IAM, S3 and networking through reusable CloudFormation templates for repeatable, versioned environments.",
    stack: ["AWS", "CloudFormation", "EC2", "IAM", "S3", "VPC"],
    features: [
      "Infrastructure as Code with CloudFormation",
      "Reusable parameterized templates",
      "EC2, IAM, S3 and networking stacks",
      "Repeatable, versioned deployments",
    ],
    timeline: [],
    github: "https://github.com/Nagaraju-209",
  },
];

export const EXPERIENCE = [
  {
    role: "DevOps Intern",
    company: "Elevate Labs",
    period: "Sep 2025 – Nov 2025",
    location: "Remote",
    highlights: [
      "CI/CD pipelines",
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    role: "Cloud Virtual Internship",
    company: "AICTE Eduskills · AWS Academy",
    period: "Jul 2024 – Sep 2024",
    location: "Remote",
    highlights: ["EC2", "IAM", "S3", "VPC"],
  },
];

export const CERTIFICATIONS = [
  "AWS Academy Cloud Foundations",
  "AWS Academy Cloud Architecting",
  "Cloud Virtual Internship",
];

export const CONTACT = {
  email: "nagarajucsd@gmail.com",
  phone: "+91",
  linkedin: "https://www.linkedin.com/in/dandu-rama-siva-naga-raju/",
  github: "https://github.com/Nagaraju-209",
  resume: "/resume.pdf",
};
