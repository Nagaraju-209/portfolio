import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Server,
  Cloud,
  Container,
  ShieldCheck,
  Database,
  MonitorCog,
  Activity,
  GitBranch,
  TestTube2,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Focus", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Learning", href: "#learning" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const TYPING_WORDS = [
  "DevOps Engineer",
  "AWS Cloud",
  "Infrastructure as Code",
  "CI/CD Automation",
  "Docker & Kubernetes",
  "GitHub Actions",
  "Terraform",
  "DevSecOps",
];

export const STATS = [
  { value: "3+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "15+", label: "DevOps Tools" },
  { value: "AWS", label: "Cloud" },
];

export const ABOUT_HIGHLIGHTS = [
  "Computer Science graduate",
  "DevOps & Cloud focused",
  "Infrastructure as Code",
  "CI/CD automation",
  "Containerization",
  "Kubernetes orchestration",
  "AWS infrastructure",
  "DevSecOps",
  "Linux & automation",
  "Continuous learning",
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "SQL", "Bash"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Spring Data JPA", "REST API", "Swagger"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "EC2", "VPC", "IAM", "S3", "ECR", "Lambda", "CloudFormation", "CloudWatch"],
  },
  {
    title: "DevOps",
    icon: Container,
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Terraform",
      "Maven",
    ],
  },
  {
    title: "DevSecOps",
    icon: ShieldCheck,
    skills: ["SonarQube", "Trivy"],
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    skills: ["CloudWatch", "Prometheus", "Grafana"],
  },
  {
    title: "Testing",
    icon: TestTube2,
    skills: ["JUnit", "Mockito", "JaCoCo"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    title: "Operating Systems",
    icon: MonitorCog,
    skills: ["Linux", "Windows"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
  },
];

export const DEVOPS_FOCUS_FLOW = [
  "Code",
  "Version Control",
  "CI/CD",
  "Containers",
  "Infrastructure as Code",
  "Cloud",
  "Security",
  "Observability",
];

export const DEVOPS_FOCUS_TOOLS = [
  "GitHub",
  "GitHub Actions",
  "Jenkins",
  "Maven",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "SonarQube",
  "Trivy",
  "CloudWatch",
  "Prometheus",
  "Grafana",
];

export interface EngineeringHighlight {
  title: string;
  detail: string;
}

export interface InfraGroup {
  root: string;
  nodes: string[];
}

export interface Project {
  title: string;
  badge: string;
  flagship: boolean;
  description: string;
  stack: string[];
  features: string[];
  timeline: string[];
  infrastructure?: InfraGroup;
  observability?: string;
  engineering?: EngineeringHighlight[];
  github: string;
  liveDemo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Enterprise AWS DevOps Platform",
    badge: "Featured Project",
    flagship: true,
    description:
      "Production-style AWS DevOps platform built with Terraform, GitHub Actions, Docker and Amazon ECR to provision cloud infrastructure and automate application delivery for a containerized Spring Boot REST API.",
    stack: [
      "AWS",
      "Terraform",
      "GitHub Actions",
      "Docker",
      "Amazon ECR",
      "EC2",
      "VPC",
      "IAM",
      "Spring Boot",
      "Java",
      "Maven",
      "CloudWatch",
      "Linux",
    ],
    features: [
      "Terraform-provisioned AWS infrastructure",
      "VPC with public and private subnets",
      "Route tables and NAT Gateway",
      "Security Groups and IAM Roles",
      "EC2-based application deployment",
      "Spring Boot REST API containerized with Docker",
      "Docker multi-stage builds",
      "Immutable Docker image tags",
      "GitHub Actions CI/CD automation",
      "Maven build and application validation",
      "Amazon ECR image publishing",
      "Automated EC2 deployment",
      "Deployment health checks and validation",
      "Docker image cleanup on deployment",
      "GitHub Actions build caching",
      "Workflow concurrency control",
      "Semantic versioning and release workflow",
      "Least-privilege workflow permissions",
    ],
    timeline: [
      "Developer",
      "GitHub",
      "GitHub Actions",
      "Maven Build & Validation",
      "Docker Multi-stage Build",
      "Amazon ECR",
      "AWS EC2",
      "Docker Container",
      "Spring Boot REST API",
    ],
    infrastructure: {
      root: "Terraform → AWS VPC",
      nodes: [
        "Public Subnets",
        "Private Subnets",
        "Route Tables",
        "NAT Gateway",
        "Security Groups",
        "IAM Roles",
        "EC2",
      ],
    },
    observability: "CloudWatch — logs, metrics and deployment visibility",
    engineering: [
      {
        title: "Infrastructure as Code",
        detail:
          "Terraform provisions the AWS networking and compute foundation, making the environment repeatable and version controlled.",
      },
      {
        title: "CI/CD",
        detail:
          "GitHub Actions automates Maven builds, Docker image creation, Amazon ECR publishing and EC2 deployment.",
      },
      {
        title: "Containerization",
        detail: "The Spring Boot REST API uses Docker multi-stage builds and immutable image tags.",
      },
      {
        title: "Reliability",
        detail:
          "Deployment validation, health checks, cleanup steps, build caching and concurrency control reduce operational issues.",
      },
      {
        title: "Security",
        detail:
          "IAM roles and least-privilege GitHub Actions permissions are used to reduce unnecessary access.",
      },
      {
        title: "Release Management",
        detail: "Semantic versioning and releases are included in the delivery workflow.",
      },
    ],
    github: "https://github.com/Nagaraju-209/enterprise-aws-devops-platform",
  },
  {
    title: "Production DevOps CI/CD Pipeline",
    badge: "Project",
    flagship: false,
    description:
      "End-to-end DevOps pipeline for a Spring Boot REST API covering automated builds, testing, code quality analysis, containerization, vulnerability scanning and Kubernetes deployment.",
    stack: [
      "Spring Boot",
      "Java",
      "MySQL",
      "Maven",
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
      "Jenkins CI/CD pipeline",
      "Maven build automation",
      "Automated JUnit tests",
      "JaCoCo coverage",
      "SonarQube code quality analysis",
      "Trivy container vulnerability scanning",
      "Docker image build and publishing",
      "Kubernetes deployment",
      "ConfigMaps and Secrets",
      "Persistent Volume / PVC",
      "Health, readiness and liveness probes",
      "Spring Boot Actuator",
      "Swagger API documentation",
    ],
    timeline: [
      "GitHub",
      "Jenkins",
      "Maven",
      "JUnit",
      "SonarQube",
      "Trivy",
      "Docker",
      "Docker Hub",
      "Kubernetes",
      "Spring Boot",
    ],
    github: "https://github.com/Nagaraju-209/production-devops-pipeline",
  },
];

