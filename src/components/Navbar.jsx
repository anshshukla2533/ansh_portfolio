import React from "react";
import { sections } from "../data/portfolioData";

export default function Navbar({ active, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(70,57,36,0.12)] bg-[#f7f1e7]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4 flex items-center justify-between gap-4">
        <a
          className="flex items-center gap-2 group text-2xl hover:scale-110 transition-transform"
          href="#top"
          aria-label="Ansh Shukla Home"
        >
          <span role="img" aria-label="eyes icon">👀</span>
        </a>

        { }
        <nav className="hidden md:flex items-center gap-6 sm:gap-8" aria-label="Desktop navigation">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`font-mono text-xs tracking-widest uppercase transition-all duration-150 ${active === section.id
                  ? "text-[#3954ff] font-bold border-b-2 border-[#3954ff] pb-0.5"
                  : "text-ink/80 hover:text-[#3954ff]"
                }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        { }
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-ink hover:bg-black/5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      { }
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(70,57,36,0.12)] bg-[#f7f1e7] px-6 py-4 space-y-2 shadow-lg">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg font-mono text-xs tracking-widest uppercase transition-colors ${active === section.id
                  ? "bg-[#3954ff] text-white font-bold"
                  : "text-ink hover:bg-black/5"
                }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
