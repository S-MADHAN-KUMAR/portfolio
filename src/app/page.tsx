"use client";

import React, { useState } from 'react';
import {
  Files,
  Search,
  GitBranch,
  Boxes,
  Settings,
  User,
  Folder,
  FolderOpen,
  FileCode,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Zap,
  BookOpen,
  Briefcase,
  Cpu,
  Terminal,
  X,
  FileJson,
  FileText,
  Info,
  Package,
  Layers,
  ChevronLeft,
  Maximize2,
  Minus,
  Layout,
  FilePlus,
  FolderPlus,
  RotateCw,
  MoreHorizontal,
  Library,
  Hammer,
  CornerDownLeft,
  SendHorizontal,
  Plus,
  Atom
} from 'lucide-react';
import { FileTree } from '@/components/ui/file-tree';
import { TubesBackground } from '@/components/ui/neon-flow';
import { Timeline } from '@/components/ui/timeline';
import SphereImageGrid from '@/components/ui/sphere-image-grid';
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import ProjectUI, { PROJECT_CATEGORIES, type Project } from '@/components/ui/3d-folder';
import { ExternalLink, MousePointer2 } from 'lucide-react';

// Types
type FileItem = {
  name: string;
  type: 'file';
  content: string;
  language: string;
  icon: React.ReactNode;
  metadata?: any;
};

type FolderItem = {
  name: string;
  type: 'folder';
  children: (FileItem | FolderItem)[];
  isOpen?: boolean;
};

type WorkspaceItem = FileItem | FolderItem;

