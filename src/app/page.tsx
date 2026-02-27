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
  Atom,
  Phone,
  MapPin
} from 'lucide-react';
import { FileTree } from '@/components/ui/file-tree';
import { TubesBackground } from '@/components/ui/neon-flow';
import { Timeline } from '@/components/ui/timeline';
import SphereImageGrid from '@/components/ui/sphere-image-grid';
import { HyperText } from '@/components/ui/hyper-text';
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ProjectUI, { PROJECT_CATEGORIES, CategoryFolderCard, type Project } from '@/components/ui/3d-folder';
import { ExternalLink, MousePointer2 } from 'lucide-react';
import { skillsData, skillCategories, type Skill } from '@/data/skills';

function TypingText({ text, speed = 12, className = "" }: { text: string; speed?: number; className?: string }) {
  const [visibleLength, setVisibleLength] = useState(0);

  React.useEffect(() => {
    if (visibleLength >= text.length) return;
    const t = setInterval(() => {
      setVisibleLength((prev) => {
        if (prev >= text.length) return prev;
        return Math.min(prev + 1, text.length);
      });
    }, speed);
    return () => clearInterval(t);
  }, [text.length, visibleLength, speed]);

  React.useEffect(() => {
    setVisibleLength(0);
  }, [text]);

  const visible = text.slice(0, visibleLength);
  const isComplete = visibleLength >= text.length;

  return (
    <span className={className}>
      {visible}
      {!isComplete && <span className="typing-cursor" aria-hidden>|</span>}
    </span>
  );
}

function SkillIcon({ icon, iconFallback, name }: { icon: string; iconFallback: string; name: string }) {
  const [src, setSrc] = useState(icon);
  return (
    <img
      src={src}
      alt={name}
      width={32}
      height={32}
      onError={() => setSrc(iconFallback)}
    />
  );
}

const MAX_SKILL_FOLDERS = 6;

const SKILL_FOLDER_GROUPS: { label: string; color: string; categories: string[] }[] = [
  { label: "AI Tools", color: "#7C3AED", categories: ["AI Tools"] },
  { label: "Languages", color: "#F59E0B", categories: ["Languages"] },
  { label: "Frontend & Mobile", color: "#06B6D4", categories: ["Frontend", "Mobile"] },
  { label: "Backend & Database", color: "#339933", categories: ["Backend", "Database"] },
  { label: "DevOps & Design", color: "#F05032", categories: ["DevOps", "Design", "Tools"] },
  { label: "Fullstack & More", color: "#6366F1", categories: ["Fullstack", "Domain", "Computer Science"] },
];

