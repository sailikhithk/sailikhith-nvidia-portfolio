"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, Award, CheckCircle } from "lucide-react";

interface AuditRecord {
  reviewer: string;
  role: string;
  project: string;
  date: string;
  outcome: string;
  quote: string;
  rating: string;
}

const AUDITS: AuditRecord[] = [
  {
    reviewer: "Ameet Shinde",
    role: "BPI VA Deployment Partner",
    project: "BPI Virtual Analyst Deployment",
    date: "April 2026",
    outcome: "HIGH IMPACT / SYSTEM STABLE",
    rating: "SLA MET",
    quote: "Sai has been an outstanding partner in the deployment of the BPIVA tool, and I want to take a moment to recognize his incredible contributions. Thanks to Sai's efforts, the BPIVA tool has had a significant impact on reducing non-value-added work, enabling the BPI team to shift their focus to high-impact, actionable tasks exactly where their energy should be. What truly sets Sai apart is his deep understanding of technology combined with his ability to quickly grasp tool requirements and translate them into real solutions. He doesn't just deliver, he continuously looks for ways to enhance and upgrade the tool's capabilities, ensuring it evolves alongside our team's needs."
  },
  {
    reviewer: "Jeremy Chua",
    role: "AirCover / HALO Team Lead",
    project: "Human Annotation Scaling",
    date: "April 2026",
    outcome: "CRITICAL ENABLER / UNBLOCKED",
    rating: "EXCELLENCE",
    quote: "A huge shoutout to Sai for going above and beyond in supporting our new HALO [Human Annotation] team in AirCover! 🙌 From answering my Labelbox questions to proactively flagging solutions I hadn't even thought to ask about — Sai made the whole process so much smoother. This support has been instrumental in helping our team in AirCover get off the ground and hit the ground running. Really appreciate you, Sai!"
  },
  {
    reviewer: "Lori Barber",
    role: "Luxe Labelbox Lead",
    project: "Luxe Annotation Setup",
    date: "March 2026",
    outcome: "SLA STABLE / VERIFIED",
    rating: "VERIFIED",
    quote: "Thank you, Sai, for being invaluable to setting up the Luxe labelbox project and working so quickly to resolve matters. I look forward to working more closely with you in the coming months."
  },
  {
    reviewer: "Alejandro Virrueta",
    role: "Engineering Lead",
    project: "On-call Support Integration",
    date: "February 2026",
    outcome: "INCIDENT RESOLVED / OK",
    rating: "PASS",
    quote: "Thanks for covering the on-call today! Good job investigating the first ticket!"
  }
];

export default function Testimonials() {
  return (
    <section id="validations" className="py-20 border-t border-zinc-900/60 bg-zinc-950/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="font-mono text-[#76b900] text-xs uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verification Audits
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 font-mono text-zinc-100">
            Peer System Verifications
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mt-4 leading-relaxed">
            Documented testimonies and SLA approvals from platform leads and deployment partners confirming architectural competence.
          </p>
        </div>

        {/* Audit Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {AUDITS.map((audit, index) => (
            <motion.div
              key={audit.reviewer}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:border-[#76b900]/30 transition-all duration-300 relative group"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center border-b border-l border-zinc-900 text-zinc-600 group-hover:text-[#76b900] group-hover:border-[#76b900]/20 transition-all text-[8px] font-mono select-none">
                {audit.rating}
              </div>

              <div>
                {/* Audit Meta */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-zinc-900 border border-zinc-800 rounded">
                    <MessageSquare className="w-4 h-4 text-[#76b900]" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-tight">
                      AUDIT::{audit.reviewer.replace(/\s+/g, "-").toUpperCase()}
                    </h3>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">
                      {audit.role} · {audit.date}
                    </div>
                  </div>
                </div>

                {/* Audit Content */}
                <p className="text-zinc-300 text-xs italic leading-relaxed mb-6 font-sans">
                  &ldquo;{audit.quote}&rdquo;
                </p>
              </div>

              {/* Audit Footer Status */}
              <div className="border-t border-zinc-900 pt-4 mt-auto flex items-center justify-between font-mono text-[9px]">
                <span className="text-zinc-500 uppercase tracking-wider">Target Scope:</span>
                <span className="text-zinc-400 font-semibold">{audit.project}</span>
                <span className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/5 px-2 py-0.5 border border-emerald-500/20 rounded">
                  <CheckCircle className="w-2.5 h-2.5" />
                  {audit.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
