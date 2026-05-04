import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowUp, Mail, Phone, MapPin, Code2,
  ExternalLink, Download, Heart,
} from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */
const navCols = [
  {
    heading: "Explore",
    links: [
      { label: "Home",       href: "#home" },
      { label: "About",      href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Education",  href: "#education" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Skills",       href: "#skills" },
      { label: "Projects",     href: "#projects" },
      { label: "Certificates", href: "#certificates" },
      { label: "Contact",      href: "#contact" },
    ],
  },
];

const socials = [
  { icon: Github,    href: "https://github.com/realvivekrana",          label: "GitHub",    color: "#e2e8f0" },
  { icon: Linkedin,  href: "https://www.linkedin.com/in/mrvivekrana/",  label: "LinkedIn",  color: "#0A66C2" },
  { icon: Twitter,   href: "https://x.com/mrvivaanrana",                label: "Twitter",   color: "#1DA1F2" },
  { icon: Instagram, href: "https://www.instagram.com/mrvivaanrana/",   label: "Instagram", color: "#E1306C" },
];

const contactItems = [
  { icon: Mail,   label: "Email",    value: "vivekranaworks@gmail.com", href: "mailto:vivekranaworks@gmail.com" },
  { icon: Phone,  label: "Phone",    value: "+91 9304718075",           href: "tel:+919304718075" },
  { icon: MapPin, label: "Location", value: "Noida, UP, India",         href: null },
];

const techStack = ["React", "Node.js", "MongoDB", "TypeScript", "Tailwind"];

/* ─── HELPERS ───────────────────────────────────────────── */
const scrollTo    = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

/* ─── COMPONENT ─────────────────────────────────────────── */
const Footer = () => {
  const [showFab, setShowFab] = useState(false);

  // Show FAB only after user scrolls down 400px
  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden" style={{ background: "#050508" }}>

      {/* ══════════════════════════════════════════════
          TOP GLOW BORDER
      ══════════════════════════════════════════════ */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(79,142,247,0.6) 40%, rgba(155,93,229,0.6) 60%, transparent 100%)",
        }}
      />

      {/* ══════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════ */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(79,142,247,0.07) 0%, rgba(155,93,229,0.07) 100%)",
            border: "1px solid rgba(79,142,247,0.18)",
          }}
        >
          {/* Mesh gradient blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(79,142,247,0.18) 0%, transparent 65%)",
              }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(155,93,229,0.18) 0%, transparent 65%)",
              }}
            />
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(79,142,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 text-center px-6 py-10 sm:py-14 lg:py-16">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-mono tracking-[0.18em] uppercase"
              style={{
                color: "#00C853",
                background: "rgba(0,200,83,0.08)",
                border: "1px solid rgba(0,200,83,0.25)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
              Open to Work
            </motion.div>

            {/* Heading */}
            <h2
              className="font-black tracking-tight leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 5.5vw, 3.25rem)", color: "#F0F0FF" }}
            >
              Let's Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4F8EF7 0%, #9B5DE5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Amazing
              </span>
            </h2>

            <p
              className="text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto"
              style={{ color: "#8888AA" }}
            >
              Have a project in mind? I'm available for freelance work and full-time opportunities.
            </p>

            {/* CTA row — stacks on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.button
                onClick={() => scrollTo("#contact")}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(79,142,247,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                  boxShadow: "0 4px 20px rgba(79,142,247,0.35)",
                  minHeight: "48px",
                }}
              >
                <Mail size={16} />
                Get In Touch
              </motion.button>

              <motion.a
                href="/Vivek-Kumar-Rana-Resume.pdf"
                download="Vivek-Kumar-Rana-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1.5px solid rgba(79,142,247,0.35)",
                  color: "#C8C8E8",
                  minHeight: "48px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════
          MAIN BODY
      ══════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

        {/* Divider */}
        <div
          className="h-px mb-10 sm:mb-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />

        {/* ── 4-column grid ──
            Mobile:  1 col (brand full-width, then 2-col for nav, then contact)
            Tablet:  2 col
            Desktop: brand | nav1 | nav2 | contact
        ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.8fr] gap-8 lg:gap-10 mb-10 sm:mb-12">

          {/* ── Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            {/* Logo row */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(79,142,247,0.15), rgba(155,93,229,0.15))",
                  border: "1px solid rgba(79,142,247,0.25)",
                }}
              >
                <Code2 size={20} style={{ color: "#4F8EF7" }} />
              </div>
              <div>
                <p
                  className="text-base font-black leading-none"
                  style={{
                    background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Vivek Rana
                </p>
                <p
                  className="text-[11px] mt-0.5 font-mono tracking-wider"
                  style={{ color: "#4B4B6A", fontFamily: "JetBrains Mono, monospace" }}
                >
                  MERN Stack Developer
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B6B8A" }}>
              Building scalable, performant web applications with React, Node.js, Express &amp; MongoDB.
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {techStack.map(t => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                  style={{
                    color: "#4F8EF7",
                    background: "rgba(79,142,247,0.07)",
                    border: "1px solid rgba(79,142,247,0.15)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#6B6B8A",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = color;
                    el.style.borderColor = `${color}55`;
                    el.style.background = `${color}14`;
                    el.style.boxShadow = `0 4px 16px ${color}30`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#6B6B8A";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Nav columns (2 cols on mobile side-by-side) ── */}
          {navCols.map((col, ci) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.08 }}
            >
              <h4
                className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "#4F8EF7", fontFamily: "JetBrains Mono, monospace" }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-0.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="group flex items-center gap-2 w-full py-1.5 text-sm text-left transition-all duration-200"
                      style={{ color: "#6B6B8A", minHeight: "36px" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F0F0FF")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6B6B8A")}
                    >
                      <span
                        className="w-0 h-px rounded-full transition-all duration-300 group-hover:w-4 flex-shrink-0"
                        style={{ background: "linear-gradient(90deg, #4F8EF7, #9B5DE5)" }}
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* ── Contact ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4
              className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: "#4F8EF7", fontFamily: "JetBrains Mono, monospace" }}
            >
              Contact
            </h4>

            <div className="flex flex-col gap-2.5">
              {contactItems.map((item, i) => {
                const inner = (
                  <>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(79,142,247,0.1)",
                        border: "1px solid rgba(79,142,247,0.18)",
                      }}
                    >
                      <item.icon size={14} style={{ color: "#4F8EF7" }} />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-[9px] font-mono tracking-[0.15em] uppercase mb-0.5"
                        style={{ color: "#4B4B6A", fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-xs sm:text-sm font-medium leading-tight"
                        style={{ color: "#C8C8E8", wordBreak: "break-word" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                const baseStyle: React.CSSProperties = {
                  background: "rgba(79,142,247,0.03)",
                  border: "1px solid rgba(79,142,247,0.08)",
                };

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                        style={baseStyle}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "rgba(79,142,247,0.3)";
                          el.style.background = "rgba(79,142,247,0.07)";
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "rgba(79,142,247,0.08)";
                          el.style.background = "rgba(79,142,247,0.03)";
                        }}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div
                        className="flex items-center gap-3 p-3 rounded-xl"
                        style={baseStyle}
                      >
                        {inner}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════
            BOTTOM BAR
        ══════════════════════════════════════════════ */}
        <div
          className="pt-6"
          style={{
            borderTop:
              "1px solid linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            borderTopColor: "rgba(255,255,255,0.06)",
          }}
        >
          {/* Mobile: center-stacked | Desktop: space-between */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs text-center sm:text-left order-2 sm:order-1 flex items-center gap-1.5"
              style={{ color: "#4B4B6A" }}
            >
              © {new Date().getFullYear()}
              <span style={{ color: "#6B6B8A" }}>Vivek Kumar Rana</span>
              · Made with
              <Heart size={11} style={{ color: "#E1306C", display: "inline" }} />
              in India
            </motion.p>

            {/* Right side: back-to-top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 order-1 sm:order-2"
            >
              <span className="text-xs" style={{ color: "#4B4B6A" }}>
                All rights reserved.
              </span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2, boxShadow: "0 4px 16px rgba(79,142,247,0.35)" }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                style={{
                  background: "rgba(79,142,247,0.08)",
                  border: "1px solid rgba(79,142,247,0.2)",
                  color: "#6B6B8A",
                }}
                aria-label="Back to top"
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#4F8EF7";
                  el.style.background = "rgba(79,142,247,0.15)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#6B6B8A";
                  el.style.background = "rgba(79,142,247,0.08)";
                }}
              >
                <ArrowUp size={16} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          FLOATING BACK-TO-TOP FAB (all devices)
          Only visible after scrolling 400px
      ══════════════════════════════════════════════ */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={showFab
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.6, y: 20 }
        }
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        whileHover={{ scale: 1.12, boxShadow: "0 8px 30px rgba(79,142,247,0.5)" }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
          boxShadow: "0 4px 20px rgba(79,142,247,0.4)",
          pointerEvents: showFab ? "auto" : "none",
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} color="#fff" />
      </motion.button>
    </footer>
  );
};

export default Footer;
