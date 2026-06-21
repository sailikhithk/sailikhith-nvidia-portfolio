"use client";

import { Activity, Cpu, Layers, RefreshCw } from "lucide-react";

export default function SystemMonitor() {
  return (
    <section id="monitor" className="py-16 border-t border-zinc-900/60 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-12 reveal">
          <span className="font-mono text-[#76b900] text-xs uppercase tracking-widest">Telemetry</span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1 font-mono text-zinc-100">
            Node Performance Telemetry
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stats-grid reveal">
          {/* Stat 1 */}
          <div className="p-6 border border-zinc-900 bg-zinc-950/40 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded">
                <Activity className="w-5 h-5 text-[#76b900]" />
              </span>
              <span className="text-[10px] font-mono text-emerald-400">ONLINE</span>
            </div>
            <div>
              <div
                className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-white mb-2 tick"
                data-target="8"
                data-suffix="y"
                data-decimal="false"
              >
                0y
              </div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                System Runtime (YOE)
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 border border-zinc-900 bg-zinc-950/40 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded">
                <Layers className="w-5 h-5 text-emerald-500" />
              </span>
              <span className="text-[10px] font-mono text-emerald-400">MAX LOAD</span>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold tracking-tight text-white mb-2 tick"
                data-target="10000"
                data-suffix=""
                data-decimal="false"
              >
                0
              </div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                Parallel Ingestion (Rows/Run)
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 border border-zinc-900 bg-zinc-950/40 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded">
                <Cpu className="w-5 h-5 text-amber-500" />
              </span>
              <span className="text-[10px] font-mono text-amber-400">LLMOPS</span>
            </div>
            <div>
              <div
                className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-white mb-2 tick"
                data-target="30"
                data-suffix="+"
                data-decimal="false"
              >
                0+
              </div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                LLM Model integrations
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-6 border border-zinc-900 bg-zinc-950/40 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded">
                <RefreshCw className="w-5 h-5 text-[#76b900]" />
              </span>
              <span className="text-[10px] font-mono text-emerald-400">SLA MET</span>
            </div>
            <div>
              <div
                className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-white mb-2 tick"
                data-target="99.9"
                data-suffix="%"
                data-decimal="true"
              >
                0.0%
              </div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                Multi-Session Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
