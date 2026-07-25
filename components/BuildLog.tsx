"use client";

import { useEffect, useRef, useState } from "react";

const lines: { text: string; tone?: "prompt" | "ok" | "default" }[] = [
  { text: "$ tumelo run build", tone: "prompt" },
  { text: "compiling components ... done", tone: "default" },
  { text: "type-checking ... 0 errors", tone: "default" },
  { text: "tests passing 42/42", tone: "ok" },
  { text: "deployed to production", tone: "ok" },
];

export default function BuildLog() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="buildlog" aria-label="Sample build log">
      <div className="buildlog-bar">
        <span className="buildlog-dot" />
        <span className="buildlog-dot" />
        <span className="buildlog-dot" />
        <span className="buildlog-label">build.log</span>
      </div>
      <div className="buildlog-body">
        {lines.map((line, index) => (
          <p
            key={line.text}
            className={`transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            } ${line.tone === "prompt" ? "buildlog-prompt" : ""}`}
            style={{ transitionDelay: visible ? `${index * 220}ms` : "0ms" }}
          >
            {line.tone === "ok" ? (
              <span className="buildlog-ok">{line.text}</span>
            ) : (
              line.text
            )}
          </p>
        ))}
        <p
          className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: visible ? `${lines.length * 220}ms` : "0ms" }}
        >
          ready in 1.2s
          <span className="buildlog-cursor" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}
