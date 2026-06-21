"use client";

export default function Navbar() {
  return (
    <nav
      id="nav"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent bg-black/60 backdrop-blur-xl [&.scrolled]:border-zinc-800/80 [&.scrolled]:bg-[#030303]/90"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-wider text-sm md:text-base select-none" data-hover>
          <span className="w-4 h-4 bg-emerald-500 rounded-sm relative overflow-hidden flex items-center justify-center text-[10px] text-black font-extrabold rotate-45">
            <span className="-rotate-45">N</span>
          </span>
          <span className="font-mono tracking-widest text-[#76b900]">NVIDIA</span>
          <span className="text-zinc-600">|</span>
          <span className="font-mono text-xs text-zinc-400">SAI LIKHITH</span>
        </a>

        {/* Dashboard Status */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[10px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="pulse-green"></span>
            <span>SYSTEM STATE: <span className="text-[#76b900] font-bold">READY</span></span>
          </div>
          <div className="w-1 h-3 bg-zinc-800"></div>
          <div>COMPUTE TEMP: <span className="text-zinc-200">42°C</span></div>
          <div className="w-1 h-3 bg-zinc-800"></div>
          <div>FTE COMPATIBILITY: <span className="text-[#76b900] font-bold">100%</span></div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-1">
            <li>
              <a href="#monitor" className="px-3 py-1.5 rounded text-xs text-zinc-400 hover:text-white hover:bg-white/5 transition-all" data-hover>
                System Monitor
              </a>
            </li>
            <li>
              <a href="#capabilities" className="px-3 py-1.5 rounded text-xs text-zinc-400 hover:text-white hover:bg-white/5 transition-all" data-hover>
                Node Specs
              </a>
            </li>
            <li>
              <a href="#validations" className="px-3 py-1.5 rounded text-xs text-zinc-400 hover:text-white hover:bg-white/5 transition-all" data-hover>
                Validations
              </a>
            </li>
            <li>
              <a href="#pitch" className="px-3 py-1.5 rounded text-xs text-zinc-400 hover:text-white hover:bg-white/5 transition-all" data-hover>
                FTE Letter
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 bg-[#76b900] hover:bg-[#85c414] active:scale-95 text-black font-semibold text-xs rounded transition-all select-none"
            data-hover
          >
            Allocate Compute
          </a>
        </div>
      </div>
    </nav>
  );
}
