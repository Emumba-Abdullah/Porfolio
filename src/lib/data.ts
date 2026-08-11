// ---------------------------------------------------------------------------
// Single source of truth for every piece of content on the site.
// Edit this file to update the portfolio — no component changes needed.
// ---------------------------------------------------------------------------

export const site = {
  name: "Mirza Abdullah Bin Abrar",
  shortName: "Mirza Abdullah",
  initials: "MA",
  role: "Full-Stack Product Engineer",
  // Shown under the hero name, split on "|" into animated lines
  headline: "React front to FastAPI back.|Shipped for Microsoft.",
  location: "Islamabad, Pakistan",
  timezone: "PKT · UTC+5",
  email: "mirzaabdullahbinabrar@gmail.com",
  phone: "+92 310 514 4698",
  phoneHref: "+923105144698",
  resume: "/Mirza_Abdullah_Resume.pdf",
  // TODO: set this to your deployed domain before going live
  url: "https://mirzaabdullah.vercel.app",
  available: true,
  availabilityNote: "Open to senior full-stack & frontend roles",
  intro:
    "I build enterprise web products end to end — React and TypeScript on the front, FastAPI and Node on the back, AWS and Docker underneath. Two years in, I've shipped a developer platform Microsoft published, delivered GenAI and RAG accelerators presented at Microsoft Build, and cut load times by 90% on content-heavy applications.",
  about: [
    "I'm a Software Engineer II at Emumba in Islamabad, where I've spent the last two years working on the kind of frontend that doesn't fit in a tutorial — a networking-industry platform built alongside 45+ engineers, dashboards wired into machine-learning pipelines, and a full migration onto a shared design system.",
    "Somewhere along the way the work stopped stopping at the browser. I now own features from the React component down through the FastAPI endpoint, the RAG pipeline, the Docker image and the GitHub Actions workflow that ships it. PostgresHub — a learning platform I built solo for Microsoft Build — was the clearest version of that: requirements to production, published by Microsoft.",
    "Outside the editor I served as President of Emumba's Toastmasters club and took it to the Presidential Distinguished Award. That part matters more than it sounds: most of my best engineering work has come from being the person willing to run the client call.",
  ],
};

export const socials = [
  { label: "GitHub", handle: "MABA1001", href: "https://github.com/MABA1001", icon: "github" },
  {
    label: "LinkedIn",
    handle: "mirza-abdullah-bin-abrar",
    href: "https://www.linkedin.com/in/mirza-abdullah-bin-abrar/",
    icon: "linkedin",
  },
  { label: "Email", handle: site.email, href: `mailto:${site.email}`, icon: "mail" },
] as const;

export const stats = [
  { value: 2, suffix: "+", label: "Years shipping\nproduction software" },
  { value: 90, suffix: "%", label: "Faster load times\non content-heavy apps" },
  { value: 6, suffix: "+", label: "Enterprise PoCs\nincl. Fortune 500" },
  { value: 45, suffix: "+", label: "Engineers on the\nlargest team I've shipped with" },
];

