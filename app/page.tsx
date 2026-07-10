import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <HeroSection />
    </div>
  );
}
