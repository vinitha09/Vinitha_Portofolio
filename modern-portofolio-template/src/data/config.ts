import {
  SiDocker, SiGit, SiGithub, SiGooglecloud, SiHibernate, SiJava,
  SiMongodb, SiOpenjdk, SiPostgresql, SiPython, SiSpring, SiSqlite,
} from "react-icons/si";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

export const site = {
  name: "Pothula Vinitha",
  role: "Backend & AI Software Engineer",
  bio: "Software engineer building reliable backend services, cloud applications, and AI solutions with Python, FastAPI, Java, and Google Cloud. Currently pursuing a Master's in Artificial Intelligence at BTU Cottbus-Senftenberg and seeking a working-student role in software or AI engineering.",
  email: "pothulavinitha09@gmail.com",
  phone: "+49 15510711220",
  location: "Cottbus, Germany",
  cvUrl: "/cv.pdf",
  formspreeEndpoint: "",
};

export const about = {
  paragraphs: [
    "I am a software engineer with experience developing backend APIs, event-driven workflows, cloud services, and practical AI applications. At Aurum Data Solutions, I worked with Java, Spring Boot, Quarkus, Google Cloud, and MongoDB while collaborating with SRE and cross-functional teams to resolve API, authentication, and connectivity issues.",
    "I enjoy turning complex technical requirements into maintainable solutions and am particularly interested in backend engineering, AI systems, and open-source collaboration. I hold a Bachelor's degree in Artificial Intelligence and Data Science from KL University and am pursuing a Master's in Artificial Intelligence at Brandenburg University of Technology Cottbus-Senftenberg.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Aurum Data Solutions",
    role: "Software Engineer I",
    location: "Hyderabad, India",
    period: "Apr 2025 – Sep 2026",
    highlights: [
      " Developed and maintained Java REST APIs using Spring Boot and Quarkus for event-driven backend services and business workflows",
      "Used LiquidJS for dynamic payload formatting, data transformation, and template-based processing",
      "Contributed to DB2-to-MongoDB migration, including data mapping, schema redesign, and data transformation",
      "Worked with Google Cloud Platform (GCP) services including Pub/Sub, Cloud Storage, Cloud Run, and Secret Manager",
      "Implemented Pub/Sub-based asynchronous communication for event-driven application workflows and developed CRUD APIs for internal and external service integration",
      "Worked with Docker and CI/CD pipelines for application build, deployment, and troubleshooting, and resolved API, authentication, SSL/TLS, and cloud connectivity issues in collaboration with SRE and cross-functional teams",
      "Leveraged AI-assisted development tools to automate data transformation workflows, reducing manual effort by 30% and improving efficiency"
    ],
  },
  {
    company: "Accenture",
    role: "Associate Software Engineer",
    location: "Hyderabad, India",
    period: "Aug 2024 – Jan 2025",
    highlights: [
      "Completed a comprehensive training program in Java full-stack development, including core Java, Spring Boot,Hibernate, and front-end technologies (HTML, CSS, JavaScript)",
      "Collaborated with peers to troubleshoot technical challenges and build scalable web applications, enhancing problem-solving and teamwork skills"
    ],
  },
];

export const education = [
  {
    degree: "Master's in Artificial Intelligence",
    institution: "Brandenburg University of Technology Cottbus-Senftenberg (BTU)",
    location: "Cottbus, Germany",
    period: "Oct 2026 – Present",
  },
  {
    degree: "Bachelor's in Artificial Intelligence and Data Science",
    institution: "KL University",
    location: "Vijayawada, India",
    period: "Nov 2020 – May 2024",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  period: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Industrial AI Maintenance Assistant",
    description: "An AI assistant concept for industrial troubleshooting that draws on technical manuals, daily logs, and historical repair records, with structured storage for incidents, procedures, and outcomes.",
    tags: ["Generative AI", "RAG", "LLM APIs", "MCP"],
    image: "/placeholder.svg",
    period: "Oct 2026 – Present",
    github: "https://github.com/vinitha09/Maintanence-AI-agent-for-facility",
  },
  {
    title: "Facial Web Authentication System",
    description: "A web-based facial authentication project using image augmentation to improve model generalization, with user and authentication data management.",
    tags: ["Python", "Machine Learning", "Computer Vision", "Web"],
    image: "/placeholder.svg",
    period: "Dec 2023 – Mar 2024",
    github: "https://github.com/vinitha09/web_authentication",
  },
];

export type Skill = { name: string; Icon: IconType };

export const skills: Skill[] = [
  { name: "Python", Icon: SiPython },
  { name: "Java", Icon: SiOpenjdk },
  { name: "SQL", Icon: SiPostgresql },
  { name: "Spring", Icon: SiSpring },
  { name: "Hibernate", Icon: SiHibernate },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "SQLite", Icon: SiSqlite },
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "Docker", Icon: SiDocker },
  { name: "Git & GitHub", Icon: SiGithub },
  { name: "GitLab", Icon: SiGit },
];

export const skillAreas = [
  { name: "Backend development", details: "APIs, microservices, monolithic systems" },
  { name: "Cloud & DevOps", details: "Google Cloud Run, Cloud Storage, Pub/Sub, Secret Manager, CI/CD, Docker" },
  { name: "Databases", details: "MongoDB, PostgreSQL, SQLite, DB2" },
  { name: "AI & machine learning", details: "LLM APIs, RAG, generative AI, deep learning, CNNs, computer vision" },
  { name: "Tools & practices", details: "Git, GitHub, GitLab, Azure DevOps, Agile, Atlassian Confluence, Model Context Protocol (MCP)" },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/vinitha09", Icon: FiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/pothula-vinitha-reddy-b95127209/", Icon: FiLinkedin },
  { name: "Email", href: `mailto:${site.email}`, Icon: FiMail },
];

export const nav = [
  { label: "Work", href: "#projects" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
