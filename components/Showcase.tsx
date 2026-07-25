"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Reveal from "./Reveal";
import { showcaseStats } from "@/lib/data";

const RADIUS = 64;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const FILL_RATIO = 0.76;

export default function Showcase() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mockupRef = useRef<HTMLDivElement | null>(null);
  const statRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [ringOffset, setRingOffset] = useState(CIRCUMFERENCE);
  const animatedRef = useRef(false);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    const mockup = mockupRef.current;
    if (!card || !mockup) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);

    const relX = (x / rect.width - 0.5) * 2;
    const relY = (y / rect.height - 0.5) * 2;
    mockup.style.transform = `rotateY(${relX * 10}deg) rotateX(${-relY * 10}deg)`;
  }

  function handleMouseLeave() {
    if (mockupRef.current) {
      mockupRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  }

  useEffect(() => {
    const node = statRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;

        if (prefersReducedMotion) {
          setCount(showcaseStats.targetCount);
          setRingOffset(CIRCUMFERENCE * (1 - FILL_RATIO));
          observer.disconnect();
          return;
        }

        setRingOffset(CIRCUMFERENCE * (1 - FILL_RATIO));
        const duration = 1800;
        const start = performance.now();

        function step(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * showcaseStats.targetCount));
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(showcaseStats.targetCount);
          }
        }
        requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div
            ref={cardRef}
            className="premium-depth-card [perspective:1600px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-sheen" aria-hidden="true" />

            <div className="relative z-10 grid items-center gap-14 md:grid-cols-2">
              <div>
                <span className="mb-5 block text-xs font-semibold uppercase tracking-widest text-violet/80">
                  Full time practice
                </span>
                <h2 className="mb-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-card-silver sm:text-5xl">
                  Systems, not just screens.
                </h2>
                <p className="mb-10 max-w-md text-base leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Tumelo Moletsane</span>{" "}
                  designs and ships production interfaces, from first
                  component to a codebase the next engineer enjoys working
                  in.
                </p>

                <div className="mb-10 flex items-center gap-8">
                  <div ref={statRef} className="stat-ring-wrap">
                    <svg viewBox="0 0 148 148" className="h-24 w-24">
                      <circle
                        cx="74"
                        cy="74"
                        r={RADIUS}
                        className="progress-ring-track"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="74"
                        cy="74"
                        r={RADIUS}
                        stroke="url(#ring-gradient)"
                        strokeWidth="8"
                        fill="none"
                        className="progress-ring"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={ringOffset}
                      />
                      <defs>
                        <linearGradient id="ring-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#a78bfa" />
                          <stop offset="100%" stopColor="#818cf8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-2xl font-bold text-card-silver">
                        {count}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold leading-none text-card-silver">
                      {showcaseStats.label}
                    </p>
                    <p className="mt-1 text-sm text-white/40">{showcaseStats.subtext}</p>
                  </div>
                </div>

                <a href="#contact" className="btn-light">
                  See how we would work together
                </a>
              </div>

              <div className="relative flex justify-center">
                <div ref={mockupRef} className="browser-bezel">
                  <div className="browser-bezel-bar">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    <span className="ml-3 text-[11px] text-white/30">tumelo-dashboard.app</span>
                  </div>
                  <div className="browser-bezel-body">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-white/40">
                          Overview
                        </p>
                        <p className="font-display text-lg font-semibold text-white">
                          Deploy pulse
                        </p>
                      </div>
                      <span className="floating-ui-badge px-3 py-1 text-xs font-semibold text-emerald">
                        99.98% uptime
                      </span>
                    </div>

                    <div className="widget-depth p-4">
                      <div className="flex h-24 items-end gap-1.5">
                        <div className="h-[35%] flex-1 rounded-t bg-gradient-to-t from-violet-600/40 to-violet-400/80" />
                        <div className="h-[55%] flex-1 rounded-t bg-gradient-to-t from-violet-600/40 to-violet-400/80" />
                        <div className="h-[40%] flex-1 rounded-t bg-gradient-to-t from-violet-600/40 to-violet-400/80" />
                        <div className="h-[70%] flex-1 rounded-t bg-gradient-to-t from-violet-600/40 to-violet-400/80" />
                        <div className="h-[95%] flex-1 rounded-t bg-gradient-to-t from-violet-600/40 to-indigo-300" />
                        <div className="h-[60%] flex-1 rounded-t bg-gradient-to-t from-violet-600/40 to-violet-400/80" />
                        <div className="h-[78%] flex-1 rounded-t bg-gradient-to-t from-violet-600/40 to-violet-400/80" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="widget-depth p-3.5">
                        <p className="mb-1 text-[11px] text-white/35">Requests / min</p>
                        <p className="font-display text-xl font-bold text-white">8,204</p>
                      </div>
                      <div className="widget-depth p-3.5">
                        <p className="mb-1 text-[11px] text-white/35">p95 latency</p>
                        <p className="font-display text-xl font-bold text-white">142ms</p>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className="floating-ui-badge absolute -bottom-6 -right-4 hidden items-center gap-2 sm:flex md:-right-10">
                  <span className="text-sm text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="text-xs font-medium text-white/80">4.9 client rating</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
