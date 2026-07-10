import Navbar from "@/components/Navbar";

const skillCategories = [
  {
    title: "Languages",
    items: ["Java", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
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

const iconPaths: Record<string, string> = {
  React: "/icons/react-svgrepo-com.svg",
  "Next.js": "/icons/next-dot-js-svgrepo-com.svg",
  TypeScript: "/icons/typescript-svgrepo-com.svg",
  "Tailwind CSS": "/icons/tailwindcss-svgrepo-com.svg",
  "Node.js": "/icons/node-js-svgrepo-com.svg",
  Express: "/icons/express-svgrepo-com.svg",
  Python: "/icons/python-svgrepo-com.svg",
  PostgreSQL: "/icons/postgresql-svgrepo-com.svg",
  MongoDB: "/icons/mongodb-svgrepo-com.svg",
  Docker: "/icons/docker-svgrepo-com.svg",
  AWS: "/icons/aws-svgrepo-com.svg",
  "CI/CD": "/icons/cicd-svgrepo-com.svg",
  Linux: "/icons/linux-svgrepo-com.svg",
  Nginx: "/icons/nginx-svgrepo-com.svg",
  Git: "/icons/git-svgrepo-com.svg",
  Figma: "/icons/figma-svgrepo-com.svg",
  "VS Code": "/icons/vscode-svgrepo-com.svg",
  Webpack: "/icons/webpack-svgrepo-com.svg",
  ESLint: "/icons/eslint-svgrepo-com.svg",
  Java: "/icons/java-svgrepo-com.svg",
};

function TechIcon({ name }: { name: string }) {
  const src = iconPaths[name];
  return (
    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-white transition-colors duration-300 shrink-0">
      {src ? (
        <img src={src} alt={name} className="w-5 h-5 shrink-0" />
      ) : (
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
