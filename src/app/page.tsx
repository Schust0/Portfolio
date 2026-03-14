import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Background blobs — fixed, visible on the entire site */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-2/3 -right-32 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-8000" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        &copy; {new Date().getFullYear()} Arthur SCHUSTER. Tous droits
        réservés.
      </footer>
    </>
  );
}
