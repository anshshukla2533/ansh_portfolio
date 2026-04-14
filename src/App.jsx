import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Community from "./components/Community";

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='hero-shell'>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Community />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
