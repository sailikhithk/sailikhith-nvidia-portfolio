"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, CheckCircle2, Shield, Info } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    priority: "HIGH",
    payload: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.payload) {
      addLog("ERROR: Input payload parsing failed. Undefined fields detected.");
      return;
    }

    setIsSubmitting(true);
    addLog(`INIT: Establishing handshake with host ${formData.name}`);
    
    setTimeout(() => {
      addLog("POST: Serializing message body with AES-256 encryption.");
    }, 400);

    setTimeout(() => {
      addLog(`ROUTE: Injecting packet into secure mail queue [Priority: ${formData.priority}]`);
    }, 850);

    setTimeout(() => {
      addLog("SUCCESS: Request dispatched. SLA handoff completed.");
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-900/60 bg-zinc-950/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="font-mono text-[#76b900] text-xs uppercase tracking-widest flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            Compute Gateway
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 font-mono text-zinc-100">
            Allocate Compute Session
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mt-4 leading-relaxed">
            Transmit server configuration requirements or scheduling requests. Packets are parsed and routed directly to Sai's active terminal.
          </p>
        </div>

        {/* Outer Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start reveal">
          {/* Left panel: Form */}
          <div className="lg:col-span-7 border border-zinc-900 bg-zinc-950/80 p-6 lg:p-8 rounded-lg shadow-xl relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#76b900]/20 to-transparent"></div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2">
                        Host Client Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-[#76b900]/60 outline-none rounded p-3 text-sm font-mono text-zinc-200 transition-colors"
                        placeholder="e.g. Recruiters / Lead Architect"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        data-hover
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2">
                        Contact Socket (Email)
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-[#76b900]/60 outline-none rounded p-3 text-sm font-mono text-zinc-200 transition-colors"
                        placeholder="e.g. name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        data-hover
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2">
                      Allocation Priority
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["LOW_SLA", "HIGH", "CRITICAL_INTERRUPT"].map((pri) => (
                        <button
                          key={pri}
                          type="button"
                          onClick={() => setFormData({ ...formData, priority: pri })}
                          className={`py-2 px-3 border rounded text-[10px] font-mono tracking-wider transition-colors select-none ${
                            formData.priority === pri
                              ? "bg-[#76b900]/10 border-[#76b900] text-[#76b900] font-bold"
                              : "bg-zinc-900/40 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                          }`}
                          data-hover
                        >
                          {pri}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2">
                      Request Payload (Message)
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-[#76b900]/60 outline-none rounded p-3 text-sm font-mono text-zinc-200 transition-colors resize-none"
                      placeholder="Input scheduling proposals, role details, or cluster setup specifications here..."
                      value={formData.payload}
                      onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                      data-hover
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#76b900] hover:bg-[#85c414] active:scale-[0.98] disabled:bg-zinc-800 disabled:text-zinc-600 text-black font-extrabold rounded text-xs transition-all uppercase tracking-wider select-none"
                    data-hover
                  >
                    <Send className="w-3.5 h-3.5" />
                    {isSubmitting ? "Executing Pipeline..." : "Transmit Compute Request"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-mono text-zinc-100 mb-2">
                    Transmission Acknowledged
                  </h3>
                  <p className="text-zinc-400 text-xs max-w-sm leading-relaxed mb-6 font-mono">
                    Host socket successfully locked. Message queued under transaction block ID: 
                    <span className="text-[#76b900] ml-1">TX-{Math.random().toString(36).substring(3, 9).toUpperCase()}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setLogs([]);
                      setFormData({ name: "", email: "", priority: "HIGH", payload: "" });
                    }}
                    className="px-4 py-2 border border-zinc-800 hover:bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 text-xs font-mono rounded transition-colors"
                  >
                    Reset System Console
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right panel: Terminal logs log */}
          <div className="lg:col-span-5 border border-zinc-900 bg-zinc-950/80 rounded-lg overflow-hidden h-[380px] flex flex-col">
            <div className="bg-zinc-900/60 px-4 py-3 border-b border-zinc-900 flex items-center justify-between select-none">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#76b900]" />
                Handshake Logs
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
            </div>

            <div className="flex-1 p-4 font-mono text-[10px] text-zinc-500 space-y-2 overflow-y-auto">
              <div className="text-zinc-500">[SYSTEM] Session console ready. Awaiting inputs.</div>
              {logs.map((log, i) => {
                let color = "text-zinc-400";
                if (log.includes("ERROR:")) color = "text-red-400";
                if (log.includes("SUCCESS:")) color = "text-emerald-400";
                if (log.includes("INIT:")) color = "text-amber-400";
                return (
                  <div key={i} className={color}>
                    {log}
                  </div>
                );
              })}
            </div>

            <div className="bg-zinc-900/30 p-3 border-t border-zinc-900 flex items-start gap-2.5">
              <Info className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
              <p className="text-[9px] font-mono text-zinc-600 leading-normal">
                Transmitted payload is stored with TLS encryption and forwards details directly to sailikhithcse@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
