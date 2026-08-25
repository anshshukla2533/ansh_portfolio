import React from "react";
import { socialLinks } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="py-6 sm:py-10 lg:py-12 border-b border-[rgba(70,57,36,0.14)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      
      {}
      <div className="lg:col-span-7 flex flex-col items-start">
        
        {}
        <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-serif font-bold text-ink leading-[1.14] tracking-tight">
          Hey, I&apos;m <span className="text-[#3954ff]">Ansh</span>.
          <br />
          I build software and
          <br />
          ship AI systems.
        </h1>

        {}
        <p className="font-mono text-xs sm:text-sm text-muted mt-4 mb-1.5">
          B.Tech CSE @ SRM University AP.
        </p>

        {}
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted flex items-center gap-1.5 mb-6">
          <span className="text-[#3954ff]">📍</span> ANDHRA PRADESH, INDIA
        </p>

        {}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noreferrer"}
              download={link.download || undefined}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgba(70,57,36,0.2)] bg-white/40 hover:bg-white text-ink text-xs font-mono tracking-wider uppercase transition-all hover:-translate-y-0.5 shadow-2xs"
            >
              <span className="text-muted">
                {link.label === "GitHub" && (
                  <svg className="w-3.5 h-3.5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                )}
                {link.label === "LinkedIn" && (
                  <svg className="w-3.5 h-3.5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                )}
                {link.label === "Codolio" && (
                  <svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                )}
                {link.label === "Email" && (
                  <svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                )}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#1f1c1a] text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#3954ff] transition-all hover:-translate-y-0.5"
          >
            BOOK A CALL ↗
          </a>
          <a
            href="https://codolio.com/profile/anshshukla2533"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-[rgba(70,57,36,0.22)] bg-white/40 hover:bg-white text-ink font-mono text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5"
          >
            CODOLIO PROFILE ↗
          </a>
        </div>

      </div>

      {}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative max-w-[290px] sm:max-w-[340px] lg:max-w-[360px] w-full p-3.5 sm:p-4 bg-white shadow-paper rounded-xs border border-[rgba(87,65,34,0.18)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
          {}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-[#e5dfd3]/90 border border-[rgba(70,57,36,0.2)] shadow-xs rounded-xs z-10" />
          
          <div className="relative aspect-[4/5] rounded-xs overflow-hidden border border-black/10 bg-stone-100 max-h-[380px] sm:max-h-[420px]">
            <img
              className="w-full h-full object-cover object-[50%_15%]"
              src="/profile.jpg"
              alt="Ansh Shukla portrait"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-800 to-indigo-900 text-white flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-mono mb-3">AS</div>
              <h3 className="font-serif text-lg font-bold">Ansh Shukla</h3>
              <p className="text-xs font-mono text-white/80 mt-1">Product Engineer with AI</p>
            </div>
          </div>

          <div className="mt-3 text-center font-serif italic text-xs sm:text-sm text-muted">
            Andhra Pradesh, 2026
          </div>
        </div>
      </div>

    </section>
  );
}
