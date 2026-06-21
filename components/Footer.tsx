"use client";

import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

export default function Footer() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toISOString().replace("T", " ").substring(0, 19) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-zinc-900 bg-black py-8 font-mono text-[10px] text-zinc-500 relative select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Status Indicators */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>CONNECTIVITY: <span className="text-zinc-300 font-bold">CONNECTED</span></span>
          </div>
          <div className="w-1 h-2 bg-zinc-800 hidden sm:block"></div>
          <div>LATENCY: <span className="text-zinc-300 font-bold">12ms (SF-NODE)</span></div>
          <div className="w-1 h-2 bg-zinc-800 hidden sm:block"></div>
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-[#76b900]" />
            <span>SECURE CONSOLE</span>
          </div>
        </div>

        {/* Timestamp */}
        <div className="text-zinc-400">
          SYS_TIME: <span className="text-zinc-200">{timestamp || "2026-06-20 23:22:34 UTC"}</span>
        </div>

        {/* Links & Copyright */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sailikhithk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-zinc-900 border border-zinc-800 hover:border-[#76b900]/40 hover:text-zinc-200 transition-colors rounded group flex items-center justify-center"
              data-hover
            >
              <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sailikhithk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-zinc-900 border border-zinc-800 hover:border-[#76b900]/40 hover:text-zinc-200 transition-colors rounded group flex items-center justify-center"
              data-hover
            >
              <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <div className="text-right">
            © {new Date().getFullYear()} SAI LIKHITH KANUPARTHI. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