export const WORKFLOW_STEPS = [
  { label: "Developer", detail: "Feature work committed locally" },
  { label: "GitHub", detail: "Source control & workflow trigger" },
  { label: "GitHub Actions", detail: "CI/CD workflow orchestration" },
  { label: "Maven Build", detail: "Build & application validation" },
  { label: "Docker Build", detail: "Multi-stage image build" },
  { label: "Amazon ECR", detail: "Immutable image publishing" },
  { label: "AWS EC2", detail: "Automated deployment target" },
  { label: "Docker Container", detail: "Runtime with health checks" },
  { label: "Spring Boot API", detail: "REST API serving traffic" },
  { label: "CloudWatch", detail: "Logs, metrics & observability" },
];

export const EXPERIENCE = [
  {
    role: "DevOps Intern",
    company: "Elevate Labs",
    period: "Sep 2025 – Nov 2025",
    location: "Remote",
    summary:
      "Hands-on DevOps internship building CI/CD pipelines, containerizing services and deploying workloads to Kubernetes on AWS.",
    bullets: [
      "Built CI/CD pipelines with Jenkins and GitHub Actions",
      "Containerized applications with Docker & Docker Compose",
      "Deployed workloads to Kubernetes with health probes",
      "Provisioned AWS infrastructure using Terraform",
      "Set up Prometheus and Grafana for monitoring dashboards",
      "Practiced Linux administration and shell scripting for automation",
    ],
    highlights: ["CI/CD", "Docker", "Kubernetes", "AWS", "Terraform", "Prometheus", "Grafana"],
  },
  {
    role: "Cloud Virtual Internship",
    company: "AICTE Eduskills · AWS Academy",
    period: "Jul 2024 – Sep 2024",
    location: "Remote",
    summary:
      "AWS Academy guided virtual internship covering core cloud services with hands-on labs.",
    bullets: [
      "Hands-on labs across EC2, IAM, S3 and VPC",
      "Built and secured cloud environments using AWS best practices",
    ],
    highlights: ["EC2", "IAM", "S3", "VPC"],
  },
];

export const CERTIFICATIONS = [
  "AWS Academy Cloud Foundations",
  "AWS Academy Cloud Architecting",
  "Cloud Virtual Internship",
];

export const CURRENTLY_LEARNING = [
  "Terraform (Advanced)",
  "GitHub Actions",
  "Helm",
  "ArgoCD",
  "AWS ECS",
  "Advanced Kubernetes",
];

export const CONTACT = {
  email: "dramarajudramaraju59@gmail.com",
  phone: "+91 9160908677",
  linkedin: "https://www.linkedin.com/in/dandu-rama-siva-naga-raju/",
  github: "https://github.com/Nagaraju-209",
  resume: "/Dandu_Rama_Siva_Naga_Raju.pdf",
};
