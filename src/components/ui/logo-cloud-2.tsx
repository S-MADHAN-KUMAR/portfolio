import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { HyperText } from "./hyper-text";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = HTMLMotionProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={cn("space-y-8 py-10", className)}>
      <div className="flex flex-col items-center text-center space-y-2 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white italic uppercase tracking-tighter">
          Technical Arsenal
        </h2>
        <HyperText text="Tools, frameworks & technologies I use to bring ideas to life" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "relative grid grid-cols-2 border border-neutral-800/50 rounded-xl overflow-hidden md:grid-cols-4 bg-black/40 backdrop-blur-sm shadow-2xl",
          className
        )}
        {...props}
      >
        <LogoCard
          variants={itemVariants}
          className="relative border-r border-b bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/cursor.svg",
            alt: "Cursor Logo",
          }}
        >
          <PlusIcon
            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-neutral-700/50"
            strokeWidth={1}
          />
        </LogoCard>

        <LogoCard
          variants={itemVariants}
          className="border-b md:border-r bg-neutral-900/20 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/figma.svg",
            alt: "Figma Logo",
          }}
        />

        <LogoCard
          variants={itemVariants}
          className="relative border-r border-b bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/supabase_wordmark_light.svg",
            alt: "Supabase Logo",
          }}
        >
          <PlusIcon
            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-neutral-700/50"
            strokeWidth={1}
          />
          <PlusIcon
            className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-neutral-700/50"
            strokeWidth={1}
          />
        </LogoCard>

        <LogoCard
          variants={itemVariants}
          className="relative border-b bg-neutral-900/20 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/neon-wordmark-light.svg",
            alt: "Neon Logo",
          }}
        />

        <LogoCard
          variants={itemVariants}
          className="relative border-r border-b bg-neutral-900/20 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://cdn.simpleicons.org/mongodb/white",
            alt: "MongoDB Logo",
          }}
        >
          <PlusIcon
            className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-neutral-700/50"
            strokeWidth={1}
          />
        </LogoCard>

        <LogoCard
          variants={itemVariants}
          className="border-b md:border-r bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://cdn.simpleicons.org/nextdotjs/white",
            alt: "Next.js Logo",
          }}
        />

        <LogoCard
          variants={itemVariants}
          className="relative border-r border-b bg-neutral-900/20 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/python.svg",
            alt: "Python Logo",
          }}
        />

        <LogoCard
          variants={itemVariants}
          className="border-b bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/bun.svg",
            alt: "Bun Logo",
          }}
        />

        <LogoCard
          variants={itemVariants}
          className="relative border-r border-b bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://cdn.simpleicons.org/react/white",
            alt: "React Logo",
          }}
        >
          <PlusIcon
            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-neutral-700/50"
            strokeWidth={1}
          />
        </LogoCard>

        <LogoCard
          variants={itemVariants}
          className="border-b md:border-r bg-neutral-900/20 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://cdn.simpleicons.org/expo/white",
            alt: "Expo Logo",
          }}
        />

        <LogoCard
          variants={itemVariants}
          className="relative border-r border-b bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/openai_wordmark_light.svg",
            alt: "OpenAI Logo",
          }}
        >
          <PlusIcon
            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-neutral-700/50"
            strokeWidth={1}
          />
        </LogoCard>

        <LogoCard
          variants={itemVariants}
          className="relative border-b bg-neutral-900/20 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/anthropic_wordmark_light.svg",
            alt: "Anthropic Logo",
          }}
        />

        <LogoCard
          variants={itemVariants}
          className="relative border-r border-b md:border-b-0 bg-neutral-900/20 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://cdn.simpleicons.org/pytorch/white",
            alt: "ML/PyTorch Logo",
          }}
        >
          <PlusIcon
            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-neutral-700/50"
            strokeWidth={1}
          />
        </LogoCard>

        <LogoCard
          variants={itemVariants}
          className="border-b md:border-r md:border-b-0 bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://cdn.simpleicons.org/postgresql/white",
            alt: "SQL/PostgreSQL Logo",
          }}
        />

        <LogoCard
          variants={itemVariants}
          className="border-r border-b md:border-b-0 bg-neutral-900/20 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/github_wordmark_light.svg",
            alt: "GitHub Logo",
          }}
        />

        <LogoCard
          variants={itemVariants}
          className="bg-neutral-900/40 border-b md:border-b-0 hover:bg-neutral-800/60 transition-colors duration-300"
          logo={{
            src: "https://svgl.app/library/vercel_wordmark.svg",
            alt: "Vercel Logo",
          }}
        />

        {/* Specialty Skills Row (Updated UI) */}
        <div className="col-span-full border-t border-neutral-800/50 bg-neutral-950/80 py-6 px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {["MCP", "MERN", "UI/UX", "ZENCODER", "HEALTHCARE DEV"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white hover:border-neutral-600 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

type LogoCardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  logo: Logo;
  children?: React.ReactNode;
};

function LogoCard({ logo, className, children, variants, ...props }: LogoCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.02, zIndex: 20 }}
      className={cn(
        "flex items-center justify-center bg-transparent px-4 py-8 md:p-12 min-h-[120px] relative group",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img
        alt={logo.alt}
        className="pointer-events-none h-8 select-none md:h-10 dark:brightness-200 dark:grayscale dark:invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        height={logo.height || "auto"}
        src={logo.src}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.fallback-text')) {
            const span = document.createElement('span');
            span.className = 'fallback-text text-sm font-mono uppercase tracking-tighter text-white/60';
            span.innerText = logo.alt.replace(' Logo', '');
            parent.appendChild(span);
          }
        }}
        width={logo.width || "auto"}
      />
      {children}
    </motion.div>
  );
}
