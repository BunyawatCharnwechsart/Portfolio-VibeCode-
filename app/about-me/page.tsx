import Navbar from "@/components/Navbar";

export default function AboutMePage() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white transition-colors duration-300">
          About <span className="text-neon">Me</span>
        </h1>
        <div className="mt-8 space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          <p>
            I&apos;m Bunyawat Charnwechsart — a Full Stack Web Developer based
            in Thailand. I specialize in building modern, scalable web
            applications from concept to deployment.
          </p>
          <p>
            With a strong focus on clean architecture, performance, and
            user experience, I bridge the gap between design and engineering
            to deliver products that make an impact.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open source, or mentoring aspiring
            developers.
          </p>
        </div>
      </main>
    </div>
  );
}
