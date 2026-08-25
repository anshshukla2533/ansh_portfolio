import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { sections } from "./data/portfolioData";

function App() {
  const [active, setActive] = useState("experience");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -40% 0px",
        threshold: [0.15, 0.3, 0.5],
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar
        active={active}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main id="top" className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-14 w-full flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Recognition />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
