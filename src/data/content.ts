export const contact = {
  phone: "+91-9174664925",
  email: "b24cs1047@iitj.ac.in",
  linkedin: "https://linkedin.com/in/nayan-patidar",
  linkedinLabel: "linkedin.com/in/nayan-patidar",
  github: "https://github.com/nayan9617",
  githubLabel: "github.com/nayan9617",
  location: "Jodhpur, India",
  resumeHref: "/Nayan-Patidar-Resume.pdf",
};

export const hero = {
  name: "Nayan Patidar",
  role: "CS undergrad, IIT Jodhpur — builder of full-stack systems that ship and scale",
  // Quiet confidence: specificity over boast. The climb is in the work.
  line: "Raising systems that ship under real load — from a foundation that holds.",
};

export const grounded = {
  statement:
    "I climb hard, but I don't climb hollow. Gratitude for what's been given, faith that keeps me steady, and a clear head when the noise gets loud — that's the bedrock everything else is built on.",
};

export const education = {
  school: "Indian Institute of Technology Jodhpur",
  degree: "B.Tech, Computer Science and Engineering",
  cgpa: "7.84/10",
  dates: "Jul 2024 – May 2028",
};

export const skills = [
  { label: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript", "C"] },
  { label: "Frontend", items: ["React.js"] },
  { label: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Prisma"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL"] },
  { label: "AI/ML", items: ["Scikit-learn", "Pandas", "NumPy"] },
  { label: "Developer Tools", items: ["Git", "GitHub", "Socket.io"] },
  { label: "Core CS", items: ["Data Structures & Algorithms", "REST APIs"] },
];

export const experience = [
  {
    org: "Handshake AI",
    location: "Remote",
    role: "AI Training Fellow — Project Dynamo (Contract)",
    dates: "Jul 2026 – Present",
    // TODO: Nayan — this role is brand new. Once you're a few weeks in, replace or add a second bullet with something concrete: the actual task type, stack, or QC process, once you know what's shareable. Don't ship this with only the one generic bullet for long — a single vague line reads worse than no entry at all once a recruiter clicks in.
    bullets: [
      "Selected as a fellow for Project Dynamo, contributing benchmark task design and calibration work for frontier AI model training and evaluation, in a similar scope to prior AfterQuery/Harbor work.",
    ],
  },
  {
    org: "Summer of Bitcoin",
    role: "Open Source Contributor — Finalist",
    dates: "Jan 2026 – Apr 2026",
    bullets: [
      "Advanced through three evaluation rounds covering Bitcoin protocol design, distributed systems, and software engineering as part of a competitive open-source contributor selection process.",
      "Authored a technical proposal outlining an implementation plan, performance optimizations, and contributor roadmap for open-source Bitcoin infrastructure.",
      "Reached finalist status in a globally competitive selection where few candidates advance.",
    ],
  },
  {
    org: "AfterQuery / Harbor",
    location: "Remote",
    role: "Benchmark Task Author (Contract)",
    dates: "Nov 2025 – Present",
    bullets: [
      "Designed and calibrated coding benchmark tasks used to train and evaluate LLM coding agents for frontier AI labs — planting deliberate bugs and edge cases tuned so weaker models fail predictably while stronger models pass only rarely.",
      "Built realistic backend reference codebases as production-like environments for benchmark tasks, giving agents a real system to reason about rather than a toy problem.",
      "Took tasks through full QC pipelines — similarity checks, fairness review, and difficulty calibration — with multiple tasks approved as reference benchmarks on the platform.",
    ],
  },
  {
    org: "3i Consulting Pvt. Ltd.",
    location: "Remote",
    role: "AI/ML Intern",
    dates: "Sep 2025 – Nov 2025",
    bullets: [
      "Contributed to AI/ML solutions spanning newspaper OCR extraction and news intelligence systems, building tooling to process and structure unstructured text at scale.",
      "Built data scraping pipelines aggregating content from 100+ news sources to power a Brand Narrative Intelligence platform.",
      "Developed agricultural market pricing models for FarmerPay, applying ML techniques to real-world pricing data.",
    ],
  },
  {
    org: "GirlScript Summer of Code (GSSoC)",
    role: "Open Source Contributor",
    dates: "2025",
    bullets: [
      "Landed 20+ merged pull requests across multiple open-source repositories, resolving bugs and improving code maintainability in collaboration with project maintainers.",
    ],
  },
];

