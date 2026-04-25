"use client";

import { useEffect, useState } from "react";

const glitchChars = "!@#$%^&*()_+{}|:<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function useGlitch(text: string, active: boolean) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!active) { setDisplay(text); return; }
    let frame = 0;
    const total = 18;
    const id = setInterval(() => {
      frame++;
      if (frame >= total) { setDisplay(text); clearInterval(id); return; }
      setDisplay(
        text
          .split("")
          .map((c, i) => (i < (frame / total) * text.length ? c : glitchChars[Math.floor(Math.random() * glitchChars.length)]))
          .join("")
      );
    }, 40);
    return () => clearInterval(id);
  }, [text, active]);
  return display;
}

export default function HackedPage() {
  const [show, setShow] = useState(false);
  const [typed, setTyped] = useState("");
  const [glitching, setGlitching] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [scanlines, setScanlines] = useState(true);

  const fullText = "> ACCESS DENIED — SYSTEM COMPROMISED";

  // Reveal animation on mount
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!show) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, [show]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Random glitch bursts
  useEffect(() => {
    const id = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 700);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const headline = useGlitch("404 — SYSTEM HACKED", glitching);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #000; overflow: hidden; }

        .hk-root {
          font-family: 'Share Tech Mono', monospace;
          background: #000;
          color: #00ff41;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 24px;
        }

        /* CRT scanlines */
        .hk-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,255,65,0.03) 2px,
            rgba(0,255,65,0.03) 4px
          );
          pointer-events: none;
          z-index: 10;
          animation: scan 8s linear infinite;
        }

        /* Flickering vignette */
        .hk-root::after {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.85) 100%);
          pointer-events: none;
          z-index: 9;
        }

        @keyframes scan {
          0%   { background-position: 0 0; }
          100% { background-position: 0 100vh; }
        }

        /* Random background matrix rain effect */
        .matrix-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          opacity: 0.08;
          overflow: hidden;
        }

        .matrix-col {
          position: absolute;
          top: -100%;
          font-size: 14px;
          color: #00ff41;
          animation: fall linear infinite;
          white-space: nowrap;
        }

        @keyframes fall {
          to { top: 110%; }
        }

        .hk-card {
          position: relative;
          z-index: 5;
          border: 2px solid #00ff41;
          box-shadow: 0 0 40px rgba(0,255,65,0.35), inset 0 0 60px rgba(0,255,65,0.04);
          padding: 48px 56px;
          max-width: 760px;
          width: 100%;
          text-align: center;
          animation: flicker 5s ease-in-out infinite;
        }

        @keyframes flicker {
          0%,95%,100% { opacity: 1; }
          96%          { opacity: 0.4; }
          97%          { opacity: 1; }
          98%          { opacity: 0.6; }
          99%          { opacity: 1; }
        }

        .hk-skull {
          font-size: 72px;
          line-height: 1;
          margin-bottom: 24px;
          animation: pulse 2s ease-in-out infinite;
          display: block;
          filter: drop-shadow(0 0 16px rgba(0,255,65,0.8));
        }

        @keyframes pulse {
          0%,100% { transform: scale(1);   }
          50%      { transform: scale(1.07); }
        }

        .hk-404 {
          font-size: clamp(80px, 14vw, 130px);
          font-weight: 900;
          letter-spacing: -4px;
          line-height: 1;
          color: #00ff41;
          text-shadow: 0 0 20px #00ff41, 0 0 60px rgba(0,255,65,0.4);
          position: relative;
          display: inline-block;
          margin-bottom: 8px;
        }

        .hk-404.glitch {
          animation: glitchAnim 0.1s steps(1) infinite;
        }

        @keyframes glitchAnim {
          0%   { text-shadow: -3px 0 #ff0040, 3px 0 #00ffe1; clip-path: polygon(0 0,100% 0,100% 45%,0 45%); }
          25%  { text-shadow:  3px 0 #ff0040,-3px 0 #00ffe1; clip-path: polygon(0 55%,100% 55%,100% 100%,0 100%); }
          50%  { text-shadow: -3px 0 #ff0040, 3px 0 #00ffe1; clip-path: polygon(0 20%,100% 20%,100% 70%,0 70%); }
          75%  { text-shadow:  3px 0 #ff0040,-3px 0 #00ffe1; clip-path: polygon(0 0,100% 0,100% 100%,0 100%); }
          100% { text-shadow: -3px 0 #ff0040, 3px 0 #00ffe1; clip-path: polygon(0 10%,100% 10%,100% 60%,0 60%); }
        }

        .hk-subtitle {
          font-size: clamp(13px, 2.5vw, 17px);
          color: #00ff41;
          opacity: 0.85;
          margin-bottom: 32px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .hk-divider {
          border: none;
          border-top: 1px dashed rgba(0,255,65,0.4);
          margin: 24px 0;
        }

        .hk-terminal {
          background: rgba(0,255,65,0.06);
          border: 1px solid rgba(0,255,65,0.3);
          padding: 16px 20px;
          text-align: left;
          font-size: 14px;
          margin-bottom: 28px;
          min-height: 52px;
          color: #00ff41;
          letter-spacing: 1px;
        }

        .hk-cursor {
          display: inline-block;
          width: 10px;
          height: 16px;
          background: #00ff41;
          vertical-align: text-bottom;
          margin-left: 2px;
        }

        .hk-warning {
          color: #ff0040;
          text-shadow: 0 0 10px #ff0040;
          font-size: 13px;
          letter-spacing: 2px;
          animation: blink 1.1s step-end infinite;
          margin-bottom: 20px;
          display: block;
        }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }

        .hk-info {
          font-size: 12px;
          color: rgba(0,255,65,0.5);
          letter-spacing: 1.5px;
          margin-top: 24px;
        }

        .hk-bar {
          height: 4px;
          background: linear-gradient(90deg, #00ff41, #00ffe1, #ff0040, #00ff41);
          background-size: 300% 100%;
          animation: barSlide 3s linear infinite;
          margin-bottom: 28px;
        }

        @keyframes barSlide {
          0%   { background-position: 0 0; }
          100% { background-position: 300% 0; }
        }

        .hk-ip {
          color: #ff0040;
          text-shadow: 0 0 8px #ff0040;
        }

        @media (max-width: 600px) {
          .hk-card { padding: 28px 18px; }
        }
      `}</style>

      <div className="hk-root">
        {/* Matrix rain */}
        <MatrixRain />

        <div className="hk-card">
          <div className="hk-bar" />

          <span className="hk-skull">☠️</span>

          <div className={`hk-404${glitching ? " glitch" : ""}`}>{headline}</div>
          <p className="hk-subtitle">Egyptian Squash Federation — Website Compromised</p>

          <hr className="hk-divider" />

          <div className="hk-terminal">
            {typed}
            {cursorVisible && <span className="hk-cursor" />}
          </div>

          <span className="hk-warning">⚠ WARNING: ALL DATA IS BEING EXTRACTED ⚠</span>

          <LogLines />

          <div className="hk-info">
            INTRUDER IP: <span className="hk-ip">{fakeIP()}</span> &nbsp;|&nbsp; TIME:{" "}
            <Clock />
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Fake IP (stable per session) ── */
function fakeIP() {
  if (typeof window === "undefined") return "0.0.0.0";
  if (!(window as any).__pranckIP) {
    (window as any).__pranckIP = `${r(1,254)}.${r(0,255)}.${r(0,255)}.${r(1,254)}`;
  }
  return (window as any).__pranckIP;
}
function r(a: number, b: number) { return Math.floor(Math.random() * (b - a + 1)) + a; }

/* ── Clock ── */
function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

/* ── Scrolling fake log lines ── */
const LOG_TEMPLATES = [
  "Bypassing firewall... OK",
  "Dumping user credentials... DONE",
  "Injecting payload... SUCCESS",
  "Encrypting files with AES-256...",
  "Exfiltrating database... 87%",
  "Disabling intrusion detection... OK",
  "Uploading backdoor shell... DONE",
  "Deleting access logs... SUCCESS",
  "Scanning open ports 80, 443, 22...",
  "Privilege escalation... ROOT ACCESS GRANTED",
];

function LogLines() {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setLines((prev) => [...prev.slice(-5), `[${new Date().toLocaleTimeString()}] ${LOG_TEMPLATES[i % LOG_TEMPLATES.length]}`]);
      i++;
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ textAlign: "left", fontSize: 12, color: "rgba(0,255,65,0.7)", minHeight: 96, marginBottom: 8 }}>
      {lines.map((l, i) => (
        <div key={i} style={{ marginBottom: 4 }}>{l}</div>
      ))}
    </div>
  );
}

/* ── Matrix Rain ── */
const COLS = 30;
function MatrixRain() {
  return (
    <div className="matrix-bg">
      {Array.from({ length: COLS }).map((_, i) => (
        <div
          key={i}
          className="matrix-col"
          style={{
            left: `${(i / COLS) * 100}%`,
            animationDuration: `${6 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * -10}s`,
            fontSize: `${10 + Math.random() * 8}px`,
          }}
        >
          {Array.from({ length: 30 })
            .map(() => glitchChars[Math.floor(Math.random() * glitchChars.length)])
            .join("\n")}
        </div>
      ))}
    </div>
  );
}


