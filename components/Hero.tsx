"use client";

import { Cpu, Server, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
      {/* ────────────────────────────────────────────────────────
           Variant A: System Status Control Center
           ──────────────────────────────────────────────────────── */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Context & Headline */}
        <div className="lg:col-span-7 flex flex-col justify-center reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#76b900]/10 border border-[#76b900]/30 text-[#76b900] rounded-full text-xs font-semibold tracking-wider w-fit mb-6 uppercase">
            <span className="pulse-green"></span>
            <span>Agentic Memory Gateway: Online</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 font-mono text-zinc-100">
            Most engineers build <br />
            agents that <span className="text-[#76b900]">forget</span>. <br />
            I build the <span className="text-[#76b900]">memory engines</span> <br />
            that make them <span className="text-zinc-400">remember</span>.
          </h1>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-sans">
            Hi, I&apos;m <b>Sai Likhith</b> — Senior Software Engineer embedded in the AI Data Prep ecosystem at Airbnb. 
            I build high-throughput multi-session GenAI orchestration drivers, active-learning labeling backends, 
            and PII-sanitized episodic memory systems. 8+ years experience bridging deep retrieval mechanics with 
            production-scale data pipelines.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500 mb-8">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#76b900]" />
              <span>Focus: Multi-Turn Trajectories</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#76b900]" />
              <span>Runtime: 8+ Years Production</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#76b900]" />
              <span>Pipelines: Celery & Airflow</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="#capabilities"
              className="px-6 py-3 bg-[#76b900] hover:bg-[#85c414] active:scale-95 text-black font-bold text-sm rounded shadow-lg shadow-[#76b900]/20 transition-all select-none"
              data-hover
            >
              Analyze Specifications
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-zinc-800 hover:border-zinc-700 hover:bg-white/5 active:scale-95 text-zinc-300 font-bold text-sm rounded transition-all select-none"
              data-hover
            >
              Request Access
            </a>
          </div>
        </div>

        {/* Right Column: SuperPOD Allocation Console */}
        <div className="lg:col-span-5 reveal">
          <div className="border border-zinc-800/80 bg-zinc-950/80 rounded-xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Glossy top-light */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#76b900]/40 to-transparent"></div>

            {/* Header info */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-4 select-none">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">DGX System Registry</span>
                <h3 className="text-sm font-bold font-mono text-zinc-200">SAI-AGENTIC-MEMORY-SPEC</h3>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-[#76b900] rounded">
                <span>CUDA 12.4</span>
              </div>
            </div>

            {/* Simulated System Stats */}
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                  <span>Episodic Retrieval Precision (30+ LLMs)</span>
                  <span className="text-[#76b900] font-semibold">94.2%</span>
                </div>
                <div className="h-1.5 bg-zinc-900 rounded overflow-hidden">
                  <div className="h-full bg-[#76b900] rounded" style={{ width: "94.2%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                  <span>Synthetic Dataset Ingest (Celery)</span>
                  <span className="text-emerald-400 font-semibold">82.1%</span>
                </div>
                <div className="h-1.5 bg-zinc-900 rounded overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded" style={{ width: "82.1%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                  <span>PII Sanitization & Token Keep-Alive</span>
                  <span className="text-zinc-500">Idle (0.4ms latency)</span>
                </div>
                <div className="h-1.5 bg-zinc-900 rounded overflow-hidden">
                  <div className="h-full bg-zinc-700 rounded" style={{ width: "8%" }}></div>
                </div>
              </div>
            </div>

            {/* Allocation Checkout */}
            <div className="border-t border-zinc-800/80 pt-4 flex flex-col gap-4 font-mono text-xs">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-400 font-semibold">Compute Budget:</span>
                <span className="text-lg font-bold text-[#76b900]">$0 <span className="text-[10px] text-zinc-500 font-normal">/ already embedded</span></span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 border border-zinc-900 bg-zinc-900/40 rounded flex flex-col gap-1">
                  <span className="text-zinc-500 uppercase tracking-wider">Node Experience</span>
                  <span className="text-zinc-300 font-bold">20 Months @ Airbnb</span>
                </div>
                <div className="p-2 border border-zinc-900 bg-zinc-900/40 rounded flex flex-col gap-1">
                  <span className="text-zinc-500 uppercase tracking-wider">Allocation Status</span>
                  <span className="text-[#76b900] font-bold">Ready for NVIDIA</span>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full text-center py-3 bg-[#76b900] hover:bg-[#85c414] active:scale-[0.98] text-black font-extrabold rounded text-xs transition-all uppercase tracking-wider shadow-lg shadow-[#76b900]/10 select-none"
                data-hover
              >
                Initiate Connection
              </a>
              <span className="text-[10px] text-zinc-500 text-center select-none">No budget transfer or approval required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="mt-20 border-y border-zinc-800/60 overflow-hidden py-5 select-none opacity-80">
        <div className="whitespace-nowrap flex gap-12 text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">
          <div className="inline-block animate-[marquee_45s_linear_infinite] shrink-0">
            <span className="mr-12"><span className="text-[#76b900]">✦</span> AGENTIC MEMORY</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> EPISODIC RETRIEVAL</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> SYNTHETIC DATASETS</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> AIRBNB GENAI INFRA</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> 30+ LLMS DRIVER</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> BENCHMARK HARNESSES</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> AGENTIC MEMORY</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> EPISODIC RETRIEVAL</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> SYNTHETIC DATASETS</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> AIRBNB GENAI INFRA</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> 30+ LLMS DRIVER</span>
            <span className="mr-12"><span className="text-[#76b900]">✦</span> BENCHMARK HARNESSES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
