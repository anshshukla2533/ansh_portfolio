import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(70,57,36,0.14)] bg-[#f7f1e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-muted">
        <span>&copy; {new Date().getFullYear()} Ansh Shukla. All rights reserved.</span>
        
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-ink hover:text-[#3954ff] transition-colors"
        >
          <span>Back to Top</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
