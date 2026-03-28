/* ── Type Definitions ── */

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  address: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  role: string;
  tagline: string;
  summary: string;
  bio: string[];
  avatar: string;
}

export interface Education {
  year: string;
  degree: string;
  institution: string;
  gpa: string;
}

export interface SkillCategory {
  icon: string;
  category: string;
  title: string;
  skills: string[];
}

export interface Project {
  featured?: boolean;
  type: string;
  title: string;
  description: string;
  stack: string[];
  metrics?: { label: string; value: number }[];
}

export interface Experience {
  period: string;
  company: string;
  url?: string;
  location: string;
  role: string;
  points: string[];
}

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface Reference {
  name: string;
  title: string;
  institution: string;
  email?: string;
  phone?: string;
  url?: string;
}

/* ── Data Constants ── */

export const personalInfo: PersonalInfo = {
  name: "Ahnaf Hasan",
  firstName: "Ahnaf",
  lastName: "Hasan",
  initials: "AH",
  address: "Khilkhet-1229, Dhaka, Bangladesh",
  phone: "+8801319972304",
  email: "ahnaf000hassan@gmail.com",
  github: "https://github.com/Ahnaf0-0",
  linkedin: "https://www.linkedin.com/in/ahnaf0-0-/",
  role: "AI ENGINEER · ML RESEARCHER · BUILDER",
  tagline: "Available for AI Engineering roles",
  summary:
    "Computer Science and Engineering graduate with a strong academic foundation in machine learning, and LLM-based system integration.",
  bio: [
    "Analytical, innovative, and collaborative Computer Science and Engineering graduate from AIUB with a strong academic foundation in machine learning and LLM-based system integration.",
    "Experienced in developing computer vision models, designing Retrieval-Augmented Generation (RAG) pipelines, and integrating AI systems through RESTful APIs. Committed to building intelligent, scalable solutions that bridge data-driven technologies with real-world business applications.",
  ],
  avatar: "/avatar.jpg",
};

export const education: Education[] = [
  {
    year: "2022 – 2025",
    degree: "BSc in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    gpa: "3.88",
  },
  {
    year: "2021",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shaheed Ramiz Uddin Cantonment College",
    gpa: "5.00",
  },
];

export const skills: SkillCategory[] = [
  {
    icon: "Code",
    category: "Programming",
    title: "Languages & Analytical",
    skills: ["Python", "C++", "C#", "SQL", "DSA"],
  },
  {
    icon: "Brain",
    category: "Machine Learning",
    title: "ML & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Deep Learning", "CNNs"],
  },
  {
    icon: "Eye",
    category: "Computer Vision",
    title: "Vision & Transformers",
    skills: ["Vision Transformers", "ViT", "DeiT", "Computer Vision"],
  },
  {
    icon: "Bot",
    category: "LLM & AI Systems",
    title: "LLM Integration",
    skills: ["RAG", "Embeddings", "Vector DBs", "Prompt Engineering", "Multi-Agent"],
  },
  {
    icon: "Globe",
    category: "Web & Integration",
    title: "System Integration",
    skills: ["REST APIs", "Webhooks", "Next.js", "Tailwind CSS", "Git"],
  },
  {
    icon: "Cpu",
    category: "Hardware & IoT",
    title: "Embedded Systems",
    skills: ["Arduino", "ESP32", "Sensors", "Firebase", "Telegram API"],
  },
];

