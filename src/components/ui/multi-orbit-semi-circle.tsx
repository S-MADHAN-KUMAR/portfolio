"use client";
import React, { useState, useEffect } from "react";

const SKILLS = [
  { name: "React Js", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
  { name: "Redux", icon: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" },
  { name: "TypeScript", icon: "https://img.icons8.com/color/48/typescript.png" },
  { name: "HTML", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/170px-HTML5_logo_and_wordmark.svg.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/48/css3.png" },
  { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
  { name: "Tailwind CSS", icon: "https://img.icons8.com/fluency/96/tailwind_css.png" },
  { name: "Node JS", icon: "https://img.icons8.com/color/48/nodejs.png" },
  { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
  { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
  { name: "Supabase", icon: "https://img.icons8.com/fluency/96/supabase.png" },
  { name: "GitHub", icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
  { name: "Netlify", icon: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" },
  { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" },
  { name: "Linux", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-ubuntu-is-a-free-and-open-source-linux-distribution-logo-color-tal-revivo.png" },
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize, startIndex }: any) {
  return (
    <>
      {/* Orbit Line */}
      <div 
        className="absolute border border-white/5 rounded-full pointer-events-none"
        style={{
          width: radius * 2,
          height: radius * 2,
          left: centerX - radius,
          top: centerY - radius,
          clipPath: 'inset(0 0 50% 0)'
        }}
      />
      
      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const skill = SKILLS[(startIndex + index) % SKILLS.length];

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div className="p-2 rounded-full bg-neutral-900/50 backdrop-blur-sm border border-white/5 shadow-2xl transition-all group-hover:scale-125 group-hover:border-accent/50">
              <img
                src={skill.icon}
                alt={skill.name}
                width={iconSize}
                height={iconSize}
                className="object-contain cursor-pointer"
                style={{ minWidth: iconSize, minHeight: iconSize }} 
              />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+12px)]" : "top-[calc(100%+12px)]"
              } hidden group-hover:block px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[10px] font-bold uppercase tracking-widest text-white shadow-2xl text-center whitespace-nowrap`}
            >
              {skill.name}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-neutral-900 border-neutral-800 ${
                  tooltipAbove ? "top-full -mt-1 border-b border-r" : "bottom-full -mb-1 border-t border-l"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      const parent = document.querySelector('.portfolio-ui-container');
      if (parent) {
        setSize({ width: parent.clientWidth, height: parent.clientHeight });
      } else {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.95, 1000);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.45;

  const iconSize = size.width < 768 ? 24 : 32;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-transparent p-4">
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative flex flex-col items-center text-center z-10 w-full max-w-5xl">
        <div className="mb-8 space-y-1">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter gradient-text">Skills & Arsenal</h1>
          <p className="max-w-xl mx-auto text-neutral-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-80">
            A visual map of the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div
          className="relative transition-all duration-500 ease-in-out"
          style={{ 
            width: baseWidth, 
            height: baseWidth * 0.45,
            marginTop: '20px'
          }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.22} centerX={centerX} centerY={centerY} count={4} iconSize={iconSize} startIndex={0} />
          <SemiCircleOrbit radius={baseWidth * 0.35} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} startIndex={4} />
          <SemiCircleOrbit radius={baseWidth * 0.48} centerX={centerX} centerY={centerY} count={8} iconSize={iconSize} startIndex={10} />
        </div>
      </div>
    </div>
  );
}
