export type ProjectTone = "violet" | "cyan" | "orange" | "emerald";

export type Project = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  stack: string[];
  href: string;
  tone: ProjectTone;
};

/**
 * Placeholder projects. Replace the title, tag, summary, stack and href
 * for each one with a real project, or add more entries. Leave the
 * array empty ("[]") to see the built in empty state on the work
 * section instead. "tone" picks which glow color the card uses,
 * violet, cyan, orange or emerald.
 */
export const projects: Project[] = [
  {
    id: "project-one",
    tag: "Web App / SaaS",
    title: "TK Designs Website",
    summary:
      "TK Designs & Carpentry had no website and relied entirely on word of mouth, so I built a full marketing site with a services breakdown, filterable project portfolio, testimonials, and a quote form that routes to email and WhatsApp at once, helping bring in around 70% more client enquiries since launch.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "https://www.tkdesignspty.co.za/",
    tone: "orange",
  },
  {
    id: "project-two",
    tag: "Add category, e.g. Fintech / Web App",
    title: "Add your second project name",
    summary:
      "Replace this with one or two sentences on the problem, what you built, and the measurable outcome.",
    stack: ["React", "Node.js", "Redis"],
    href: "#",
    tone: "cyan",
  },
  {
    id: "project-three",
    tag: "Add category, e.g. E-commerce / Brand",
    title: "Add your third project name",
    summary:
      "Replace this with one or two sentences on the problem, what you built, and the measurable outcome.",
    stack: ["Next.js", "Stripe", "Tailwind CSS"],
    href: "#",
    tone: "orange",
  },
  {
    id: "project-four",
    tag: "Add category, e.g. SaaS / Ops tooling",
    title: "Add your fourth project name",
    summary:
      "Replace this with one or two sentences on the problem, what you built, and the measurable outcome.",
    stack: ["GraphQL", "Node.js", "AWS"],
    href: "#",
    tone: "emerald",
  },
];

export type ShowcaseStats = {
  targetCount: number;
  label: string;
  subtext: string;
};

export const showcaseStats: ShowcaseStats = {
  targetCount: 40,
  label: "Projects Shipped",
  subtext: "Across production systems and side projects",
};

export const stack: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Prisma",
  "PHP",
  "ASP.NET",
];

export type ProcessStep = {
  index: string;
  title: string;
  copy: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "Scope",
    title: "Scope the problem",
    copy: "Sit with the requirements, the data, and the edge cases until the smallest useful version of the system is clear.",
  },
  {
    index: "Build",
    title: "Build in the open",
    copy: "Ship in small, reviewable increments, from schema to interface, with tests and types carrying the weight.",
  },
  {
    index: "Operate",
    title: "Operate what ships",
    copy: "Watch it in production, fix what breaks, and keep the system easy for the next engineer to reason about.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/code-tumelo/" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];

export const email = "tumelomoletsane352@gmail.com";