export const projects = [
  {
    name: "HackSprint",
    tagline: "Hackathon Management Platform",
    stack: "MERN Stack",
    github: "https://github.com/nayan9617/HackSprint/tree/main",
    live: "http://hacksprint.devluplabs.tech/",
    bullets: [
      "Built a full-stack hackathon management platform that powered two large-scale institute events end-to-end for 5,000+ participants.",
      "Automated the participant lifecycle — registration, team formation, submission tracking, and leaderboard generation — streamlining operations for organizers.",
      "Optimized MongoDB schema design and query patterns to sustain high-concurrency access during peak submission windows.",
      "Selected as the official platform for the upcoming Summer SBI Hackathon after deploying and scaling the system for institute-wide use.",
    ],
  },
  {
    name: "Queueless",
    tagline: "Smart Queue Management System",
    stack: "React.js, TypeScript, Node.js, FastAPI, MongoDB, Socket.io",
    github: "https://github.com/nayan9617/queueless-smart-booking/tree/main",
    live: null as string | null,
    bullets: [
      "Engineered a full-stack queue management platform enabling real-time customer tracking and service monitoring.",
      "Built a dedicated FastAPI service using Scikit-learn to predict customer wait times from historical service durations and live queue state.",
      "Implemented WebSocket-based communication via Socket.io, delivering sub-second updates between customer and operator dashboards.",
      "Implemented JWT-based authentication, role-based access control, and schema validation to securely isolate customer and salon-owner data across multiple tenants.",
    ],
  },
  {
    name: "PHC",
    tagline: "Primary Health Centre Integrated Digital System",
    stack: "React.js, Node.js, Express.js, PostgreSQL, Prisma",
    github: "https://github.com/xevrion/iitj-phc-system/tree/main",
    live: null as string | null,
    bullets: [
      "Architected an integrated healthcare platform for IIT Jodhpur, unifying patient records, pharmacy operations, and appointment workflows into a single system.",
      "Implemented role-based access controls spanning doctors, pharmacists, administrators, and patients to enforce secure, compartmentalized data access.",
      "Modeled the end-to-end system using UML diagrams, database schemas, and workflow diagrams.",
    ],
  },
];

export const positions = [
  {
    org: "Society of Alumni Affairs (SAA), IIT Jodhpur",
    role: "Coordinator",
    dates: "Jun 2025 – Apr 2026",
    bullets: [
      "Coordinated alumni outreach and networking initiatives, serving as a liaison between the alumni community and current students.",
    ],
  },
];

export const achievements = [
  { label: "JEE Advanced", value: "AIR 6820" },
  { label: "JEE Main", value: "AIR 21,615" },
  { label: "VITEEE", value: "AIR 2346" },
  { label: "Summer of Bitcoin", value: "Contributor (Finalist)" },
];

/**
 * Section registry for the elevation rail.
 * `altitude` values are stylistic only — not real elevation data.
 * They exist as a visual climb metaphor; do not treat as metrics.
 */
export const sections = [
  { id: "foundation", label: "Foundation", altitude: "000m" },
  { id: "grounded", label: "Grounded", altitude: "180m" },
  { id: "education", label: "Build Log — Education", altitude: "360m" },
  { id: "skills", label: "Build Log — Skills", altitude: "520m" },
  { id: "experience", label: "Build Log — Experience", altitude: "680m" },
  { id: "projects", label: "Build Log — Projects", altitude: "840m" },
  { id: "positions", label: "Build Log — Positions", altitude: "960m" },
  { id: "summit", label: "The Summit", altitude: "1100m" },
  { id: "basecamp", label: "Basecamp", altitude: "1200m" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
