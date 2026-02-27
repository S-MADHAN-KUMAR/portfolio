"use client";

import React, { useState, useEffect } from 'react';
import {
    User,
    Briefcase,
    FolderOpen,
    Cpu,
    GraduationCap,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    ChevronRight,
    ChevronLeft,
    ArrowRight,
    MapPin,
    Calendar,
    Sparkles,
    Code2,
    Menu,
    X,
} from 'lucide-react';
import { PROJECT_CATEGORIES, type Project } from '@/components/ui/3d-folder';
import { skillsData, type Skill } from '@/data/skills';
import { HyperText } from '@/components/ui/hyper-text';

// ─── Types ───────────────────────────────────────────────────────────────
type MobileSection = 'home' | 'experience' | 'projects' | 'skills' | 'education' | 'contact';

// ─── Skill Folder Groups (same as desktop) ───────────────────────────────
const SKILL_FOLDER_GROUPS = [
    { label: "AI Tools", color: "#7C3AED", categories: ["AI Tools"] },
    { label: "Languages", color: "#F59E0B", categories: ["Languages"] },
    { label: "Frontend & Mobile", color: "#06B6D4", categories: ["Frontend", "Mobile"] },
    { label: "Backend & Database", color: "#339933", categories: ["Backend", "Database"] },
    { label: "DevOps & Design", color: "#F05032", categories: ["DevOps", "Design", "Tools"] },
    { label: "Fullstack & More", color: "#6366F1", categories: ["Fullstack", "Domain", "Computer Science"] },
];

// ─── SkillIcon ───────────────────────────────────────────────────────────
function SkillIcon({ icon, iconFallback, name, size = 28 }: { icon: string; iconFallback: string; name: string; size?: number }) {
    const [src, setSrc] = useState(icon);
    return <img src={src} alt={name} width={size} height={size} onError={() => setSrc(iconFallback)} style={{ objectFit: 'contain' }} />;
}