export const ticker = [
  "React",
  "TypeScript",
  "Next.js",
  "FastAPI",
  "Node.js",
  "AWS",
  "Docker",
  "RAG",
  "LangChain",
  "Redux Toolkit",
  "GraphQL",
  "PostgreSQL",
  "Framer Motion",
  "Design Systems",
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  years: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer II",
    company: "Emumba Pvt. Ltd.",
    location: "Islamabad, PK",
    period: "Aug 2025 — Present",
    years: "2025",
    current: true,
    summary:
      "Owning high-impact product features end to end, and the client conversations around them.",
    points: [
      "Built AI-powered production features with React, FastAPI, OpenAI APIs and AWS.",
      "Independently designed, built and deployed PostgresHub for Microsoft Build — later published by Microsoft.",
      "Led client calls, demos and technical discussions with enterprise and big-tech stakeholders.",
      "Shipped full-stack solutions across JavaScript, TypeScript, React, FastAPI, Docker, AWS and GitHub Actions.",
      "Coordinated delivery with Product, QA, DevOps and engineering to hit release dates.",
    ],
    stack: ["React", "TypeScript", "FastAPI", "OpenAI API", "Docker", "AWS", "GitHub Actions"],
  },
  {
    role: "Software Engineer I",
    company: "Emumba Pvt. Ltd.",
    location: "Islamabad, PK",
    period: "Apr 2024 — Jul 2025",
    years: "2024",
    summary:
      "Enterprise-scale frontend, a design-system migration, and my first taste of LLM product work.",
    points: [
      "Delivered complex flows — dashboards, widgets, data pipelines, ML-driven views, knowledge bases — for a major networking-industry client, inside a 45+ engineer org with an external partner team.",
      "Migrated an entire enterprise application onto the company design system, improving consistency and maintainability.",
      "Cut image load time by 90% for a major client through targeted frontend performance work.",
      "Delivered 6+ proof-of-concepts for enterprise clients including Fortune 500 organisations.",
      "Designed an AWS-based invoice automation solution for a business-critical financial workflow.",
      "Built backend services and REST APIs with Python, FastAPI, Node.js, Express and Docker.",
      "Refactored legacy codebases with clean architecture, reusable components and coding standards.",
    ],
    stack: [
      "React",
      "TypeScript",
      "SWR",
      "Redux Toolkit",
      "Material UI",
      "Storybook",
      "FastAPI",
      "LangChain",
      "AWS Lambda",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Emumba Pvt. Ltd.",
    location: "Islamabad, PK",
    period: "Jul 2023 — Aug 2023",
    years: "2023",
    summary: "Six weeks of deliberately hard practice, then four apps to prove it stuck.",
    points: [
      "Sharpened JavaScript fundamentals through structured problem-solving on Exercism.",
      "Built a Weather App, Countries Data explorer, To-Do List and Budget Tracker with TypeScript, React, Context API, TanStack Query, Redux Toolkit, React Hook Form and Yup.",
      "Added backend depth with Node.js, Express, JWT auth, REST APIs and MongoDB.",
    ],
    stack: ["React", "TypeScript", "TanStack Query", "Node.js", "MongoDB"],
  },
  {
    role: "Software Engineer Intern",
    company: "M5HOST",
    location: "Islamabad, PK",
    period: "Aug 2022 — Sep 2022",
    years: "2022",
    summary: "Where it started — a static portfolio, built under the CEO's mentorship.",
    points: [
      "Introduced to web development through PHP, HTML, CSS and JavaScript; shipped my first portfolio site.",
      "Built OOP and DSA foundations solving problems in C++ and Java.",
    ],
    stack: ["JavaScript", "PHP", "HTML", "CSS", "C++"],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type Project = {
  index: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  href?: string; // omit to render as a non-clickable case study
  accentText?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "PostgresHub",
    subtitle: "Microsoft Build",
    year: "2025",
    role: "Sole engineer — architecture to deployment",
    // TODO: paste the public PostgresHub URL here to make the card clickable
    // href: "https://...",
    accentText: "Published by Microsoft",
    featured: true,
    description:
      "A learning platform for the Postgres developer community, built for Microsoft and published by them. I owned every layer: information architecture, frontend, content pipeline, CI/CD and deployment — plus the client meetings that shaped it.",
    highlights: [
      "Shipped the full stack solo, from requirements through production deployment",
      "Built AI automation that scrapes blogs and docs, diffs them against the main repo and opens pull requests for review",
      "Optimised a content-heavy application by 90%, transforming perceived load time",
      "Recognised by both the Microsoft team and company leadership on delivery",
    ],
    stack: ["React", "Docusaurus", "OpenAI API", "GitHub Actions", "Docker", "JavaScript"],
  },
  {
    index: "02",
    title: "Solution Accelerators",
    subtitle: "Microsoft",
    year: "2024 — 2025",
    role: "Frontend lead (3 months as acting project lead)",
    accentText: "Presented at Microsoft Build",
    featured: true,
    description:
      "A series of GenAI reference solutions Microsoft ships to enterprise customers. I led three of them across frontend, backend, RAG pipelines and deployment — and held full ownership for three months in the project lead's absence.",
    highlights: [
      "Delivered GenAI solutions spanning frontend, backend, RAG and deployment workflows",
      "Assessed and hardened the frontend for security, quality, maintainability and reliability",
      "Fixed backend defects and improved RAG pipelines, supporting production deploys independently",
      "Aligned technical delivery with enterprise stakeholders and their timelines",
    ],
    stack: ["React", "TypeScript", "Express", "REST", "OpenAI API", "RAG", "LLMs", "Docker"],
  },
  {
    index: "03",
    title: "Network Intelligence Platform",
    subtitle: "Enterprise client · NDA",
    year: "2024 — 2025",
    role: "Frontend engineer in a 45+ engineer org",
    description:
      "A large-scale platform for a major networking-industry client, built with an internal team of 45+ engineers and an external partner team. I delivered the complex end of the surface area and later migrated the whole application onto the shared design system.",
    highlights: [
      "Built dashboards, configurable widgets, data pipelines and ML-driven views",
      "Delivered knowledge-base and data-product experiences under fast release cycles",
      "Migrated the entire application to the company design system without regressions",
      "Worked across TypeScript, SWR, Redux Toolkit, Material UI and React Hook Form",
    ],
    stack: ["TypeScript", "React", "SWR", "Redux Toolkit", "Material UI", "React Hook Form"],
  },
  {
    index: "04",
    title: "Invoice Automation",
    subtitle: "AWS serverless",
    year: "2024",
    role: "Design & implementation",
    description:
      "A finance automation pipeline that generates and delivers invoices for clients and partners — a sensitive, business-critical workflow where correctness and auditability mattered more than cleverness.",
    highlights: [
      "Serverless pipeline on Lambda, SES, S3 and CloudWatch",
      "Secure, reliable invoice generation and delivery for clients and partners",
      "Removed manual steps from a recurring financial process",
    ],
    stack: ["AWS Lambda", "SES", "S3", "CloudWatch", "Node.js", "Python"],
  },
  {
    index: "05",
    title: "LiveCalcio",
    subtitle: "Computer vision × football",
    year: "2024",
    role: "Full-stack & ML integration",
    description:
      "Tap a player in a football video and get their stats. A mobile app that runs person detection and jersey-number recognition over match footage, then tracks how close each player is to breaking a record.",
    highlights: [
      "YOLOv8 for on-pitch person detection, YOLOv5 for jersey-number identification",
      "Milestone Tracker showing distance from each statistical record",
      "Firebase Auth, Firestore history and Storage for match clips",
    ],
    stack: ["React Native", "Expo", "Firebase", "Python", "YOLOv8"],
  },
  {
    index: "06",
    title: "MERN Commerce",
    subtitle: "Marketplace",
    year: "2023",
    role: "Full-stack",
    description:
      "A two-sided marketplace where users buy and sellers manage their own catalogue — the project where authentication, authorisation and route protection stopped being abstract concepts.",
    highlights: [
      "JWT-based authentication with protected admin and seller routes",
      "Full CRUD for sellers over their own products",
      "Redux-driven cart and order flow",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Redux"],
  },
];

// ---------------------------------------------------------------------------
// Skills — `icon` keys map to <TechIcon /> in components/ui/TechIcon.tsx
// ---------------------------------------------------------------------------

export type SkillGroup = {
  title: string;
  caption: string;
  items: { name: string; icon: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    caption: "What I reach for first",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cpp" },
    ],
  },
  {
    title: "Frontend craft",
    caption: "Interfaces, systems, motion",
    items: [
      { name: "Tailwind", icon: "tailwind" },
      { name: "SASS", icon: "sass" },
      { name: "Material UI", icon: "mui" },
      { name: "Ant Design", icon: "antd" },
      { name: "shadcn/ui", icon: "shadcn" },
      { name: "Storybook", icon: "storybook" },
      { name: "Framer Motion", icon: "framer" },
      { name: "HTML5", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    title: "State & data",
    caption: "Keeping the client honest",
    items: [
      { name: "Redux Toolkit", icon: "redux" },
      { name: "TanStack Query", icon: "tanstack" },
      { name: "SWR", icon: "swr" },
      { name: "GraphQL", icon: "graphql" },
      { name: "React Router", icon: "router" },
    ],
  },
  {
    title: "Backend",
    caption: "Where the data actually lives",
    items: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "AI & LLM",
    caption: "Shipped, not demoed",
    items: [
      { name: "OpenAI API", icon: "openai" },
      { name: "RAG", icon: "rag" },
      { name: "LangChain", icon: "langchain" },
    ],
  },
  {
    title: "Cloud & tooling",
    caption: "Getting it to production",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Jest", icon: "jest" },
      { name: "Postman", icon: "postman" },
      { name: "Jira", icon: "jira" },
      { name: "Docusaurus", icon: "docusaurus" },
      { name: "Firebase", icon: "firebase" },
      { name: "Expo", icon: "expo" },
    ],
  },
];

// Logos that orbit / marquee in the hero + skills header
export const marqueeIcons = [
  "react",
  "typescript",
  "nextjs",
  "fastapi",
  "node",
  "aws",
  "docker",
  "python",
  "tailwind",
  "mongodb",
  "postgres",
  "graphql",
  "redux",
  "openai",
  "langchain",
  "storybook",
  "framer",
  "vercel",
  "git",
  "jest",
];

// ---------------------------------------------------------------------------
// Beyond code
// ---------------------------------------------------------------------------

export const leadership = [
  {
    title: "President — Emumba Toastmasters Club",
    period: "2024 — 2025",
    body: "Led club operations and events, and guided the club to the Presidential Distinguished Award — an internationally recognised honour for top-performing clubs. Previously VP Public Relations. Ranked among the top 5 clubs nationally.",
    tag: "Leadership",
  },
  {
    title: "President — Student Society, Bahria University",
    period: "2021 — 2024",
    body: "Ran society operations and events through my degree, alongside a 3.43 CGPA in BS Software Engineering.",
    tag: "Leadership",
  },
  {
    title: "Mentoring — communication & public speaking",
    period: "Ongoing",
    body: "Mentored engineers and club members in communication, leadership and public speaking — the skill that turns good technical work into decisions people act on.",
    tag: "Leadership",
  },
  {
    title: "UNICEF — 43rd International Conference on ECD",
    period: "",
    body: "Part of the management team, supporting event coordination, logistics and stakeholder collaboration.",
    tag: "Volunteer",
  },
  {
    title: "Human Design Studio × Netherlands Embassy",
    period: "",
    body: "Represented and presented Dutch culture at the Euro Village event in Islamabad alongside embassy members and international participants.",
    tag: "Volunteer",
  },
  {
    title: "Raasta Foundation",
    period: "",
    body: "Contributed to fundraising for food and essential assistance for underprivileged families.",
    tag: "Volunteer",
  },
];

export const education = [
  {
    school: "Bahria University, Islamabad",
    degree: "BS Software Engineering",
    detail: "CGPA 3.43 · President, Student Society",
    period: "2021 — 2024",
  },
  {
    school: "KRL Model College, Kahuta",
    degree: "HSSC",
    detail: "87% · President of Hayyan Company",
    period: "2018 — 2020",
  },
  {
    school: "Bahria Foundation College, Kahuta",
    degree: "Matriculation",
    detail: "92%",
    period: "2016 — 2018",
  },
];

export const certifications = [
  { name: "Advanced React", issuer: "Meta · Coursera" },
  { name: "Programming with JavaScript", issuer: "Meta · Coursera" },
  { name: "Use React with Express", issuer: "Coursera" },
  { name: "AWS Cloud Technical Essentials", issuer: "Amazon Web Services · Coursera" },
  { name: "Agile Leadership", issuer: "Coursera" },
];

export const interests = [
  "Book reading",
  "Singing",
  "Poetry writing",
  "Martial arts",
  "Event management",
  "Public speaking",
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
