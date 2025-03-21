import Hero from "./commponent/hero/Hero"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./commponent/Skills/Skills";
import Experience from "./commponent/Experience/Experienc";
import Language from "./commponent/Language/Language";
import Projects from "./commponent/Projects/Projects";
import Contact from "./commponent/Contact/Contact";
import Footer from "./commponent/Footer/Footer";  

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
      <div className="w-[100%] h-auto bg-red-200 absolute top-0 left-0">
        <main className="bg-[#0d182e] relative mx-auto w-full h-auto ms:w-[100%] ms:h-auto  md:w-[100%] md:h-auto  lg:w-[100%] lg:h-auto  xl:w-[100%] xl:h-auto 2xl:w-[1536px] 2xl:h-auto">
          <Hero />
          <Skills />
          <Experience />
          <Language />
          <Projects />
          <Contact />
          <Footer />
  </main>
      </div>
       )
}

export default App
