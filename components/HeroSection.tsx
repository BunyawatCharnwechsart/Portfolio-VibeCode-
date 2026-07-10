import Link from "next/link";
import LaptopMockup from "./LaptopMockup";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <p className="text-neon text-base md:text-lg font-medium tracking-wide">
            Hi, I am bunyawat charnwechsart
          </p>

          <h1 className="flex flex-col">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-none tracking-tight text-black dark:text-white transition-colors duration-300">
              FULL STACK
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-none tracking-tight text-black dark:text-white transition-colors duration-300">
              WEB DEVELOPER
            </span>
          </h1>

          <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
            I craft modern, scalable web applications with clean code
            and pixel-perfect design. Passionate about building products
            that make a real impact.
          </p>

          <div>
            <Link
              href="/contact-me"
              className="inline-flex items-center gap-2 bg-neon text-black font-semibold text-sm md:text-base px-8 py-3.5 rounded-full hover:brightness-110 transition-all duration-300 animate-[neon-pulse_3s_ease-in-out_infinite]"
            >
              Contact Me
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex items-end justify-center lg:justify-end h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[500px]">
          <div
            className="absolute bottom-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #1EF4A8 0%, transparent 70%)",
            }}
          />
          <LaptopMockup />
        </div>
      </div>
    </section>
  );
}