function SkillsView() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const byCategory = skillsData.reduce<Record<string, Skill[]>>((acc, skill) => {
    (acc[skill.category] = acc[skill.category] ?? []).push(skill);
    return acc;
  }, {});

  const folders = SKILL_FOLDER_GROUPS.map((group) => {
    const skills = group.categories.flatMap((cat) => byCategory[cat] ?? []);
    return { ...group, skills };
  }).filter((f) => f.skills.length > 0);

  const colorToGradient = (hex: string) => {
    const m = /^#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(hex);
    if (!m) return `linear-gradient(135deg, ${hex}, var(--folder-back))`;
    const d = (n: number) => Math.max(0, Math.min(255, n - 45));
    const r = parseInt(m[1], 16);
    const g = parseInt(m[2], 16);
    const b = parseInt(m[3], 16);
    const darker = `#${d(r).toString(16).padStart(2, "0")}${d(g).toString(16).padStart(2, "0")}${d(b).toString(16).padStart(2, "0")}`;
    return `linear-gradient(135deg, ${hex}, ${darker})`;
  };

  if (selectedFolder) {
    const folder = folders.find((f) => f.label === selectedFolder);
    const skills = folder?.skills ?? [];
    const folderColor = folder?.color ?? "var(--fg-dim)";
    return (
      <div className="portfolio-ui-container overflow-y-auto h-full p-6 md:p-8">
        <div className="w-full max-w-5xl mx-auto">
          <button
            type="button"
            onClick={() => setSelectedFolder(null)}
            className="flex items-center gap-2 text-sm font-normal text-muted-foreground hover:text-foreground uppercase tracking-widest mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to categories
          </button>
          <h2
            className="text-xl font-semibold uppercase tracking-tight mb-6"
            style={{ color: folderColor }}
          >
            {selectedFolder}
          </h2>
          <div className="skills-cards-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="skill-card-icon">
                  <SkillIcon icon={skill.icon} iconFallback={skill.iconFallback} name={skill.name} />
                </div>
                <span className="skill-card-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-ui-container overflow-y-auto h-full p-6 md:p-8">
      <div className="w-full max-w-5xl mx-auto">
        <HyperText text="Tools, frameworks & technologies" className="title gradient-text mb-2" />
        <p className="text-[var(--fg-dim)] text-sm mb-8 max-w-xl">Technologies I use to bring ideas to life.</p>
        <main className="min-h-[60vh] text-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {folders.slice(0, MAX_SKILL_FOLDERS).map((folder, index) => (
              <div
                key={folder.label}
                className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CategoryFolderCard
                  title={folder.label}
                  count={folder.skills.length}
                  countLabel="skills"
                  gradient={colorToGradient(folder.color)}
                  className="w-full"
                  onClick={() => setSelectedFolder(folder.label)}
                  hint="Hover"
                  previewItems={folder.skills.slice(0, 5).map((s) => ({
                    icon: s.icon,
                    iconFallback: s.iconFallback,
                    name: s.name,
                  }))}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

const CONTACT_EMAIL = "madhankumar4195@gmail.com";

function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${name || "Someone"}`;
    const body = [
      `Name: ${name || "(not provided)"}`,
      `Email: ${email || "(not provided)"}`,
      "",
      "Message:",
      message || "(no message)",
    ].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="portfolio-ui-container flex flex-col items-center text-center overflow-y-auto h-full p-4 md:p-8">
      <HyperText
        text="Get in touch"
        className="title gradient-text uppercase tracking-tighter mb-8"
      />
      <div className="description">
        <p>If you have any questions or want to work with me, please fill out the form below. When you click Send, your email client will open with the message addressed to me.</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-4 min-w-[40vw]">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
        <Button type="submit">Send</Button>
        {sent && (
          <p className="text-sm text-muted-foreground">Your email client should open. Complete sending from there.</p>
        )}
      </form>
    </div>
  );
}

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
          <div >
            
            <HyperText 
            text={project.title} 
            className="title gradient-text uppercase tracking-tighter mb-8"
          />
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
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-black  "
              >
                <ExternalLink size={16} />
                <span className='font-semibold'>LAUNCH SITE</span>
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
                src="/experience/healthpilotai_logo.jpg" 
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <img 
                src="/experience/ht.jpg" 
                alt="Brocamp Project 1" 
                className="rounded-xl border border-neutral-800 w-full aspect-video object-cover hover:border-accent transition-colors"
              />
            </div>
          </div>
        )
      },
      {
        title: "Aug 2025 - Present",
        content: (
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img 
                src="/experience/cosie.jpg" 
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
                src="/experience/bt-1.jpg" 
                alt="Brocamp Project 1" 
                className="rounded-xl border border-neutral-800 w-full aspect-video object-cover hover:border-accent transition-colors"
              />
               <img 
                src="/experience/bt-1.jpg" 
                alt="Brocamp Project 1" 
                className="rounded-xl border border-neutral-800 w-full aspect-video object-cover hover:border-accent transition-colors"
              />
              <img 
                src="/experience/bt-2.jpg" 
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
          <h1 className="title gradient-text uppercase tracking-tighter">B.S. Computer Science</h1>
          <p className="subtitle uppercase tracking-tight">College • 1 Year Dropout</p>
          
          <div className="edu-content mt-8">
            <div className="badge inline-block mb-4">ACADEMIC JOURNEY</div>
            <p className="text-neutral-300 leading-relaxed">
              Pursued a Bachelor of Science in Computer Science, completing the first year. 
              Transitioned to self-taught and practical development following the first year of studies.
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-lg mt-4"><span className="text-blue-500 font-bold italic">1 Year </span>Dropout</p>
        </div>
      </div>
    );
  }

  if (file.name === 'me.tsx') {
    return (
      <div className="portfolio-ui-container">
        <div className="hero-section">
    
          <HyperText 
            text="Who Am I?" 
            className="title gradient-text uppercase tracking-tighter mb-8"
          />
          
          <div>
            <div className="space-y-6">
              <p className="text-neutral-200 leading-relaxed text-lg font-light">
                <span className="text-accent font-medium uppercase tracking-widest  block mb-2 opacity-70">Professional Overview</span>
                As a fresh and result-oriented web developer, I bring a strong foundation in frontend technologies and a deep interest in building responsive, user-friendly web applications. I enjoy turning creative ideas into clean, functional designs and continuously improving my skills through real-world projects and consistent practice. My goal is to contribute to meaningful web projects and grow into a highly skilled frontend developer.
              </p>

              <p className="text-neutral-200 leading-relaxed text-lg font-light">
                <span className="text-accent font-medium uppercase tracking-widest  block mb-2 opacity-70">Core Mission</span>
                My goal is to become a well-rounded frontend developer, capable of crafting modern, scalable, and accessible web applications that solve real problems. I'm excited to take on new challenges and grow with a team that values creativity, performance, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (file.name === 'HigherSecondary.tsx') {
    return (
      <div className="portfolio-ui-container">
        <div className="hero-section">
          <h1 className="title gradient-text uppercase tracking-tighter">Voc Government Hr.Sec.School</h1>
          <p className="subtitle uppercase tracking-tight">Commerce & Auditing • 2021 - 2022</p>
          <div className="stats-row">
          </div>
          <div className="edu-content mt-8">
            <div className="badge inline-block mb-4">ACADEMIC FOCUS</div>
            <p className="text-neutral-300 leading-relaxed">
              Specialized in Commerce and Auditing during higher secondary education, 
              building a strong foundation in financial principles and analytical thinking.
            </p>

            <p className="text-neutral-300 leading-relaxed text-lg mt-4"><span className="text-blue-500 font-bold italic">79% </span>Perentage in Commerce and Auditing</p>
          
          </div>
        </div>
      </div>
    );
  }

  if (file.name === 'Secondary.tsx') {
    return (
      <div className="portfolio-ui-container">
        <div className="hero-section">
          <h1 className="title gradient-text uppercase tracking-tighter">Government High School</h1>
          <p className="subtitle uppercase tracking-tight">Gandhi Nager • 2019 - 2020</p>
        
          <div className="edu-content mt-8">
            <div className="badge inline-block mb-4">ACHIEVEMENTS</div>
            <p className="text-neutral-300 leading-relaxed">
              Completed general secondary education with a focus on core academic subjects 
              and foundational learning at Government High School, Gandhi Nager.
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-lg mt-4"><span className="text-blue-500 font-bold italic">69% </span>Perentage in General Secondary Education</p>
        </div>
      </div>
    );
  }

  if (file.name === 'skills.tsx') {
    return <SkillsView />;
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
          <HyperText 
            text="portfolio guide" 
             className="title gradient-text uppercase tracking-tighter mb-8"
          />
          <div className="description">
            <p>Welcome to my interactive portfolio. This project is built to demonstrate my skills in: </p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li>Modern Frontend Development with Next.js</li>
              <li>Interactive UI Design</li>
              <li>Complex State Management</li>
              <li>Real-time Visualization</li>
            </ul>
          </div>
          <div className="achievement-card ">
            <Info size={24} className="text-accent" />
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
          <HyperText 
            text="Project Config" 
            className="title gradient-text uppercase tracking-tighter mb-8"
          />
          <div className="skills-grid">
            {Object.entries(deps).map(([category, items]) => (
              <div key={category} className="skills-category-card">
                <h3>{category}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Object.entries(items).map(([pkg, ver]) => (
                    <div key={pkg} style={{ display: 'flex', justifyContent: 'space-between' }}>
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

  if (file.name === 'contact.tsx') {
    return <ContactView />;
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
  const [isAgentMenuOpen, setIsAgentMenuOpen] = useState(false);

  // Chat state (Ollama portfolio AI)
  type ChatMessage = { role: 'user' | 'assistant'; content: string };
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = React.useRef<HTMLDivElement>(null);

  const scrollChatToBottom = React.useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  React.useEffect(() => {
    scrollChatToBottom();
  }, [chatMessages, scrollChatToBottom]);

  const sendChatMessage = React.useCallback(async () => {
    const text = chatInput.trim();
    if (!text || isChatLoading) return;
    setChatInput('');
    setChatMessages((prev) => [...prev, { role: 'user', content: text }]);
    setIsChatLoading(true);
    try {
      const nextMessages = [...chatMessages, { role: 'user' as const, content: text }];
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to get response');
      setChatMessages((prev) => [...prev, { role: 'assistant', content: data.content || '' }]);
    } catch (err) {
      setChatMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Sorry, something went wrong: ${err instanceof Error ? err.message : 'Unknown error'}. Make sure OLLAMA_API_KEY is set in your .env file.` },
      ]);
    } finally {
      setIsChatLoading(false);
    }
  }, [chatInput, isChatLoading, chatMessages]);


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
            content: `export const AboutMe = {
  description: "As a fresh and result-oriented web developer, I bring a strong foundation in frontend technologies and a deep interest in building responsive, user-friendly web applications. I enjoy turning creative ideas into clean, functional designs and continuously improving my skills through real-world projects and consistent practice. My goal is to contribute to meaningful web projects and grow into a highly skilled frontend developer.",
  goal: "My goal is to become a well-rounded frontend developer, capable of crafting modern, scalable, and accessible web applications that solve real problems. I'm excited to take on new challenges and grow with a team that values creativity, performance, and continuous improvement."
};`
          }
        ]
      },
      {
        name: 'CONTACT',
        type: 'folder',
        children: [
          {
            name: 'contact.tsx',
            type: 'file',
            language: 'typescript',
            icon: <Atom size={14} color="#00d8ff" />,
            content: `export const Contact = () => { /* Contact Form */ };`
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
        <div className="flex flex-col gap-4 mt-2
        ">
          <Files size={24} color={isSidebarVisible ? "#fff" : "var(--fg-dim)"} onClick={() => setIsSidebarVisible(!isSidebarVisible)} style={{ cursor: 'pointer' }} className='cursor-pointer ' />
        <Search size={24} color="var(--fg-dim)"  className='cursor-pointer'/>
        <GitBranch size={24} color="var(--fg-dim)"  className='cursor-pointer'/>
        <Boxes size={24} color="var(--fg-dim)"  className='cursor-pointer'/>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '20px' }}>
          <User size={24} color="var(--fg-dim)" className='cursor-pointer' />
          <Settings size={24} color="var(--fg-dim)" className='cursor-pointer' />
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
        <div className="tabs-container" style={{ justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '8px' }}>
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

          <div className="chat-messages">
            {chatMessages.length === 0 && (
              <>
                <div className="chat-bubble">
                  <p style={{ color: '#fff', marginBottom: '8px' }}>Welcome to my portfolio!</p>
                  <p style={{ color: 'var(--fg-dim)' }}>Ask me anything about my experience, projects, skills, or education. I’m powered by AI and have full context about this portfolio.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href="https://github.com/S-MADHAN-KUMAR" target="_blank" rel="noopener noreferrer" className="chat-action-btn">
                    <Github size={14} /> View GitHub Profile
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="chat-action-btn">
                    <Linkedin size={14} /> Connect on LinkedIn
                  </a>
                  <a href="mailto:madhankumar4195@gmail.com" className="chat-action-btn">
                    <Mail size={14} /> Send an Email
                  </a>
                </div>
              </>
            )}
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className="chat-bubble"
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '90%',
                  backgroundColor: msg.role === 'user' ? 'var(--accent)' : 'var(--bg-sidebar)',
                }}
              >
                <p style={{ color: msg.role === 'user' ? '#fff' : 'var(--fg)', whiteSpace: 'pre-wrap', margin: 0 }}>
                  {msg.role === 'user' ? msg.content : <TypingText text={msg.content} speed={10} />}
                </p>
              </div>
            ))}
            {isChatLoading && (
              <div className="chat-bubble" style={{ alignSelf: 'flex-start' }}>
                <p style={{ color: 'var(--fg-dim)', margin: 0 }}>Thinking...</p>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="composer-footer">
            <div className="composer-box">
              <textarea
                className="chat-input"
                placeholder="Ask about my experience, projects, or skills..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendChatMessage();
                  }
                }}
                disabled={isChatLoading}
                rows={2}
              />
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
                        {['Agent', 'Ask', 'Plan', 'Debug'].map((opt) => (
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
                  <div className="dropdown-pill" style={{ cursor: 'default', opacity: 0.9 }}>
                    <span>Auto</span>
                  </div>
                </div>
                <div className="control-group">
                  <button
                    type="button"
                    onClick={sendChatMessage}
                    disabled={!chatInput.trim() || isChatLoading}
                    className="action-icon"
                    style={{ background: 'none', border: 'none', cursor: chatInput.trim() && !isChatLoading ? 'pointer' : 'not-allowed', opacity: chatInput.trim() && !isChatLoading ? 1 : 0.5 }}
                    aria-label="Send message"
                  >
                    <SendHorizontal size={14} />
                  </button>
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


