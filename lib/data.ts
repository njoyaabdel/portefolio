
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import landing from "@/public/landing.png";
import lab from "@/public/lab.png";
import disciplinary from "@/public/disciplinary.png";
import koalizz from "@/public/koalizz.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "BTS in Information Systems Management",
    location: "IUSTE, Yaoundé, Cameroon",
    description:
      "Training in information systems management, acquiring fundamentals of software development and databases.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Bachelor's in Software Engineering & Databases",
    location: "IUSTE, Yaoundé, Cameroon",
    description:
      "Deep dive into software architecture, database design, SOLID principles and development of robust applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Fullstack Developer Intern",
    location: "KEVMAX SARL, Yaoundé, Cameroon",
    description:
      "Bug analysis and fixing on existing projects, improvement proposals, and backend development of a client portfolio management tool. First hands-on experience with React.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2023 - Jun. 2023",
  },
  {
    title: "Backend Developer Python / JavaScript",
    location: "KEVMAX SARL, Yaoundé, Cameroon",
    description:
      "Design and deployment of robust REST APIs (real estate, healthcare, management), advanced auth systems, WebSocket, AI integration (ChatGPT, Gemini), payment solutions (NotchPay, Braintree), CI/CD pipelines and intern mentoring.",
    icon: React.createElement(FaReact),
    date: "Jun. 2023 - Jun. 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Dape",
    description:
      "Digital real estate management and booking platform. Aims to structure and secure the property search, visit and reservation process, solving the lack of reliability in listings and agent-client interactions.",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "React", "Docker"],
    imageUrl: landing,
  },
  {
    title: "LabX Patient",
    description:
      "Patient management system built at KEVMAX. Handles medical records, patient tracking and business features tailored to the healthcare sector.",
    tags: ["FastAPI", "PostgreSQL", "React", "Redis", "Docker"],
    imageUrl: lab,
  },
  {
    title: "Koalizz",
    description:
      "French digital solution designed to simplify communication and management within early childhood structures, such as micro-nurseries.",
    tags: ["FastAPI", "Redis", "PostgreSQL", "Next.js"],
    imageUrl: koalizz,
  },
  {
    title: "Disciplinary Action Tracker",
    description:
      "The application serves as the official memory. It replaces scattered Excel files or paper records with a single database where every incident is logged..",
    tags: ["FastAPI", "PostgreSQL", "Next.js"],
    imageUrl: disciplinary,
  },
] as const;

export const skillsData = [
  "Python",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "SQLAlchemy",
  "Redis",
  "RabbitMQ",
  "Docker",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "JavaScript",
  "GitHub Actions",
  "GitLab CI",
  "AWS",
  "WebSocket",
  "Git",
  "DDD",
  "Clean Architecture",
] as const;