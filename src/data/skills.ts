export type Skill = {
  id: number;
  name: string;
  category: string;
  icon: string;
  iconFallback: string;
  color: string;
  type: string;
};

export type SkillCategory = {
  id: string;
  label: string;
  color: string;
};

export const skillsData: Skill[] = [
  { id: 1, name: "Cursor", category: "AI Tools", icon: "https://cursor.sh/brand/icon.svg", iconFallback: "https://www.cursor.com/favicon.ico", color: "#000000", type: "tool" },
  { id: 2, name: "GitHub Copilot", category: "AI Tools", icon: "https://github.githubassets.com/assets/copilot-4a5b3aa5a694.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#6e40c9", type: "tool" },
  { id: 3, name: "Claude Code", category: "AI Tools", icon: "https://claude.ai/images/claude_app_icon.png", iconFallback: "https://anthropic.com/favicon.ico", color: "#D97757", type: "tool" },
  { id: 4, name: "Agentic AI", category: "AI Tools", icon: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png", iconFallback: "https://cdn-icons-png.flaticon.com/512/6996/6996521.png", color: "#7C3AED", type: "concept" },
  { id: 5, name: "AI / ML", category: "AI Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", color: "#FF6F00", type: "domain" },
  { id: 6, name: "LLM API", category: "AI Tools", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png", iconFallback: "https://cdn-icons-png.flaticon.com/512/13946/13946134.png", color: "#10A37F", type: "concept" },
  { id: 7, name: "Generative UI", category: "AI Tools", icon: "https://cdn-icons-png.flaticon.com/512/10739/10739958.png", iconFallback: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png", color: "#A855F7", type: "concept" },
  { id: 8, name: "CopilotKit", category: "AI Tools", icon: "https://avatars.githubusercontent.com/u/152502674?s=200&v=4", iconFallback: "https://cdn-icons-png.flaticon.com/512/6996/6996521.png", color: "#6366F1", type: "framework" },
  { id: 9, name: "Google ADK", category: "AI Tools", icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", color: "#4285F4", type: "framework" },
  { id: 10, name: "MCP", category: "AI Tools", icon: "https://claude.ai/images/claude_app_icon.png", iconFallback: "https://cdn-icons-png.flaticon.com/512/2103/2103652.png", color: "#D97757", type: "protocol" },
  { id: 11, name: "ZenFlow", category: "Tools", icon: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", iconFallback: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png", color: "#06B6D4", type: "tool" },
  { id: 12, name: "JavaScript", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", color: "#F7DF1E", type: "language" },
  { id: 13, name: "TypeScript", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg", color: "#3178C6", type: "language" },
  { id: 14, name: "Python", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg", color: "#3776AB", type: "language" },
  { id: 15, name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-plain.svg", color: "#61DAFB", type: "framework" },
  { id: 16, name: "React Native", category: "Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-plain.svg", color: "#61DAFB", type: "framework" },
  { id: 17, name: "Expo", category: "Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg", iconFallback: "https://avatars.githubusercontent.com/u/12504344?s=200&v=4", color: "#000020", type: "framework" },
  { id: 18, name: "Tailwind CSS", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", iconFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png", color: "#06B6D4", type: "framework" },
  { id: 19, name: "Bootstrap", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", color: "#7952B3", type: "framework" },
  { id: 20, name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg", color: "#339933", type: "runtime" },
  { id: 21, name: "Bun", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg", iconFallback: "https://bun.sh/logo.svg", color: "#FBF0DF", type: "runtime" },
  { id: 22, name: "MongoDB", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg", color: "#47A248", type: "database" },
  { id: 23, name: "SQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4479A1", type: "database" },
  { id: 24, name: "Supabase", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", iconFallback: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4", color: "#3ECF8E", type: "database" },
  { id: 25, name: "Neon", category: "Database", icon: "https://avatars.githubusercontent.com/u/77690634?s=200&v=4", iconFallback: "https://neon.tech/favicon/favicon.svg", color: "#00E5BF", type: "database" },
  { id: 26, name: "Linux", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg", color: "#FCC624", type: "os" },
  { id: 27, name: "Git", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg", color: "#F05032", type: "tool" },
  { id: 28, name: "GitHub", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-plain.svg", color: "#181717", type: "platform" },
  { id: 29, name: "Figma", category: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg", color: "#F24E1E", type: "tool" },
  { id: 30, name: "MERN Stack", category: "Fullstack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", iconFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#47A248", type: "stack" },
  { id: 31, name: "SaaS", category: "Fullstack", icon: "https://cdn-icons-png.flaticon.com/512/9321/9321329.png", iconFallback: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png", color: "#6366F1", type: "concept" },
  { id: 32, name: "Healthcare IT", category: "Domain", icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png", iconFallback: "https://cdn-icons-png.flaticon.com/512/2785/2785482.png", color: "#0EA5E9", type: "domain" },
  { id: 33, name: "DSA", category: "Computer Science", icon: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png", iconFallback: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png", color: "#F59E0B", type: "concept" },
  { id: 34, name: "AI Integration", category: "AI Tools", icon: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png", iconFallback: "https://cdn-icons-png.flaticon.com/512/10739/10739958.png", color: "#8B5CF6", type: "concept" },
];

export const skillCategories: SkillCategory[] = [
  { id: "ai-tools", label: "AI Tools", color: "#7C3AED" },
  { id: "languages", label: "Languages", color: "#F59E0B" },
  { id: "frontend", label: "Frontend", color: "#06B6D4" },
  { id: "backend", label: "Backend", color: "#339933" },
  { id: "mobile", label: "Mobile", color: "#61DAFB" },
  { id: "database", label: "Database", color: "#3ECF8E" },
  { id: "devops", label: "DevOps", color: "#F05032" },
  { id: "design", label: "Design", color: "#F24E1E" },
  { id: "fullstack", label: "Fullstack", color: "#6366F1" },
  { id: "domain", label: "Domain", color: "#0EA5E9" },
  { id: "computer-science", label: "Computer Science", color: "#F59E0B" },
  { id: "tools", label: "Tools", color: "#10B981" },
];
