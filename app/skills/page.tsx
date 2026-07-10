import Navbar from "@/components/Navbar";

const skillCategories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "Linux", "Nginx"],
  },
  {
    title: "Tools",
    items: ["Git", "Figma", "VS Code", "Webpack", "ESLint"],
  },
];

function TechIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    React: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="3.3" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.3" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.3" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(120 12 12)" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#000" />
        <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">N</text>
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#06B6D4" />
        <path d="M6 14c1-4 3-5.5 6-5.5-2 2.5-2 4.5 0 6 1.5 1.5 3.5 2 6 1-1 4-3 5.5-6 5.5 2-2.5 2-4.5 0-6-1.5-1.5-3.5-2-6-1z" fill="#fff" />
      </svg>
    ),
    "Framer Motion": (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#0055FF" />
        <path d="M7 5h10l-5 6 5 6H7l5-6-5-6z" fill="#fff" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#339933" />
        <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">N</text>
      </svg>
    ),
    Express: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#333" />
        <path d="M5 8c2 0 2 2 2 4s0 4-2 4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M14 12l3 4 3-4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 8l3 4 3-4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Python: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#3776AB" />
        <path d="M12 4c-3 0-3 1.5-3 2v3h6v1.5H7.5C6 10.5 4 12 4 15s2 4 4 4h1v-2c0-2 2-3.5 4-3.5h3.5c1.5 0 2.5-1 2.5-2.5V9c0-1.5-1-3-3.5-3H12z" fill="#FFD43B" />
        <circle cx="15" cy="7" r="1" fill="#fff" />
        <path d="M12 20c3 0 3-1.5 3-2v-3H9v-1.5h7.5c1.5 0 3.5-1.5 3.5-4.5s-2-4-4-4H15v2c0 2-2 3.5-4 3.5H7.5C6 10.5 5 11.5 5 13v1.5c0 1.5 1 3 3.5 3H12z" fill="#FFD43B" />
        <circle cx="9" cy="17" r="1" fill="#fff" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <path d="M12 2C7 2 6 5 6 7v4c0 2-1 4-3 5 2 1 3 3 3 6v1h4v-1c0-2 1-3 2-3s2 1 2 3v1h4v-1c0-3 1-5 3-6-2-1-3-3-3-5V7c0-2-1-5-6-5z" fill="#336791" />
        <circle cx="12" cy="5" r="1" fill="#fff" />
        <path d="M9 8h6" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
        <path d="M10 11h4" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <path d="M12 2C8 6 8 13 8 16c0 3 1 5 4 7 3-2 4-4 4-7 0-3 0-10-4-14z" fill="#47A248" />
        <path d="M12 2v20" stroke="#47A248" strokeWidth="0.5" />
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#2496ED" />
        <rect x="3" y="11" width="4" height="3" rx="1" fill="#fff" />
        <rect x="8" y="11" width="4" height="3" rx="1" fill="#fff" />
        <rect x="13" y="11" width="4" height="3" rx="1" fill="#fff" />
        <rect x="8" y="7" width="4" height="3" rx="1" fill="#fff" />
        <rect x="13" y="7" width="4" height="3" rx="1" fill="#fff" />
        <rect x="18" y="11" width="4" height="3" rx="1" fill="#fff" />
        <path d="M3 16c0 0 1 3 5 3h8c4 0 5-3 5-3H3z" fill="#fff" opacity="0.6" />
      </svg>
    ),
    AWS: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#FF9900" />
        <path d="M6 9l3 6h-1.5l-.5-1H5l-.5 1H3l3-6h0zm-.5 3.5h2L6 10.5l-.5 2zm5-1.5h-1v-2h1c1 0 1.5.5 1.5 1s-.5 1-1.5 1h0zm0-3h-2v6h1.5v-2h.5c1.5 0 2.5-1 2.5-2s-1-2-2.5-2h0zm5 6h-2v-6h2c2 0 3 1.5 3 3s-1 3-3 3h0zm0-4.5h-.5v3h.5c1 0 1.5-.5 1.5-1.5s-.5-1.5-1.5-1.5h0z" fill="#fff" />
      </svg>
    ),
    "CI/CD": (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#6B7280" />
        <path d="M4 12l5-5v3h6V7l5 5-5 5v-3H9v3L4 12z" fill="#fff" />
      </svg>
    ),
    Linux: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#FCC624" />
        <circle cx="10" cy="9" r="2" fill="#333" />
        <circle cx="14" cy="9" r="2" fill="#333" />
        <path d="M8 14c0 0 1 2 4 2s4-2 4-2" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M9 17c1 1 2 1.5 3 1.5s2-.5 3-1.5" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    Nginx: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#009639" />
        <path d="M12 4L4 8v8l8 4 8-4V8l-8-4z" fill="#009639" />
        <path d="M12 5L5 8.5v7l7 3.5 7-3.5v-7L12 5z" fill="#fff" />
        <path d="M12 5v15" stroke="#009639" strokeWidth="1" />
        <path d="M5 8.5l7 3.5" stroke="#009639" strokeWidth="1" />
        <path d="M19 8.5l-7 3.5" stroke="#009639" strokeWidth="1" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#F05032" />
        <circle cx="9" cy="6" r="2" fill="#fff" />
        <circle cx="9" cy="18" r="2" fill="#fff" />
        <circle cx="17" cy="12" r="2" fill="#fff" />
        <path d="M9 8v8" stroke="#fff" strokeWidth="1.5" />
        <path d="M9 16l6-3" stroke="#fff" strokeWidth="1.5" />
        <path d="M9 8l6 3" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
    Figma: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <circle cx="16" cy="6" r="3" fill="#F24E1E" />
        <circle cx="16" cy="12" r="3" fill="#7262FF" />
        <ellipse cx="16" cy="18" rx="3" ry="3" fill="#0ACF83" />
        <path d="M10 12c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3z" fill="#F24E1E" />
        <path d="M16 6V3c0-1.7-1.3-3-3-3H7c-1.7 0-3 1.3-3 3s1.3 3 3 3h6c1.7 0 3-1.3 3-3z" fill="#A259FF" />
        <path d="M10 18c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3z" fill="#0ACF83" />
      </svg>
    ),
    "VS Code": (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#007ACC" />
        <path d="M7 4l-3 3v10l3 3 8-7v-2l-8-7z" fill="#fff" />
        <path d="M10 12l4-3v6l-4-3z" fill="#fff" opacity="0.8" />
      </svg>
    ),
    Webpack: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <rect width="24" height="24" rx="4" fill="#8DD6F9" />
        <path d="M12 3L5 7v10l7 4 7-4V7l-7-4z" fill="#1C78C0" />
        <path d="M12 7v10" stroke="#fff" strokeWidth="1.5" />
        <path d="M7.5 9.5v5" stroke="#fff" strokeWidth="1.5" />
        <path d="M16.5 9.5v5" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
    ESLint: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#8080F2" />
        <path d="M12 4.5L4 8.5v7l8 4 8-4v-7l-8-4z" fill="#4B32C3" />
        <path d="M7 12l5 3 5-3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return (
    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-white/10 transition-colors duration-300 shrink-0">
      {icons[name] || (
        <span className="w-5 h-5 rounded bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-[9px] font-bold text-white">
          {name[0]}
        </span>
      )}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white transition-colors duration-300">
          My <span className="text-neon">Skills</span>
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gray-50 dark:bg-white/5 transition-colors duration-300"
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-neon mb-5">
                {cat.title}
              </h2>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-black dark:text-white text-sm font-medium transition-colors duration-300"
                  >
                    <TechIcon name={item} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
