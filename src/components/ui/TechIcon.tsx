"use client";

import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiMui,
  SiAntdesign,
  SiShadcnui,
  SiStorybook,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiPostman,
  SiJest,
  SiFirebase,
  SiExpo,
  SiVercel,
  SiReactquery,
  SiReactrouter,
  SiSwr,
  SiDocusaurus,
  SiHtml5,
  SiCss,
  SiLangchain,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { TbVectorTriangle } from "react-icons/tb";

/** Brand colour per tech — used for the hover state so logos "light up" in colour. */
export const TECH: Record<string, { Icon: IconType; label: string; color: string }> = {
  javascript: { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  python: { Icon: SiPython, label: "Python", color: "#3776AB" },
  cpp: { Icon: SiCplusplus, label: "C++", color: "#00599C" },
  react: { Icon: SiReact, label: "React", color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, label: "Next.js", color: "#FFFFFF" },
  redux: { Icon: SiRedux, label: "Redux Toolkit", color: "#764ABC" },
  tailwind: { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  sass: { Icon: SiSass, label: "SASS", color: "#CC6699" },
  mui: { Icon: SiMui, label: "Material UI", color: "#007FFF" },
  antd: { Icon: SiAntdesign, label: "Ant Design", color: "#0170FE" },
  shadcn: { Icon: SiShadcnui, label: "shadcn/ui", color: "#FFFFFF" },
  storybook: { Icon: SiStorybook, label: "Storybook", color: "#FF4785" },
  framer: { Icon: SiFramer, label: "Framer Motion", color: "#0055FF" },
  node: { Icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  express: { Icon: SiExpress, label: "Express", color: "#FFFFFF" },
  fastapi: { Icon: SiFastapi, label: "FastAPI", color: "#009688" },
  graphql: { Icon: SiGraphql, label: "GraphQL", color: "#E10098" },
  mongodb: { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  mysql: { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
  postgres: { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  docker: { Icon: SiDocker, label: "Docker", color: "#2496ED" },
  aws: { Icon: FaAws, label: "AWS", color: "#FF9900" },
  git: { Icon: SiGit, label: "Git", color: "#F05032" },
  github: { Icon: SiGithub, label: "GitHub", color: "#FFFFFF" },
  gitlab: { Icon: SiGitlab, label: "GitLab", color: "#FC6D26" },
  jira: { Icon: SiJira, label: "Jira", color: "#0052CC" },
  postman: { Icon: SiPostman, label: "Postman", color: "#FF6C37" },
  jest: { Icon: SiJest, label: "Jest", color: "#C21325" },
  firebase: { Icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  expo: { Icon: SiExpo, label: "Expo", color: "#FFFFFF" },
  vercel: { Icon: SiVercel, label: "Vercel", color: "#FFFFFF" },
  tanstack: { Icon: SiReactquery, label: "TanStack Query", color: "#FF4154" },
  router: { Icon: SiReactrouter, label: "React Router", color: "#CA4245" },
  swr: { Icon: SiSwr, label: "SWR", color: "#FFFFFF" },
  docusaurus: { Icon: SiDocusaurus, label: "Docusaurus", color: "#3ECC5F" },
  html: { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  css: { Icon: SiCss, label: "CSS", color: "#663399" },
  openai: { Icon: RiOpenaiFill, label: "OpenAI API", color: "#FFFFFF" },
  langchain: { Icon: SiLangchain, label: "LangChain", color: "#FFFFFF" },
  rag: { Icon: TbVectorTriangle, label: "RAG", color: "#C8FF00" },
};

export function TechIcon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const entry = TECH[name];
  if (!entry) return null;
  const { Icon } = entry;
  return <Icon className={className} style={style} aria-hidden />;
}

export function techColor(name: string) {
  return TECH[name]?.color ?? "#C8FF00";
}

export function techLabel(name: string) {
  return TECH[name]?.label ?? name;
}
