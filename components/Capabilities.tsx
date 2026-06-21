"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Shield, Layers, HardDrive, Terminal, GitBranch } from "lucide-react";

interface NodeSpec {
  id: string;
  name: string;
  role: string;
  period: string;
  company: string;
  description: string;
  metrics: { label: string; value: string; color?: string }[];
  tech: string[];
  architecture: string[];
}

const NODES: NodeSpec[] = [
  {
    id: "NODE-01",
    name: "BPI-VIRTUAL-ANALYST",
    company: "Airbnb",
    role: "Senior Software Engineer (GenAI Platform)",
    period: "2024 - Present",
    description: "Multi-session LLM state router and evaluation sandbox. Converts high-dimensional raw case logs into PII-sanitized episodic memory traces, routing across 30+ LLMs using schema-enforced JSON validation.",
    metrics: [
      { label: "Throughput Limit", value: "10,000 Cases/Run", color: "text-[#76b900]" },
      { label: "LLM Drivers", value: "30+ Models Routing", color: "text-amber-400" },
      { label: "PII Latency", value: "-30% vs standard", color: "text-emerald-400" }
    ],
    tech: ["BlueLabel FacadeDriver", "Presidio PII Engine", "Streamlit", "Onebrain/Sandcastle", "Pandas", "OTEL"],
    architecture: [
      "JWT KeepAlive TTL monitors to prevent token expirations during multi-hour active-agent evaluation sweeps.",
      "Microsoft Presidio semantic filtration pipeline sanitizing 12 entity types to ensure PII-safe vector embeddings.",
      "Two-layer JSON schema alignment and validation system resolving mid-stream LLM generation truncations."
    ]
  },
  {
    id: "NODE-02",
    name: "REDPEN-LABELING-INFRA",
    company: "Airbnb",
    role: "Senior Software Engineer (ML Platform)",
    period: "2024 - Present",
    description: "Active-learning annotation platform and synthetic dataset generator. Orchestrates dataset ingestion, model-assisted labeling (MAL) benchmarks, and hourly evaluation exports.",
    metrics: [
      { label: "Code Coverage", value: "70% (+18 tests)", color: "text-emerald-400" },
      { label: "Export Runtime", value: "-80% Optimization", color: "text-[#76b900]" },
      { label: "SLA Consistency", value: ">99.5% Verified", color: "text-blue-400" }
    ],
    tech: ["Flask", "Celery", "Redis", "SQLAlchemy + Alembic", "Labelbox SDK 7.x", "Datadog"],
    architecture: [
      "Designed a 5-layer hourly/daily delta DAG system with high-precision activity checks for label export syncing.",
      "Hardened client base wrapper using custom exponential backoff retry-after decorators.",
      "Pydantic state models preventing data truncation on 18+ digit identifiers by forcing string types."
    ]
  },
  {
    id: "NODE-03",
    name: "LILLY-DMS-PORTAL",
    company: "Eli Lilly (Consultant)",
    role: "Full-Stack Engineer",
    period: "2024",
    description: "Procedural memory audit logging system. Engineered database triggers capturing document modifications as JSON diffs to guarantee compliance workflows and data lifecycle audits.",
    metrics: [
      { label: "Uptime SLA", value: "99.9% Uptime", color: "text-emerald-400" },
      { label: "Engine Target", value: "Spring Boot 3.2", color: "text-[#76b900]" },
      { label: "Local Database", value: "PostgreSQL 16", color: "text-zinc-400" }
    ],
    tech: ["Spring Boot 3.2", "React 18", "PostgreSQL 16", "Flyway", "JPA / Hibernate", "OpenShift"],
    architecture: [
      "Implemented database-level master-data audit triggers capturing JSON diffs directly.",
      "Configured idempotent Flyway migrations with schema checks to prevent deployment blocks.",
      "CI/CD workflows deploying containerized application instances across QA/Prod namespaces."
    ]
  },
  {
    id: "NODE-04",
    name: "SHELL-NLP-PIPELINE",
    company: "Shell PLC",
    role: "Senior Python Developer",
    period: "2021 - 2022",
    description: "Distributed ETL pipelines and semantic retrieval classification algorithms. Deployed custom text-classification NLP models on high-scale SageMaker endpoints.",
    metrics: [
      { label: "NLP Accuracy", value: "86% → 94%", color: "text-emerald-400" },
      { label: "Feature Lead Time", value: "-30% Reduction", color: "text-[#76b900]" },
      { label: "Monthly Traffic", value: "17M Pageviews", color: "text-blue-400" }
    ],
    tech: ["Python", "AWS SageMaker", "Databricks", "Apache Spark", "PySpark", "Azure Data Factory"],
    architecture: [
      "Published SPE ATCE Conference research paper (22ATCE-P-663-SPE) on ML reusable components.",
      "NLP text classification engine using rule-based regex parsing + tokenization.",
      "Optimized Databricks and PySpark ETL query caches to clear 200+ query-planning bottlenecks."
    ]
  },
  {
    id: "NODE-05",
    name: "SWA-CLUSTER-MONITOR",
    company: "Southwest Airlines",
    role: "Senior Software Developer",
    period: "2023 - 2024",
    description: "Telemetry reporting and cluster monitoring for predictive analytics pipelines deployed on multi-pod Kubernetes clusters.",
    metrics: [
      { label: "Unit Test Coverage", value: "95% Checked", color: "text-emerald-400" },
      { label: "Deployment Engine", value: "Kubernetes Pods", color: "text-[#76b900]" },
      { label: "Search Indexer", value: "Elasticsearch", color: "text-amber-400" }
    ],
    tech: ["Flask", "Angular", "Docker", "Kubernetes", "Datadog", "Elasticsearch", "Gradle"],
    architecture: [
      "Dockerized SageMaker & S3 storage hooks for multi-pod Kubernetes scheduling.",
      "Developed high-throughput indexers syncing structured aircraft records into Elasticsearch.",
      "Built telemetry hooks capturing container crashes and forwarding traces to Datadog."
    ]
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 border-t border-zinc-900/60 bg-zinc-950/40 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#76b900]/3 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#76b900]/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <span className="font-mono text-[#76b900] text-xs uppercase tracking-widest flex items-center gap-2">
            <Server className="w-3.5 h-3.5" />
            Active Memory & Evaluation Engines
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 font-mono text-zinc-100">
            Pipeline Architectures & Workloads
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mt-4 leading-relaxed font-sans">
            Production workloads engineered, optimized, and deployed to run semantic retrieval, active-learning, and synthetic data generation at scale.
          </p>
        </div>

        {/* Nodes Grid */}
        <div className="space-y-12">
          {NODES.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-zinc-800/80 hover:border-[#76b900]/40 bg-zinc-950/60 rounded-xl overflow-hidden shadow-xl transition-all duration-300 relative"
            >
              {/* Glossy edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#76b900]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Grid Layout inside the node block */}
              <div className="grid lg:grid-cols-12 gap-8 p-6 lg:p-8">
                {/* Node ID & Identity */}
                <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800/80 pb-6 lg:pb-0 lg:pr-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#76b900] bg-[#76b900]/10 px-2.5 py-1 border border-[#76b900]/20 rounded uppercase tracking-wider">
                        {node.id}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-500">{node.period}</span>
                    </div>

                    <h3 className="text-xl font-bold font-mono tracking-tight text-zinc-100 group-hover:text-[#76b900] transition-colors">
                      {node.name}
                    </h3>
                    <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wide">
                      {node.company} · <span className="text-zinc-500">{node.role}</span>
                    </div>

                    <p className="text-zinc-400 text-xs mt-4 leading-relaxed">
                      {node.description}
                    </p>
                  </div>

                  {/* Node Metrics Panel */}
                  <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-zinc-900 font-mono">
                    {node.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col gap-0.5">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{metric.label}</span>
                        <span className={`text-xs font-bold ${metric.color || "text-zinc-200"}`}>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Specifications */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-4">
                    <Terminal className="w-3.5 h-3.5 text-[#76b900]" />
                    <span>System Architecture Notes</span>
                  </div>
                  <ul className="space-y-3.5 text-xs text-zinc-300">
                    {node.architecture.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <GitBranch className="w-4 h-4 text-[#76b900]/60 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hardware Drivers (Tech Stack) */}
                <div className="lg:col-span-3 flex flex-col justify-start lg:pl-4">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-4">
                    <Cpu className="w-3.5 h-3.5 text-[#76b900]" />
                    <span>Kernel Dependencies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {node.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 rounded hover:border-[#76b900]/30 hover:text-zinc-200 transition-colors select-none"
                        data-hover
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
