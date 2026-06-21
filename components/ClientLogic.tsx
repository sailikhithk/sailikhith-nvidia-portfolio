"use client";

import { useEffect } from "react";

export default function ClientLogic() {
  useEffect(() => {
    // Custom cursor logic
    const cursor = document.getElementById("cursor");
    const dot = document.getElementById("cursor-dot");
    let animationFrameId: number;

    if (cursor && dot && window.matchMedia("(hover: hover)").matches) {
      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let cx = mx, cy = my;

      const onMouseMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      };

      window.addEventListener("mousemove", onMouseMove);

      const tick = () => {
        cx += (mx - cx) * 0.2;
        cy += (my - cy) * 0.2;
        cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
        animationFrameId = requestAnimationFrame(tick);
      };
      tick();

      const attach = () => {
        document.querySelectorAll("[data-hover]").forEach((el) => {
          el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
          el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
        });
        document.querySelectorAll("[data-view]").forEach((el) => {
          el.addEventListener("mouseenter", () => cursor.classList.add("view"));
          el.addEventListener("mouseleave", () => cursor.classList.remove("view"));
        });
      };
      attach();
      
      const interval = setInterval(attach, 1000);

      // Cleanup
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animationFrameId);
        clearInterval(interval);
      };
    }
  }, []);

  useEffect(() => {
    // Scroll progress and nav shadow
    const progress = document.getElementById("scroll-progress");
    const nav = document.getElementById("nav");
    
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      if (progress) progress.style.width = pct + "%";
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Intersection observer for reveal
    let started = false;
    const startStatTicks = () => {
      if (started) return;
      started = true;
      document.querySelectorAll(".tick").forEach((el) => {
        const target = parseFloat((el as HTMLElement).dataset.target || "0");
        const suffix = (el as HTMLElement).dataset.suffix || "";
        const decimal = (el as HTMLElement).dataset.decimal === "true";
        const dur = 2000;
        const start = performance.now();
        
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          
          if (decimal) {
            el.innerHTML = val.toFixed(1) + suffix;
          } else {
            el.innerHTML = Math.round(val) + suffix;
          }
          
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            if (e.target.classList.contains("stats-grid") || e.target.querySelector(".tick")) {
              startStatTicks();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    
    document
      .querySelectorAll(".reveal, .reveal-stagger")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