export const projects: Project[] = [
  {
    featured: true,
    type: "AI / Machine Learning",
    title: "Smart Energy Storage Management System",
    description:
      "Designed an AI-driven predictive demand system to forecast energy requirements based on historical data. Optimized renewable energy usage and developed intelligent battery scheduling strategies for efficiency.",
    stack: ["Python", "Deep Learning", "Predictive Analytics", "Energy Optimization"],
  },
  {
    type: "AI / Automation",
    title: "AI-Powered E-commerce Automation",
    description:
      "Designed a Telegram-based AI agent integrated with Shopify APIs to automate customer interactions. Implemented LLM tool-calling capabilities to handle product queries and streamline order management with contextual memory.",
    stack: ["Python", "LLM", "Shopify API", "Telegram Bot"],
  },
  {
    type: "AI / NLP",
    title: "RAG Agent Using Langflow",
    description:
      "Developed an end-to-end document ingestion and vector search pipeline for automated knowledge retrieval. Implemented embeddings and retrieval mechanisms using vector databases like Astra DB and ChromaDB.",
    stack: ["Langflow", "Embeddings", "Astra DB", "ChromaDB", "RAG"],
  },
  {
    type: "Software / Database",
    title: "Learning Management System (LMS)",
    description:
      "Designed comprehensive ER diagrams and SQL tables for a robust LMS. Developed backend logic and GUI using C# Windows Forms with event triggers and seamless UI updates.",
    stack: ["C#", "SQL", "Windows Forms", "ER Diagrams"],
  },
  {
    type: "Web / Productivity",
    title: "Productivity & Tracking Apps",
    description:
      "Created a dynamic task-tracking application with a visual Kanban board and completion animations. Developed a routine-tracking application with customizable date options.",
    stack: ["JavaScript", "React", "Kanban", "UI/UX"],
  },
  {
    type: "Hardware / IoT",
    title: "Hardware Automation & IoT Systems",
    description:
      "Built a physical password-based switch to control a servo motor using a 555 timer and custom digital logic gates. Engineered FSMs and frequency calculation circuits.",
    stack: ["Arduino", "555 Timer", "FSM", "Digital Logic"],
  },
];

export const experience: Experience[] = [
  {
    period: "2023 – 2025",
    company: "Techmak Technology Ltd.",
    url: "https://techmakai.com/",
    location: "Dhaka, Bangladesh",
    role: "Automation & Web Developer (Part-Time)",
    points: [
      "Worked on automation-based security and surveillance solutions, including IP-based systems and access control mechanisms.",
      "Assisted in system integration and deployment of industrial automation infrastructure to streamline operational environments.",
      "Developed and maintained robust web applications to support and optimize day-to-day operational workflows.",
      "Collaborated closely with technical teams to design, troubleshoot, and implement scalable, automation-driven solutions.",
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    icon: "Mail",
    label: "Email",
    value: "ahnaf000hassan@gmail.com",
    href: "mailto:ahnaf000hassan@gmail.com",
  },
  {
    icon: "Phone",
    label: "Phone",
    value: "+8801319972304",
    href: "tel:+8801319972304",
  },
  {
    icon: "Github",
    label: "GitHub",
    value: "github.com/Ahnaf0-0",
    href: "https://github.com/Ahnaf0-0",
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/ahnaf0-0-",
    href: "https://www.linkedin.com/in/ahnaf0-0-/",
  },
];

export const references: Reference[] = [
  {
    name: "Dr. Muhammad Firoz Mridha",
    title: "Professor & Head (Undergraduate Program)",
    institution: "Dept. of Computer Science, AIUB",
    email: "firoz.mridha@aiub.edu",
  },
  {
    name: "Nur A. Azam Tusher",
    title: "Founder & CEO",
    institution: "Techmak Technology Ltd.",
    phone: "01611-224433",
    url: "https://tusher.online/",
  },
];

export const awards: string[] = [
  "Silver Award for Academic Excellence — AIUB",
  "Dean's List (4 Times)",
];

export const languages: string[] = [
  "Bengali — Native",
  "English — Professional",
];

export const stats = [
  { label: "CGPA", value: "3.88" },
  { label: "Projects", value: "6+" },
  { label: "Experience", value: "2yr" },
  { label: "Awards", value: "5" },
];

export const topSkills: string[] = [
  "Python",
  "PyTorch",
  "RAG",
  "Next.js",
  "LLM",
];

export const keyInfo = [
  { label: "Location", value: "Dhaka, Bangladesh" },
  { label: "Degree", value: "BSc in CSE" },
  { label: "University", value: "AIUB" },
  { label: "Experience", value: "2+ Years" },
  { label: "Focus", value: "AI & ML Engineering" },
];
