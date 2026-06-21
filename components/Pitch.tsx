"use client";

import { motion } from "framer-motion";
import { Award, Zap, CheckCircle2, ChevronRight, BarChart } from "lucide-react";

interface SpecMapping {
  requirement: string;
  incumbentCapability: string;
  status: "COMPLIANT" | "OPTIMIZED";
  details: string;
}

const SPEC_COMPATIBILITY: SpecMapping[] = [
  {
    requirement: "Multi-Session & Episodic Memory",
    incumbentCapability: "30+ LLM Driver routing with multi-turn KeepAlives",
    status: "OPTIMIZED",
    details: "Built Airbnb's BPI VA multi-session state router and JWT keep-alive TTL monitors to guarantee uninterrupted agent trajectories."
  },
  {
    requirement: "Synthetic Dataset Pipelines",
    incumbentCapability: "Orchestrated 10,000 cases/run ingestion pipelines",
    status: "OPTIMIZED",
    details: "Designed custom pandas/Presidio data pipelines and Labelbox model-assisted labeling (MAL) ingestion workflows."
  },
  {
    requirement: "Benchmark Task & Eval Design",
    incumbentCapability: "5-layer hourly/daily DAG validation system",
    status: "COMPLIANT",
    details: "Built active-learning benchmarks and test harnesses checking label integrity, targeting an 80% runtime optimization."
  },
  {
    requirement: "Experimental Diagnostics & OTEL",
    incumbentCapability: "Telescope OTLP migrations & singleton consolidation",
    status: "OPTIMIZED",
    details: "Configured custom OTEL resource attributes for non-service Sandcastle pods, tracking telemetry directly in Telescope."
  },
  {
    requirement: "AI/ML Publications track record",
    incumbentCapability: "Published AI research paper (SPE-210272-MS)",
    status: "COMPLIANT",
    details: "Authored peer-reviewed conference paper detailing modular architecture design and reusable ML pipeline components."
  }
];

export default function Pitch() {
  return (
    <section id="pitch" className="py-20 border-t border-zinc-900/60 bg-zinc-950/40 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#76b900]/2 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="font-mono text-[#76b900] text-xs uppercase tracking-widest flex items-center gap-2">
            <Award className="w-3.5 h-3.5" />
            Compatibility Worksheet
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 font-mono text-zinc-100">
            FTE Node Compatibility Spec
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mt-4 leading-relaxed font-sans">
            Audit mapping Sai Likhith Kanuparthi's production credentials against requirements for NVIDIA's Agentic Memory Engineering team.
          </p>
        </div>

        {/* Outer Panel Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch reveal">
          {/* Left panel: Bullet specs */}
          <div className="lg:col-span-4 border border-zinc-900 bg-zinc-950/80 p-8 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 bg-[#76b900] rounded-full"></span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">INCUMBENT LOGISTICS</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-zinc-200 mb-6 leading-tight">
                Agent Memory System Fit
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-8 font-sans">
                With 8+ years of production experience spanning Airbnb's GenAI platform and Fortune 50 enterprises, Sai Likhith is positioned to immediately contribute to NVIDIA's agentic memory and synthetic evaluation frameworks.
              </p>

              <div className="space-y-4 font-mono text-xs text-zinc-400">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span>RETRIEVAL SLA:</span>
                  <span className="text-[#76b900] font-bold">99.9% STABLE</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span>EVAL METRIC:</span>
                  <span className="text-emerald-400 font-bold">10K SYNTHETIC</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span>SCHEMAS:</span>
                  <span className="text-zinc-200 font-bold">STRICT JSON CONTROL</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900">
              <a
                href="#contact"
                className="group flex items-center justify-between px-4 py-3 bg-[#76b900]/10 hover:bg-[#76b900]/20 border border-[#76b900]/30 hover:border-[#76b900] text-[#76b900] font-bold text-xs rounded transition-all select-none"
                data-hover
              >
                <span>ALLOCATE ENGINEER NODE</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right panel: Spec Matrix table */}
          <div className="lg:col-span-8 border border-zinc-900 bg-zinc-950/50 rounded-lg overflow-hidden flex flex-col">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 bg-zinc-900/60 p-4 border-b border-zinc-900 font-mono text-[10px] text-zinc-500 uppercase tracking-widest select-none">
              <div className="col-span-4">Target Requirement</div>
              <div className="col-span-5">Sai's Match Capability</div>
              <div className="col-span-3 text-right">Verification Status</div>
            </div>

            {/* Table Rows */}
            <div className="flex-1 divide-y divide-zinc-900/80">
              {SPEC_COMPATIBILITY.map((spec) => (
                <div
                  key={spec.requirement}
                  className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-zinc-900/10 transition-colors"
                >
                  <div className="col-span-4 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#76b900] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-zinc-200 font-mono">{spec.requirement}</div>
                    </div>
                  </div>

                  <div className="col-span-5 text-xs text-zinc-300">
                    <div>{spec.incumbentCapability}</div>
                    <div className="text-[10px] text-zinc-500 mt-1 leading-relaxed">{spec.details}</div>
                  </div>

                  <div className="col-span-3 text-right">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-[8px] font-mono font-bold tracking-wider uppercase ${
                        spec.status === "OPTIMIZED"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-[#76b900]/10 text-[#76b900] border border-[#76b900]/20"
                      }`}
                    >
                      {spec.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