// ─── Animated Section Wrapper ────────────────────────────────────────────
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(t);
    }, [delay]);
    return (
        <div
            className="mob-animate-section"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

// ─── Section Title ───────────────────────────────────────────────────────
function SectionTitle({ text, subtitle }: { text: string; subtitle?: string }) {
    return (
        <div className="mob-section-title">
            <HyperText text={text} className="mob-section-heading" />
            {subtitle && <p className="mob-section-subtitle">{subtitle}</p>}
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// HOME VIEW
// ═══════════════════════════════════════════════════════════════════════════
function HomeView({ onNavigate }: { onNavigate: (s: MobileSection) => void }) {
    return (
        <div className="mob-page mob-home">
            {/* Hero */}
            <AnimatedSection delay={0}>
                <div className="mob-hero">
                    <div className="mob-hero-avatar">
                        <img src="/logo.png" alt="Madhan Kumar" className="mob-avatar-img" />
                        <div className="mob-hero-status" />
                    </div>
                    <h1 className="mob-hero-name">
                        <HyperText text="S Madhan Kumar" className="mob-hero-name-text" />
                    </h1>
                    <p className="mob-hero-role">Full Stack Developer</p>
                    <p className="mob-hero-location">
                        <MapPin size={14} />
                        <span>Chennai, India</span>
                    </p>
                </div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection delay={100}>
                <div className="mob-card mob-bio-card">
                    <p>
                        Fresh and result-oriented web developer with a strong foundation in frontend technologies and a deep interest in building responsive, user-friendly web applications.
                    </p>
                </div>
            </AnimatedSection>

            {/* Quick Links */}
            <AnimatedSection delay={200}>
                <div className="mob-socials">
                    <a href="https://github.com/S-MADHAN-KUMAR" target="_blank" rel="noopener noreferrer" className="mob-social-btn">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mob-social-btn">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:madhankumar4195@gmail.com" className="mob-social-btn">
                        <Mail size={20} />
                    </a>
                </div>
            </AnimatedSection>

            {/* Quick Nav Cards */}
            <AnimatedSection delay={300}>
                <div className="mob-quick-nav">
                    {([
                        { icon: <Briefcase size={20} />, label: 'Experience', section: 'experience' as MobileSection, color: '#7C3AED' },
                        { icon: <FolderOpen size={20} />, label: 'Projects', section: 'projects' as MobileSection, color: '#F59E0B' },
                        { icon: <Cpu size={20} />, label: 'Skills', section: 'skills' as MobileSection, color: '#06B6D4' },
                        { icon: <GraduationCap size={20} />, label: 'Education', section: 'education' as MobileSection, color: '#339933' },
                    ]).map((item, i) => (
                        <button
                            key={item.label}
                            className="mob-nav-card"
                            onClick={() => onNavigate(item.section)}
                            style={{ '--card-accent': item.color } as React.CSSProperties}
                        >
                            <div className="mob-nav-card-icon" style={{ color: item.color }}>{item.icon}</div>
                            <span className="mob-nav-card-label">{item.label}</span>
                            <ChevronRight size={16} className="mob-nav-card-arrow" />
                        </button>
                    ))}
                </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={400}>
                <div className="mob-stats-row">
                    <div className="mob-stat">
                        <span className="mob-stat-number">6+</span>
                        <span className="mob-stat-label">Projects</span>
                    </div>
                    <div className="mob-stat-divider" />
                    <div className="mob-stat">
                        <span className="mob-stat-number">2+</span>
                        <span className="mob-stat-label">Companies</span>
                    </div>
                    <div className="mob-stat-divider" />
                    <div className="mob-stat">
                        <span className="mob-stat-number">30+</span>
                        <span className="mob-stat-label">Skills</span>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPERIENCE VIEW
// ═══════════════════════════════════════════════════════════════════════════
function ExperienceView() {
    const experiences = [
        {
            title: "Software Developer",
            company: "Healthpilot.ai",
            logo: "/experience/healthpilotai_logo.jpg",
            period: "Aug 2025 - Present",
            type: "Full time",
            location: "Chennai, India",
            description: "Currently working on various web development projects using the MERN stack and Next.js. Designing dynamic frontend interfaces with React.js, Framer Motion, and TypeScript.",
            image: "/experience/ht.jpg",
        },
        {
            title: "Frontend Developer",
            company: "COSIE",
            logo: "/experience/cosie.jpg",
            period: "Aug 2025 - Present",
            type: "Part time",
            location: "Remote, India",
            description: "Building dynamic frontend interfaces with React.js and exploring AI tools to enhance user experience and functionality.",
        },
        {
            title: "MERN Stack Developer",
            company: "Brocamp",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLaP96CpB2kIP4A3Wh6_AsSI71VgQ9EbuDw&s",
            period: "Jan 2025 - Aug 2025",
            type: "Full time",
            location: "Puducherry, India",
            description: "Worked on full-stack development using MongoDB, Express, React, and Node.js. Contributed to modern UI components and backend architectural improvements.",
            images: ["/experience/bt-1.jpg", "/experience/bt-2.jpg"],
        },
    ];

    return (
        <div className="mob-page">
            <SectionTitle text="Experience" subtitle="My professional journey" />
            {experiences.map((exp, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                    <div className="mob-card mob-exp-card">
                        <div className="mob-exp-header">
                            <img src={exp.logo} alt={exp.company} className="mob-exp-logo" />
                            <div className="mob-exp-info">
                                <h3 className="mob-exp-title">{exp.title}</h3>
                                <span className="mob-exp-company">{exp.company}</span>
                            </div>
                        </div>
                        <div className="mob-exp-meta">
                            <span><Calendar size={12} /> {exp.period}</span>
                            <span><MapPin size={12} /> {exp.location}</span>
                            <span className="mob-exp-badge">{exp.type}</span>
                        </div>
                        <p className="mob-exp-desc">{exp.description}</p>
                        {exp.image && (
                            <img src={exp.image} alt={`${exp.company} work`} className="mob-exp-image" />
                        )}
                        {exp.images && (
                            <div className="mob-exp-images">
                                {exp.images.map((img, j) => (
                                    <img key={j} src={img} alt={`${exp.company} work ${j + 1}`} className="mob-exp-image-small" />
                                ))}
                            </div>
                        )}
                    </div>
                </AnimatedSection>
            ))}
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// PROJECTS VIEW
// ═══════════════════════════════════════════════════════════════════════════
function ProjectsView() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const allProjects = PROJECT_CATEGORIES.flatMap(cat => cat.projects);

    if (selectedProject) {
        return (
            <div className="mob-page">
                <button className="mob-back-btn" onClick={() => setSelectedProject(null)}>
                    <ChevronLeft size={18} />
                    <span>Back to projects</span>
                </button>

                <AnimatedSection>
                    <div className="mob-project-detail">
                        <div className="mob-project-hero-img">
                            <img src={selectedProject.image} alt={selectedProject.title} />
                            <div className="mob-project-hero-overlay" />
                        </div>
                        <h2 className="mob-project-detail-title">{selectedProject.title}</h2>
                        {selectedProject.date && <p className="mob-project-date"><Calendar size={12} /> {selectedProject.date}</p>}
                        {selectedProject.description && <p className="mob-project-detail-desc">{selectedProject.description}</p>}

                        <div className="mob-project-actions">
                            {selectedProject.github && (
                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="mob-btn mob-btn-outline">
                                    <Github size={16} /> GitHub
                                </a>
                            )}
                            {selectedProject.webapp && (
                                <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="mob-btn mob-btn-primary">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            )}
                        </div>

                        {selectedProject.tags && selectedProject.tags.length > 0 && (
                            <div className="mob-project-tags">
                                {selectedProject.tags.map((tag, i) => (
                                    <div key={i} className="mob-tag">
                                        {tag.image && <img src={tag.image} alt={tag.name} width={16} height={16} />}
                                        <span>{tag.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        );
    }

    return (
        <div className="mob-page">
            <SectionTitle text="Projects" subtitle="Stuff I've built" />
            {PROJECT_CATEGORIES.map((cat, ci) => (
                <AnimatedSection key={cat.title} delay={ci * 100}>
                    <h3 className="mob-project-cat-title" style={{ color: cat.gradient.match(/#[a-fA-F0-9]{3,6}/)?.[0] || '#fff' }}>
                        {cat.title}
                    </h3>
                    <div className="mob-project-list">
                        {cat.projects.map((project, pi) => (
                            <button
                                key={project.id}
                                className="mob-project-card"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="mob-project-card-img">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="mob-project-card-body">
                                    <h4 className="mob-project-card-title">{project.title}</h4>
                                    {project.date && <p className="mob-project-card-date">{project.date}</p>}
                                    {project.tags && (
                                        <div className="mob-project-card-tags">
                                            {project.tags.slice(0, 3).map((tag, ti) => (
                                                <span key={ti} className="mob-mini-tag">{tag.name}</span>
                                            ))}
                                            {project.tags.length > 3 && <span className="mob-mini-tag">+{project.tags.length - 3}</span>}
                                        </div>
                                    )}
                                </div>
                                <ChevronRight size={18} className="mob-project-card-arrow" />
                            </button>
                        ))}
                    </div>
                </AnimatedSection>
            ))}
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// SKILLS VIEW
// ═══════════════════════════════════════════════════════════════════════════
function SkillsView() {
    const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

    const byCategory = skillsData.reduce<Record<string, Skill[]>>((acc, skill) => {
        (acc[skill.category] = acc[skill.category] ?? []).push(skill);
        return acc;
    }, {});

    const folders = SKILL_FOLDER_GROUPS.map((group) => {
        const skills = group.categories.flatMap((cat) => byCategory[cat] ?? []);
        return { ...group, skills };
    }).filter((f) => f.skills.length > 0);

    return (
        <div className="mob-page">
            <SectionTitle text="Skills" subtitle="Technologies I use to build things" />
            <div className="mob-skills-list">
                {folders.map((folder, i) => (
                    <AnimatedSection key={folder.label} delay={i * 80}>
                        <button
                            className={`mob-skill-group ${expandedGroup === folder.label ? 'expanded' : ''}`}
                            onClick={() => setExpandedGroup(expandedGroup === folder.label ? null : folder.label)}
                        >
                            <div className="mob-skill-group-header">
                                <div className="mob-skill-group-dot" style={{ background: folder.color }} />
                                <span className="mob-skill-group-name">{folder.label}</span>
                                <span className="mob-skill-group-count">{folder.skills.length}</span>
                                <ChevronRight size={16} className={`mob-skill-chevron ${expandedGroup === folder.label ? 'rotated' : ''}`} />
                            </div>
                        </button>
                        {expandedGroup === folder.label && (
                            <div className="mob-skill-chips">
                                {folder.skills.map((skill) => (
                                    <div key={skill.id} className="mob-skill-chip">
                                        <SkillIcon icon={skill.icon} iconFallback={skill.iconFallback} name={skill.name} size={22} />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// EDUCATION VIEW
// ═══════════════════════════════════════════════════════════════════════════
function EducationView() {
    const educations = [
        { title: "B.S. Computer Science", place: "College", period: "1 Year Dropout", note: "Transitioned to self-taught and practical development.", icon: "🎓" },
        { title: "Higher Secondary", place: "Voc Government Hr.Sec.School", period: "2021 - 2022", note: "Commerce & Auditing — 79%", icon: "📚" },
        { title: "Secondary School", place: "Government High School, Gandhi Nager", period: "2019 - 2020", note: "General Secondary — 69%", icon: "📖" },
    ];

    return (
        <div className="mob-page">
            <SectionTitle text="Education" subtitle="Academic background" />
            {educations.map((edu, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                    <div className="mob-card mob-edu-card">
                        <div className="mob-edu-icon">{edu.icon}</div>
                        <div className="mob-edu-content">
                            <h3 className="mob-edu-title">{edu.title}</h3>
                            <p className="mob-edu-place">{edu.place}</p>
                            <p className="mob-edu-period">{edu.period}</p>
                            <p className="mob-edu-note">{edu.note}</p>
                        </div>
                    </div>
                </AnimatedSection>
            ))}
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// CONTACT VIEW
// ═══════════════════════════════════════════════════════════════════════════
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
        const mailto = `mailto:madhankumar4195@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        setSent(true);
        setName(""); setEmail(""); setMessage("");
    };

    return (
        <div className="mob-page">
            <SectionTitle text="Contact" subtitle="Let's connect and collaborate" />

            <AnimatedSection>
                <div className="mob-contact-links">
                    <a href="https://github.com/S-MADHAN-KUMAR" target="_blank" rel="noopener noreferrer" className="mob-contact-link-card">
                        <Github size={20} />
                        <div>
                            <span className="mob-cl-label">GitHub</span>
                            <span className="mob-cl-value">S-MADHAN-KUMAR</span>
                        </div>
                        <ExternalLink size={14} className="mob-cl-arrow" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mob-contact-link-card">
                        <Linkedin size={20} />
                        <div>
                            <span className="mob-cl-label">LinkedIn</span>
                            <span className="mob-cl-value">Connect with me</span>
                        </div>
                        <ExternalLink size={14} className="mob-cl-arrow" />
                    </a>
                    <a href="mailto:madhankumar4195@gmail.com" className="mob-contact-link-card">
                        <Mail size={20} />
                        <div>
                            <span className="mob-cl-label">Email</span>
                            <span className="mob-cl-value">madhankumar4195@gmail.com</span>
                        </div>
                        <ExternalLink size={14} className="mob-cl-arrow" />
                    </a>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
                <form onSubmit={handleSubmit} className="mob-contact-form">
                    <h3 className="mob-form-title">Send a message</h3>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mob-input"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mob-input"
                    />
                    <textarea
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="mob-input mob-textarea"
                    />
                    <button type="submit" className="mob-btn mob-btn-primary mob-btn-full">
                        <Mail size={16} /> Send Message
                    </button>
                    {sent && <p className="mob-sent-msg">Your email client should open. Complete sending from there.</p>}
                </form>
            </AnimatedSection>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN MOBILE PORTFOLIO
// ═══════════════════════════════════════════════════════════════════════════
export default function MobilePortfolio() {
    const [activeSection, setActiveSection] = useState<MobileSection>('home');

    const navItems: { icon: React.ReactNode; label: string; section: MobileSection }[] = [
        { icon: <User size={20} />, label: 'Home', section: 'home' },
        { icon: <Briefcase size={20} />, label: 'Work', section: 'experience' },
        { icon: <FolderOpen size={20} />, label: 'Projects', section: 'projects' },
        { icon: <Cpu size={20} />, label: 'Skills', section: 'skills' },
        { icon: <GraduationCap size={20} />, label: 'Education', section: 'education' },
    ];

    const handleNavigate = (section: MobileSection) => {
        setActiveSection(section);
        // Scroll to top
        const container = document.querySelector('.mob-content');
        if (container) container.scrollTop = 0;
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'home': return <HomeView onNavigate={handleNavigate} />;
            case 'experience': return <ExperienceView />;
            case 'projects': return <ProjectsView />;
            case 'skills': return <SkillsView />;
            case 'education': return <EducationView />;
            case 'contact': return <ContactView />;
        }
    };

    return (
        <div className="mob-portfolio">
            {/* Top Header */}
            <header className="mob-header">
                <div className="mob-header-left">
                    <img src="/logo.png" alt="Logo" className="mob-header-logo" />
                    <span className="mob-header-title">Portfolio</span>
                </div>
                <button className="mob-menu-toggle" onClick={() => handleNavigate('contact')}>
                    <Mail size={20} />
                </button>
            </header>

            {/* Main Content */}
            <main className="mob-content">
                {renderSection()}
            </main>

            {/* Bottom Navigation */}
            <nav className="mob-bottom-nav">
                {navItems.map(item => (
                    <button
                        key={item.label}
                        className={`mob-nav-item ${activeSection === item.section ? 'active' : ''}`}
                        onClick={() => handleNavigate(item.section)}
                    >
                        <div className="mob-nav-icon">{item.icon}</div>
                        <span className="mob-nav-label">{item.label}</span>
                        {activeSection === item.section && <div className="mob-nav-indicator" />}
                    </button>
                ))}
            </nav>
        </div>
    );
}
