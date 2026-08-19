import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
