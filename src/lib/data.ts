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
  // About-section lead. Split on "|": line 1 is the hook, line 2 the qualifier.
  intro:
    "I own the whole surface.|From the React component down to the Docker image that ships it.",
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

// ---------------------------------------------------------------------------
// Recommendations — scraped from LinkedIn. Verify/update `linkedIn` URLs.
// ---------------------------------------------------------------------------

export type Recommendation = {
  name: string;
  title: string;
  relationship: string;
  date: string;
  body: string;
  linkedIn: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Urooj Kamran",
    title: "Building High-Performing Engineering Teams | HR Strategy | AI & Org Transformation",
    relationship: "Manager",
    date: "Jul 2026",
    body: "I've actually known Abdullah since he joined as an intern, and it's been a privilege to watch his journey and growth over the years. Seeing him return as a full-time engineer felt like a natural continuation of someone who has always been driven by curiosity, passion, and a genuine desire to grow.\n\nWhat stands out most isn't just his technical ability; it's the energy he brings to the people around him. He's incredibly encouraging, consistently positive, and the kind of person who inspires others to believe that challenges are simply opportunities to learn. Whether he's taking on engineering work, leading as President of our Toastmasters Club, or sharing his love for poetry, he approaches everything with enthusiasm and authenticity.\n\nHe's someone who naturally lifts the people around him. His optimism is grounded in action, his can-do attitude is infectious, and he has a remarkable ability to make even ambitious goals feel achievable. When he's involved, you know he'll give his best and encourage everyone else to do the same.\n\nHe's an exceptional teammate, an inspiring leader, and above all, a genuinely wonderful person. He's meant for great things, and I have no doubt he will go above and beyond in making them happen!",
    linkedIn: "https://www.linkedin.com/in/uroojulhudakamran/",
  },
  {
    name: "Nimrah Ahmed",
    title: "Head of Design and UX at Emumba",
    relationship: "Colleague",
    date: "Aug 2026",
    body: "I had the opportunity to work with Abdullah, and one thing that always stood out was his initiative taking ability. He never stopped at simply delivering what was assigned, he would often take the extra step to refine, improve, and polish the solution without anyone asking. That level of ownership is rare.\n\nBeyond his technical skills, he's the kind of person who brings positive energy to the team, is always willing to help, and genuinely cares about delivering quality work. I'd happily recommend him to any team looking for a proactive and dependable developer.",
    linkedIn: "https://www.linkedin.com/in/nimrah-ahmed-9b1390414/",
  },
  {
    name: "Talha Munawar",
    title: "Lead Software Engineer at Emumba",
    relationship: "Manager",
    date: "Jul 2026",
    body: "I had the pleasure of leading Abdullah and working closely with him on our project.\n\nAbdullah quickly ramped up on the project, demonstrating a strong ability to understand new technologies, business requirements, and existing codebases with minimal guidance. He is a fast learner with a structured approach to problem-solving and consistently remains composed when tackling technical challenges.\n\nHe communicates effectively, collaborates well with the team, and takes ownership of his work. Abdullah consistently delivers high-quality solutions on time and is proactive in learning, asking the right questions, and contributing to technical discussions.\n\nHis technical aptitude, strong work ethic, and collaborative mindset make him a valuable addition to any engineering team. It has been a pleasure working with and managing him, and I highly recommend him for any software engineering role.",
    linkedIn: "https://www.linkedin.com/in/talhamunawar/",
  },
  {
    name: "Affan Syed",
    title: "VP AI Engineering | Data | R&D | Emumba",
    relationship: "Senior",
    date: "Jul 2026",
    body: "I worked with Mirza for about a year across a large delivery team for work we did for Microsoft, and came to know him well professionally and socially.\n\nMirza's strength is making the people around him better. He creates trust and cohesion, and on complex delivery that human glue is often what separates a team that ships from one that stalls. He backs it with polished work and a genuine eye for front-end design.\n\nWe are heading into a period where no single skill set is a guarantee, and the people who stand out will be the ones who can hold a team together and elevate everyone in it. Mirza has that in abundance, and several other non-technical skills as well. Some team out there needs exactly what he brings, and when he builds around those strengths, he will go far.\n\nI recommend him wholeheartedly.",
    linkedIn: "https://www.linkedin.com/in/affan-ahmed-syed/",
  },
  {
    name: "Ali Zaib",
    title: "Senior Software Engineer @ Emumba | JavaScript · TypeScript · Web & Mobile",
    relationship: "Mentor",
    date: "Jul 2026",
    body: "I've had the opportunity to work with Mirza Abdullah and watch him grow professionally over the years. He has a strong sense of ownership and approaches every task with responsibility and professionalism. One of his biggest strengths is his problem-solving mindset. He stays calm under pressure, thinks through challenges, and consistently finds practical solutions.\n\nBeyond his technical abilities, Mirza communicates clearly, collaborates well with others, and has excellent presentation skills. He's dependable, eager to learn, and always willing to go the extra mile to ensure things get done the right way. I'm confident he'll be a valuable asset to any team, and I highly recommend him for opportunities where ownership, teamwork, and execution matter.",
    linkedIn: "https://www.linkedin.com/in/ali-zaib-2bba38193/",
  },
  {
    name: "Faraya Baig",
    title: "AI Software Engineer | Conversational AI | NLU | Generative AI",
    relationship: "Colleague",
    date: "Jul 2026",
    body: "I had the opportunity to work with Abdullah for around five months at Emumba, where we collaborated on an AI-powered Agentic Mentor application. While I was responsible for the AI backend and agentic workflows, Abdullah led the frontend development.\n\nHe is a skilled engineer who consistently delivered clean, well-structured, and intuitive user interfaces. What I appreciated most was his ability to quickly understand product requirements, communicate effectively, and work collaboratively across the stack. He was proactive in resolving integration issues, and ensuring the frontend and backend worked seamlessly together.\n\nBeyond his technical skills, Abdullah is dependable, easy to work with, and always maintained a positive attitude, even when project requirements evolved. I enjoyed working with him and would be happy to collaborate with him again in the future.",
    linkedIn: "https://www.linkedin.com/in/faraya-baig-b88755221/",
  },
  {
    name: "Maheer Arshad",
    title: "SDET @ Veeam | AWS Certified AI Practitioner | Content Writer",
    relationship: "Colleague",
    date: "Jul 2026",
    body: "I had the pleasure of working with Abdullah on Microsoft's Agentic AI Solution Accelerator and other projects, where he consistently stood out as a skilled, dependable, and collaborative software engineer. He was always willing to help, whether it involved solving technical challenges, troubleshooting issues, or supporting the team through different stages of the project.\n\nI also worked under his leadership during his time as President of the Emumba Toastmasters Club. His communication, leadership, and ability to guide and motivate others were truly impressive. He is not only technically strong but also a supportive and effective leader.",
    linkedIn: "https://www.linkedin.com/in/maheer-arshad/",
  },
  {
    name: "Ayaz Ahmed Turk",
    title: "Software Engineer | React.js · Next.js · TypeScript",
    relationship: "Direct Report",
    date: "Jul 2026",
    body: "I had the pleasure of working alongside Mirza Abdullah Bin Abrar at Emumba and collaborating with him for nearly a year through the Emumba Toastmasters Club, where he served as Club President and I served as Vice President.\n\nMirza is an exceptional leader who leads by example. During his tenure as President, he played a key role in growing the club's membership and inspiring members to step into leadership roles with confidence. His ability to mentor others, foster collaboration, and create a supportive environment made a lasting impact on the club.\n\nWhat stands out most about Mirza is his reliability and genuine commitment to helping others grow. He is an excellent public speaker, a thoughtful mentor, and someone who consistently brings professionalism and positivity to every interaction.",
    linkedIn: "https://www.linkedin.com/in/ayaz-ahmed-turk/",
  },
  {
    name: "Asad Ullah",
    title: "Software Engineer | React & Next.js Specialist | Node.js",
    relationship: "Manager",
    date: "Jul 2026",
    body: "I had the pleasure of working with Abdullah on a project where I had the opportunity to mentor and collaborate with him closely. Throughout our time working together, he consistently demonstrated a strong willingness to learn, take feedback positively, and continuously improve his skills.\n\nHe is dependable, proactive, and approaches challenges with a problem-solving mindset. What impressed me most was his ability to quickly understand new concepts and apply them effectively. He never hesitated to share his ideas, took ownership of his tasks, and always put in the effort to deliver quality work.\n\nBeyond his technical abilities, he is a great team player. He communicates well, is respectful of others, and contributes positively to the team's environment. I am confident that he will continue to grow into an excellent software engineer.",
    linkedIn: "https://www.linkedin.com/in/asad-ullah-shaheen/",
  },
  {
    name: "Muhammad Zohaib",
    title: "Senior Software Consultant II @10Pearls | MERN · React.js · Svelte · TypeScript",
    relationship: "Mentor",
    date: "Jul 2026",
    body: "Mirza Abdullah Bin Abrar's eagerness to continuously learn, adapt, and explore new technologies is one of his strongest qualities. He consistently demonstrates a growth mindset and is always willing to take on new challenges to expand his knowledge and skills. His dedication, positive attitude, and commitment to delivering quality work make him a valuable member of any team. It has been a pleasure working with and managing Abdullah, and I highly recommend him for any opportunity where curiosity, ownership, and technical excellence are valued.",
    linkedIn: "https://www.linkedin.com/in/zohaib0424/",
  },
  {
    name: "Mufti Danyal Haroon",
    title: "Cloud, Data & AI Transformation | AWS Alliances | GenAI | 2x AWS Certified",
    relationship: "Cross-team",
    date: "Jul 2026",
    body: "I had the opportunity to know Abdullah during our time at Emumba and was consistently impressed by his professionalism and positive attitude. He carries himself with maturity, communicates effectively, and is someone who builds strong working relationships across teams.\n\nWhat stands out most is his willingness to learn, his structured approach to problem-solving, and his ability to remain composed when tackling challenges. He's proactive, dependable, and always brings a collaborative mindset to discussions.\n\nI'm confident Abdullah will be a valuable addition to any team that values ownership, adaptability, and strong interpersonal skills.",
    linkedIn: "https://www.linkedin.com/in/mufti-danyal-haroon-29a05953/",
  },
  {
    name: "Muhammad Shajjar",
    title: "Software Engineer | Committed to transforming ideas into reality",
    relationship: "Colleague",
    date: "Jul 2026",
    body: "A great communicator and someone I genuinely enjoy working with.\n\nI've worked with him closely and have seen how hardworking and responsible he is. He always takes ownership of his work and gives his best in every task.\n\nI highly recommend Mirza to any team looking for a passionate engineer who is dedicated, reliable, and always willing to learn and contribute.",
    linkedIn: "https://www.linkedin.com/in/muhammad-shajjar/",
  },
  {
    name: "Afnan Sohail",
    title: "Software Engineer II @ Emumba",
    relationship: "Direct Report",
    date: "Jul 2026",
    body: "I had the pleasure of working with Abdullah on a project, and it was a great experience from start to finish. He's technically strong, communicates clearly, and is always collaborative and reliable.\n\nWorking together was seamless, and his professionalism made a real difference. I'd gladly recommend Abdullah and would be happy to work with him again.",
    linkedIn: "https://www.linkedin.com/in/afnansohail99/",
  },
  {
    name: "Abdul Zahoor",
    title: "Full Stack Engineer | React · Next.js · Node.js · Express · Vite",
    relationship: "Mentor",
    date: "Dec 2024",
    body: "I highly recommend Abdullah for his exceptional learning ability and passion for software development. He consistently demonstrates responsibility and punctuality in completing assigned tasks. With his creativity and excellent communication skills, Abdullah would be an invaluable asset to anyone seeking these qualities.",
    linkedIn: "https://www.linkedin.com/in/its4zahoor/",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
