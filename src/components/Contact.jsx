import React, { useState } from "react";
import { socialLinks } from "../data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ansh_shukla@srmap.edu.in");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 lg:py-18 border-b border-[rgba(70,57,36,0.14)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
      
      <div className="lg:col-span-7 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[rgba(70,57,36,0.12)]">
          <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-accent">
            05 / GET IN TOUCH
          </span>
          <span className="font-mono text-[11px] text-muted uppercase">Open for Opportunities</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-ink leading-tight">
          Let&apos;s build something exceptional together.
        </h2>

        <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-xl">
          I&apos;m actively seeking product engineering roles, AI research collaborations, and full-stack software development projects.
        </p>

        <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="mailto:ansh_shukla@srmap.edu.in"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3954ff] text-white font-mono text-[11px] font-bold uppercase tracking-wider shadow-sm hover:bg-[#1f1c1a] transition-all hover:-translate-y-0.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[rgba(70,57,36,0.22)] bg-white/60 hover:bg-white text-ink font-mono text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer"
          >
            {copiedEmail ? "✓ Email Copied!" : "Copy Email Address"}
          </button>
        </div>

        <div className="pt-2 flex flex-wrap gap-3 text-[11px] font-mono uppercase tracking-wider text-muted">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noreferrer"}
              download={link.download || undefined}
              className="hover:text-accent underline decoration-1 underline-offset-4 transition-colors"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 bg-white/60 border border-[rgba(70,57,36,0.18)] rounded-xl p-5 sm:p-6 shadow-xs">
        <h3 className="font-mono text-[11px] font-bold tracking-widest uppercase text-ink pb-2.5 border-b border-[rgba(70,57,36,0.12)]">
          Direct Contact Details
        </h3>

        <div className="divide-y divide-[rgba(70,57,36,0.12)]">
          <div className="py-3 flex justify-between gap-4">
            <span className="font-mono text-[11px] text-muted uppercase">Phone</span>
            <a href="tel:+918795932702" className="text-xs font-semibold text-ink hover:text-accent">
              +91 8795932702
            </a>
          </div>

          <div className="py-3 flex justify-between gap-4">
            <span className="font-mono text-[11px] text-muted uppercase">Email</span>
            <a href="mailto:ansh_shukla@srmap.edu.in" className="text-xs font-semibold text-accent truncate">
              ansh_shukla@srmap.edu.in
            </a>
          </div>

          <div className="py-3 flex justify-between gap-4">
            <span className="font-mono text-[11px] text-muted uppercase">Codolio</span>
            <a href="https://codolio.com/profile/anshshukla2533" target="_blank" rel="noreferrer" className="text-xs font-semibold text-accent truncate">
              codolio.com/profile/anshshukla2533
            </a>
          </div>

          <div className="py-3 flex justify-between gap-4">
            <span className="font-mono text-[11px] text-muted uppercase">Location</span>
            <span className="text-xs font-semibold text-ink text-right">Andhra Pradesh, India</span>
          </div>

          <div className="py-3 flex justify-between gap-4">
            <span className="font-mono text-[11px] text-muted uppercase">University</span>
            <span className="text-xs font-semibold text-ink text-right">SRM University AP</span>
          </div>
        </div>
      </div>

    </section>
  );
}