const ProjectDetailUI = ({ project }: { project: Project }) => {
  return (
    <div className="portfolio-ui-container overflow-y-auto h-full p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-accent/20 text-accent text-[10px] font-normal uppercase tracking-widest rounded">
                Project Detail
              </span>
              <span className="text-neutral-500 font-mono text-[10px]">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-normal text-white tracking-tighter uppercase italic drop-shadow-sm">
              {project.title}
            </h1>
            <p className="text-accent font-normal uppercase tracking-widest text-xs opacity-80">
              {project.date}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm font-normal text-white hover:bg-neutral-800 transition-colors"
              >
                <Github size={16} />
                <span>GITHUB</span>
              </a>
            )}
            {project.webapp && (
              <a 
                href={project.webapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-accent text-black rounded-lg text-sm font-normal hover:brightness-110 transition-all shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]"
              >
                <ExternalLink size={16} />
                <span>LAUNCH SITE</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 group shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
        </div>

        {/* Description & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-normal text-neutral-400 uppercase tracking-widest border-b border-neutral-800 pb-2">Description</h3>
              <p className="text-neutral-300 leading-relaxed text-lg whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-normal text-neutral-400 uppercase tracking-widest border-b border-neutral-800 pb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags?.map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-accent transition-colors">
                    {tag.image && <img src={tag.image} alt={tag.name} className="w-4 h-4 object-contain" />}
                    <span className="text-[11px] font-normal text-neutral-400 uppercase">{tag.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800 space-y-2 italic text-neutral-500 text-sm">
              <p>Built with quality & passion.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UIRenderer = ({ file, onProjectSelect }: { file: FileItem, onProjectSelect?: (p: Project) => void }) => {
  if (file.metadata && file.metadata.id) {
    return <ProjectDetailUI project={file.metadata} />;
  }

  if (file.name === 'overview.tsx') {
    const timelineData = [
      {
        title: "Aug 2025 - Present",
        content: (
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQGhqn-1sXzwJQ/company-logo_100_100/B56ZbxkQWKGoAQ-/0/1747809535790/healthpilotai_logo?e=1770854400&v=beta&t=3cBrHZ1Myo6nwKPzEWb8ahWivCKaouUHZWdaCKBpHdI" 
                alt="Healthpilot.ai Logo" 
                className="w-12 h-12 rounded-lg border border-neutral-800"
              />
              <div>
                <h4 className="text-xl font-normal text-white uppercase tracking-tight">Software Developer</h4>
                <span className="text-accent font-normal uppercase tracking-wide text-xs">Healthpilot.ai</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4 text-neutral-400 text-sm">
              <span className="uppercase">Full time</span>
              <span className="text-neutral-600">•</span>
              <span className="italic opacity-70">Chennai, India</span>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-4 text-sm md:text-base">
              Currently working on various web development projects using the MERN stack and Next.js. 
              Designing dynamic frontend interfaces with React.js, Framer Motion, and TypeScript, 
              and building robust backend services with Node.js and Express.js. 
              Also exploring AI tools to enhance user experience and functionality.
            </p>
          </div>
        )
      },
      {
        title: "Aug 2025 - Present",
        content: (
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQHI05yQ0_OvKg/company-logo_200_200/B56ZU3eEBwGUAI-/0/1740392383040?e=1770854400&v=beta&t=VYUzf4C0KzO8F2P7j4QKDslAI43AuauVaLIr-Cou2Ng" 
                alt="COSIE Logo" 
                className="w-12 h-12 rounded-lg border border-neutral-800 object-contain bg-white p-1"
              />
              <div>
                <h4 className="text-xl font-normal text-white uppercase tracking-tight">Frontend Developer</h4>
                <span className="text-accent font-normal uppercase tracking-wide text-xs">COSIE</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4 text-neutral-400 text-sm">
              <span className="uppercase">Part time</span>
              <span className="text-neutral-600">•</span>
              <span className="italic opacity-70">Remote, India</span>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-4 text-sm md:text-base">
              Currently working on various web development projects using the MERN stack and Next.js. 
              Designing dynamic frontend interfaces with React.js, Framer Motion, and TypeScript, 
              and building robust backend services with Node.js and Express.js. 
              Also exploring AI tools to enhance user experience and functionality.
            </p>
          </div>
        )
      },
      {
        title: "Jan 2025 - Aug 2025",
        content: (
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLaP96CpB2kIP4A3Wh6_AsSI71VgQ9EbuDw&s" 
                alt="Brocamp Logo" 
                className="w-12 h-12 rounded-lg border border-neutral-800 object-contain bg-white p-1"
              />
              <div>
                <h4 className="text-xl font-normal text-white uppercase tracking-tight">MERN Stack Developer</h4>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-normal uppercase tracking-wide text-xs">Brocamp</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4 text-neutral-400 text-sm">
              <span className="uppercase">Full time</span>
              <span className="text-neutral-600">•</span>
              <span className="italic opacity-70">Puducherry, India</span>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-4 text-sm md:text-base">
              Worked on various initiatives involving full-stack development. 
              Specialized in building end-to-code solutions using MongoDB, Express, React, and Node.js.
              Contributed to modern UI components and backend architectural improvements.
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-sm italic mb-4">
              <span className="opacity-70">Puducherry, India</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E22AQHXHLPNWSH2Vg/feedshare-shrink_800/B4EZUIgOQuHUAg-/0/1739604420152?e=1770854400&v=beta&t=B8-oyW232zJS9JvB2pEY_rV1-tsxzjYic9NuV7kPViM" 
                alt="Brocamp Project 1" 
                className="rounded-xl border border-neutral-800 w-full aspect-video object-cover hover:border-accent transition-colors"
              />
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E22AQGZq8bE8jhFaw/feedshare-shrink_800/B4EZUIgOQOHgAg-/0/1739604420995?e=1770854400&v=beta&t=4gtW_8ep51urID0F1hje_Xk5JyjWy3SzlsWKEtOBVPc" 
                alt="Brocamp Project 2" 
                className="rounded-xl border border-neutral-800 w-full aspect-video object-cover hover:border-accent transition-colors"
              />
            </div>
          </div>
        )
      }
    ];

    return (
      <div className="portfolio-ui-container overflow-y-auto h-full p-0">
        <Timeline data={timelineData} />
      </div>
    );
  }

  if (file.name === 'College.tsx') {
    return (
      <div className="portfolio-ui-container">
        <div className="hero-section">
          <div className="badge">HIGHER EDUCATION</div>
          <h1 className="title gradient-text uppercase tracking-tighter">B.S. Computer Science</h1>
          <p className="subtitle uppercase tracking-tight">College • 1 Year Dropout</p>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-value">Dropout</span>
              <span className="stat-label uppercase tracking-widest">Status</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">1st Year</span>
              <span className="stat-label uppercase tracking-widest">Duration</span>
            </div>
          </div>
          <div className="edu-content mt-8">
            <div className="badge inline-block mb-4">ACADEMIC JOURNEY</div>
            <p className="text-neutral-300 leading-relaxed">
              Pursued a Bachelor of Science in Computer Science, completing the first year. 
              Transitioned to self-taught and practical development following the first year of studies.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (file.name === 'HigherSecondary.tsx') {
    return (
      <div className="portfolio-ui-container">
        <div className="hero-section">
          <div className="badge uppercase tracking-widest">HIGHER SECONDARY</div>
          <h1 className="title gradient-text uppercase tracking-tighter">Voc Government Hr.Sec.School</h1>
          <p className="subtitle uppercase tracking-tight">Commerce & Auditing • 2021 - 2022</p>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-value">79%</span>
              <span className="stat-label uppercase tracking-widest">Percentile</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Puducherry</span>
              <span className="stat-label uppercase tracking-widest">Location</span>
            </div>
          </div>
          <div className="edu-content mt-8">
            <div className="badge inline-block mb-4">ACADEMIC FOCUS</div>
            <p className="text-neutral-300 leading-relaxed">
              Specialized in Commerce and Auditing during higher secondary education, 
              building a strong foundation in financial principles and analytical thinking.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (file.name === 'Secondary.tsx') {
    return (
      <div className="portfolio-ui-container">
        <div className="hero-section">
          <div className="badge uppercase tracking-widest">SECONDARY EDUCATION</div>
          <h1 className="title gradient-text uppercase tracking-tighter">Government High School</h1>
          <p className="subtitle uppercase tracking-tight">Gandhi Nager • 2019 - 2020</p>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-value">69%</span>
              <span className="stat-label uppercase tracking-widest">Percentile</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Puducherry</span>
              <span className="stat-label uppercase tracking-widest">Location</span>
            </div>
          </div>
          <div className="edu-content mt-8">
            <div className="badge inline-block mb-4">ACHIEVEMENTS</div>
            <p className="text-neutral-300 leading-relaxed">
              Completed general secondary education with a focus on core academic subjects 
              and foundational learning at Government High School, Gandhi Nager.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (file.name === 'skills.tsx') {
    return (
      <div className="portfolio-ui-container overflow-y-auto h-full p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <LogoCloud />
        </div>
      </div>
    );
  }

  if (file.name === 'languages.json') {
    const skills = {
      "Core Languages": ["JavaScript", "TypeScript", "Python", "Rust", "Go"],
      "Frontend": ["React", "Next.js", "Vue", "TailwindCS", "Three.js"],
      "Backend": ["Node.js", "Django", "FastAPI", "GraphQL"],
      "DevOps": ["Docker", "Kubernetes", "AWS", "Git", "Terraform"]
    };
    return (
      <div className="portfolio-ui-container">
        <div className="hero-section">
          <div className="badge">SKILLS</div>
          <h1 className="title gradient-text">Technical Expertise</h1>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skills-category-card">
                <h3>{category}</h3>
                <div className="tech-stack-pills">
                  {items.map(skill => (
                    <span key={skill} className="pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (file.name === 'README.md') {
    return (
      <div className="portfolio-ui-container">
        <div className="hero-section">
          <div className="badge">DOCUMENTATION</div>
          <h1 className="title gradient-text">Portfolio Guide</h1>
          <div className="description">
            <p>Welcome to my interactive portfolio. This project is built to demonstrate my skills in: </p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li>Modern Frontend Development with Next.js</li>
              <li>Interactive UI Design</li>
              <li>Complex State Management</li>
              <li>Real-time Visualization</li>
            </ul>
          </div>
          <div className="achievement-card" style={{ marginTop: '20px' }}>
            <Info size={16} className="text-accent" />
            <span>Hint: Use the search bar or chat with the AI to learn more about my background.</span>
          </div>
        </div>
      </div>
    );
  }

  if (file.name === 'package.json') {
    const deps = {
      "dependencies": {
        "next": "14.x",
        "react": "18.x",
        "lucide-react": "latest",
        "three": "latest",
        "framer-motion": "latest"
      },
      "devDependencies": {
        "typescript": "5.x",
        "tailwindcss": "3.x"
      }
    };
    return (
      <div className="portfolio-ui-container">
        <div className="hero-section">
          <div className="badge">CONFIG</div>
          <h1 className="title gradient-text">Project Config</h1>
          <div className="skills-grid">
            {Object.entries(deps).map(([category, items]) => (
              <div key={category} className="skills-category-card">
                <h3>{category}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Object.entries(items).map(([pkg, ver]) => (
                    <div key={pkg} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: 'var(--accent)' }}>{pkg}</span>
                      <span style={{ color: 'var(--fg-dim)' }}>{ver}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (file.name === 'gallery.tsx') {
    return (
      <div className="portfolio-ui-container overflow-y-auto h-full p-0">
        <ProjectUI onProjectSelect={onProjectSelect} />
      </div>
    );
  }

  return (
    <div className="code-view">
      {file.content.split('\n').map((line, i) => (
        <div key={i} className="line">
          <span style={{ whiteSpace: 'pre' }}>{line}</span>
        </div>
      ))}
    </div>
  );
};

export default function PortfolioIDE() {
  const [openFiles, setOpenFiles] = useState<FileItem[]>([]);
  const [activeFile, setActiveFile] = useState<FileItem | null>(null);
  const [showUI, setShowUI] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [chatWidth, setChatWidth] = useState(300);
  const [resizingPanel, setResizingPanel] = useState<'sidebar' | 'chat' | null>(null);

  // Composer State
  const [selectedAgent, setSelectedAgent] = useState('Agent');
  const [selectedModel, setSelectedModel] = useState('Gemini 3 Flash (Preview)');
  const [isAgentMenuOpen, setIsAgentMenuOpen] = useState(false);
  const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);


  // Keyboard Shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + B: Toggle Sidebar
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        setIsSidebarVisible(prev => !prev);
      }
      // Ctrl + I: Toggle Chat
      if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
        e.preventDefault();
        setIsChatVisible(prev => !prev);
      }
      // Ctrl + L: Focus Chat (and show if hidden)
      if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        setIsChatVisible(true);
        const input = document.querySelector('.chat-input') as HTMLTextAreaElement;
        if (input) input.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Resize Handlers
  const startResizingSidebar = React.useCallback((e: React.MouseEvent) => {
    setResizingPanel('sidebar');
    e.preventDefault();
  }, []);

  const startResizingChat = React.useCallback((e: React.MouseEvent) => {
    setResizingPanel('chat');
    e.preventDefault();
  }, []);

  const stopResizing = React.useCallback(() => {
    setResizingPanel(null);
  }, []);

  const resize = React.useCallback((e: MouseEvent) => {
    if (resizingPanel === 'sidebar') {
      const newWidth = e.clientX - 48; // Sidebar starts after 48px activity bar
      if (newWidth > 150 && newWidth < 600) {
        setSidebarWidth(newWidth);
      }
    } else if (resizingPanel === 'chat') {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth > 200 && newWidth < 800) {
        setChatWidth(newWidth);
      }
    }
  }, [resizingPanel]);

  React.useEffect(() => {
    if (resizingPanel) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resizingPanel, resize, stopResizing]);

  const portfolioData: Record<string, WorkspaceItem[]> = {
    SRC: [
      {
        name: 'EXPERIENCE',
        type: 'folder',
        children: [
          {
            name: 'overview.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `// My Career Timeline\nimport React from 'react';`
          }
        ]
      },
      {
        name: 'EDUCATION',
        type: 'folder',
        children: [
          {
            name: 'HigherSecondary.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `export const HigherSecondary = {\n  school: "Voc Government Hr.Sec.School",\n  period: "2021 - 2022",\n  focus: "Commerce & Auditing",\n  pct: "79%"\n};`
          },
          {
            name: 'Secondary.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `export const Secondary = {\n  school: "Government High School - Gandhi Nager",\n  period: "2019 - 2020",\n  focus: "General Secondary",\n  pct: "69%"\n};`
          },
          {
            name: 'College.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `export const College = {\n  degree: "B.S. Computer Science",\n  status: "1 Year Dropout"\n};`
          }
        ]
      },
      {
        name: 'SKILLS',
        type: 'folder',
        children: [
          {
            name: 'skills.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `export const Skills = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "GitHub", "Linux", "Cursor", "Figma", "Neon", "Python", "Bun", "Expo", "AI/ML", "SQL", "MERN", "MCP", "Healthcare Dev"];`
          }
        ]
      },
      {
        name: 'PROJECTS',
        type: 'folder',
        children: [
          {
            name: 'gallery.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `// Project Gallery Overview\nexport const Gallery = () => {};`
          },
          {
            name: 'GymRatzz.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `// Main Project: GymRatzz E-commerce\nexport const GymRatzz = () => {};`,
            metadata: PROJECT_CATEGORIES[0].projects[0]
          },
          {
            name: 'E-ZONE.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `// Frontend Project: E-ZONE\nexport const EZone = () => {};`,
            metadata: PROJECT_CATEGORIES[1].projects[0]
          },
          {
            name: 'Portfolio.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `// This very Portfolio\nexport const Portfolio = () => {};`,
            metadata: PROJECT_CATEGORIES[1].projects[1]
          },
          {
            name: 'CRUD-App.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `// Mini Project: CRUD-App\nexport const CRUDApp = () => {};`,
            metadata: PROJECT_CATEGORIES[2].projects[0]
          },
          {
            name: 'TODO.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `// Mini Project: TODO\nexport const TODO = () => {};`,
            metadata: PROJECT_CATEGORIES[2].projects[1]
          },
          {
            name: 'UserManagement.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `// Mini Project: User Management\nexport const UserManagement = () => {};`,
            metadata: PROJECT_CATEGORIES[2].projects[2]
          }
        ]
      },
      {
        name: 'ABOUT',
        type: 'folder',
        children: [
          {
            name: 'me.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `export const AboutMe = "I am a passionate developer...";`
          }
        ]
      },
      {
        name: 'CONTACT',
        type: 'folder',
        children: [
          {
            name: 'socials.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `export const Socials = { github: "...", twitter: "..." };`
          }
        ]
      }
    ],
    CONFIG: [
      {
        name: 'package.json',
        type: 'file',
        language: 'json',
        icon: <Package size={14} color="#e03e2f" />,
        content: `{\n  "name": "portfolio",\n  "version": "1.0.0"\n}`
      },
      {
        name: 'README.md',
        type: 'file',
        language: 'markdown',
        icon: <Info size={14} color="#519aba" />,
        content: `# My Developer Portfolio\nView my journey through this IDE.`
      }
    ]
  };

  const handleFileClick = (node: any) => {
    // Find the original file object from portfolioData
    let foundFile: FileItem | undefined;

    const findInArray = (arr: WorkspaceItem[]): FileItem | undefined => {
      for (const item of arr) {
        if (item.type === 'file' && item.name === node.name) return item;
        if (item.type === 'folder' && item.children) {
          const found = findInArray(item.children);
          if (found) return found;
        }
      }
    };

    Object.values(portfolioData).forEach(section => {
      const found = findInArray(section);
      if (found) foundFile = found;
    });

    if (foundFile) {
      if (!openFiles.find(f => f.name === foundFile!.name)) {
        setOpenFiles([...openFiles, foundFile]);
      }
      setActiveFile(foundFile);
    }
  };

  const closeFile = (e: React.MouseEvent, fileName: string) => {
    e.stopPropagation();
    const newFiles = openFiles.filter(f => f.name !== fileName);
    setOpenFiles(newFiles);
    if (activeFile?.name === fileName) {
      setActiveFile(newFiles.length > 0 ? newFiles[newFiles.length - 1] : null);
    }
  };

  const handleProjectSelect = (project: Project) => {
    // Find the file in portfolioData that matches this project
    let projectFile: FileItem | undefined;
    
    const projectFolder = portfolioData.SRC.find(f => f.name === 'PROJECTS') as FolderItem;
    if (projectFolder) {
      projectFile = projectFolder.children.find(f => 
        f.type === 'file' && f.metadata && f.metadata.id === project.id
      ) as FileItem;
    }

    if (projectFile) {
      if (!openFiles.find(f => f.name === projectFile!.name)) {
        setOpenFiles([...openFiles, projectFile]);
      }
      setActiveFile(projectFile);
    }
  };

  const mapToTreeNode = (item: WorkspaceItem): any => ({
    name: item.name,
    type: item.type,
    extension: item.type === 'file' ? item.name.split('.').pop() : undefined,
    children: item.type === 'folder' ? (item.children as WorkspaceItem[]).map(mapToTreeNode) : undefined
  });

  const treeData = Object.entries(portfolioData).map(([section, items]) => ({
    name: section,
    type: 'folder' as const,
    children: items.map(mapToTreeNode)
  }));

  return (
    <div
      className={`cursor-layout ${!isSidebarVisible ? 'hide-sidebar' : ''} ${!isChatVisible ? 'hide-chat' : ''}`}
      style={{
        gridTemplateColumns: `48px ${isSidebarVisible ? `${sidebarWidth}px 4px` : '0px 0px'} 1fr ${isChatVisible ? `4px ${chatWidth}px` : '0px 0px'}`
      }}
    >
      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <img src="/favicon.ico" alt="VS Code" width={16} height={16} />
          <div className="top-bar-menu">
            <span>File</span>
            <span>Edit</span>
            <span>Selection</span>
            <span>View</span>
            <span>Go</span>
            <span>Run</span>
            <span>Terminal</span>
            <span>Help</span>
          </div>
        </div>

        <div className="top-bar-center">
          <div style={{ display: 'flex', gap: '4px' }}>
            <ChevronLeft size={18} />
            <ChevronRight size={18} />
          </div>
          <div className="search-container">
            <Search size={14} />
            <span>portfolio</span>
          </div>
        </div>

        <div className="top-bar-right">
          <Layout size={16} />
          <Layout size={16} style={{ transform: 'rotate(90deg)' }} />
          <Layout size={16} style={{ transform: 'rotate(180deg)' }} />
          <div className="window-controls">
            <Minus size={16} />
            <Maximize2 size={14} />
            <X size={16} />
          </div>
        </div>
      </header>

      {/* Activity Bar */}
      <aside className="activity-bar">
        <Files size={24} color={isSidebarVisible ? "#fff" : "var(--fg-dim)"} onClick={() => setIsSidebarVisible(!isSidebarVisible)} style={{ cursor: 'pointer' }} />
        <Search size={24} color="var(--fg-dim)" />
        <GitBranch size={24} color="var(--fg-dim)" />
        <Boxes size={24} color="var(--fg-dim)" />
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '20px' }}>
          <User size={24} color="var(--fg-dim)" />
          <Settings size={24} color="var(--fg-dim)" />
        </div>
      </aside>

      {/* Sidebar (Explorer) */}
      <aside className="sidebar">
        <div className="sidebar-header-main">
          <span>EXPLORER</span>
          <MoreHorizontal size={16} />
        </div>
        <div className="sidebar-project-header">
          <div className="project-title">
            <ChevronDown size={14} />
            <span>PORTFOLIO</span>
          </div>
          <div className="project-actions">
            <FilePlus size={16} />
            <FolderPlus size={16} />
            <RotateCw size={16} />
            <Library size={16} />
          </div>
        </div>
        <FileTree
          data={treeData}
          onSelect={handleFileClick}
          className="h-full border-none rounded-none bg-transparent p-0"
        />
      </aside>

      {/* Sidebar Resize Divider */}
      <div
        className={`resize-divider ${resizingPanel === 'sidebar' ? 'active' : ''}`}
        onMouseDown={startResizingSidebar}
        style={{ gridArea: 'sep1' }}
      />

      {/* Main Editor Area */}
      <main className="editor-area">
        {/* Tabs */}
        <div className="tabs-container">
          {openFiles.map(file => (
            <div
              key={file.name}
              className={`tab ${activeFile?.name === file.name ? 'active' : ''}`}
              onClick={() => setActiveFile(file)}
            >
              <span style={{ marginRight: '8px' }}>{file.icon}</span>
              {file.name}
              <X
                size={14}
                className="close-icon"
                style={{ marginLeft: '12px', opacity: 0.6 }}
                onClick={(e) => closeFile(e, file.name)}
              />
            </div>
          ))}
        </div>

        {/* Editor Content */}
        {activeFile ? (
          showUI ? (
            <UIRenderer file={activeFile} onProjectSelect={handleProjectSelect} />
          ) : (
            <div className="code-view">
              {activeFile.content.split('\n').map((line, i) => (
                <div key={i} className="line">
                  <span style={{ whiteSpace: 'pre' }}>{line}</span>
                </div>
              ))}
            </div>
          )
        ) : (
 <TubesBackground>
        <div className="flex flex-col items-center justify-center w-full h-full gap-6 text-center px-4">
          <div className="space-y-2 pointer-events-auto cursor-default">
             <img src="/logo.png" className='w-20 h-20 mx-auto' alt="" />
                 <h1 className="gradient-text">Portfolio IDE</h1>
            <p>Select a file from the sidebar to see my work</p>
          </div>

          <div className="absolute bottom-8 flex flex-col items-center gap-2 text-white/50 animate-pulse pointer-events-none">
               <div className="shortcuts-grid">
              <div className="shortcut"><span>Toggle Sidebar</span> <kbd>Ctrl</kbd><kbd>B</kbd></div>
              <div className="shortcut"><span>Toggle Chat</span> <kbd>Ctrl</kbd><kbd>I</kbd></div>
            </div>
          </div>
        </div>
      </TubesBackground>
        )}
      </main>

      {/* Chat Resize Divider */}
      <div
        className={`resize-divider ${resizingPanel === 'chat' ? 'active' : ''}`}
        onMouseDown={startResizingChat}
        style={{ gridArea: 'sep2' }}
      />

      {/* Right Panel (AI Chat) */}
      <aside className="right-panel">
        <div className="tabs-container" style={{ justifyContent: 'space-between', paddingRight: '12px' }}>
          <div className="tab active" style={{ minWidth: 'auto', border: 'none' }}>Composer</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
           
            <X size={14} onClick={() => setIsChatVisible(false)} style={{ cursor: 'pointer', opacity: 0.6 }} />
          </div>
        </div>
        <div className="chat-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--fg-dim)', fontSize: '12px', marginBottom: '16px' }}>
            <MessageSquare size={14} />
            <span>Ask the AI about me...</span>
          </div>

          <div className="chat-bubble">
            <p style={{ color: '#fff', marginBottom: '8px' }}>Welcome to my portfolio!</p>
            <p style={{ color: 'var(--fg-dim)' }}>I'm a passionate developer building experiences that matter. Feel free to view my experience, projects, and skills in the sidebar on the left.</p>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://github.com" target="_blank" className="chat-action-btn">
              <Github size={14} /> View GitHub Profile
            </a>
            <a href="https://linkedin.com" target="_blank" className="chat-action-btn">
              <Linkedin size={14} /> Connect on LinkedIn
            </a>
            <a href="mailto:hello@example.com" className="chat-action-btn">
              <Mail size={14} /> Send an Email
            </a>
          </div>

          <div className="composer-footer">
            <div className="composer-box">
              {activeFile && (
                <div className="attachment-chip">
                  <Plus size={10} strokeWidth={3} />
                  <Atom size={12} className="text-accent" style={{ color: '#00d8ff' }} />
                  <span>{activeFile.name}</span>
                </div>
              )}
              <textarea
                className="chat-input"
                placeholder="Describe what to build next"
              ></textarea>
              <div className="composer-controls">
                <div className="control-group">
                  <div className="dropdown-container">
                    <div 
                      className="dropdown-pill" 
                      onClick={() => setIsAgentMenuOpen(!isAgentMenuOpen)}
                    >
                      <span>{selectedAgent}</span>
                      <ChevronDown size={12} />
                    </div>
                    {isAgentMenuOpen && (
                      <div className="dropdown-menu">
                        {['Ask', 'Plan', 'Debug'].map((opt) => (
                          <div 
                            key={opt} 
                            className="menu-item"
                            onClick={() => {
                              setSelectedAgent(opt);
                              setIsAgentMenuOpen(false);
                            }}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="dropdown-container">
                    <div 
                      className="dropdown-pill" 
                      onClick={() => setIsModelMenuOpen(!isModelMenuOpen)}
                    >
                      <span>{selectedModel}</span>
                      <ChevronDown size={12} />
                    </div>
                    {isModelMenuOpen && (
                      <div className="dropdown-menu">
                        {[
                          'Claude Code 4', 
                          'Claude 3.5 Sonnet', 
                          'GPT-4o', 
                          'Gemini 1.5 Pro', 
                          'Gemini 3 Flash (Preview)',
                          'o1-mini',
                          'o1-preview'
                        ].map((opt) => (
                          <div 
                            key={opt} 
                            className="menu-item"
                            onClick={() => {
                              setSelectedModel(opt);
                              setIsModelMenuOpen(false);
                            }}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <Hammer size={14} className="action-icon" />
                </div>
                <div className="control-group">
                  <CornerDownLeft size={14} className="action-icon" />
                  <SendHorizontal size={14} className="action-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Status Bar */}
      <footer className="status-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="status-item">
            <GitBranch size={12} />
            <span>main*</span>
          </div>
          <div className="status-item">
            <X size={12} className="text-error" /> <span>0</span>
            <Sparkles size={12} className="text-accent" /> <span>0</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>{activeFile?.language || 'Plain Text'}</span>
          <div className="status-item">
            <span>Cursor Tab</span>
            <Sparkles size={12} />
          </div>
          <MessageSquare size={12} onClick={() => setIsChatVisible(!isChatVisible)} style={{ cursor: 'pointer' }} />
        </div>
      </footer>
    </div>
  );
}


