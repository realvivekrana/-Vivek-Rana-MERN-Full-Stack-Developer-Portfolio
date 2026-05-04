import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    icon: Code2,
    year: "Sep 2023 – May 2024",
    title: "MERN Stack Developer Trainee",
    company: "Skill Academy",
    location: "Mumbai, Maharashtra (Remote)",
    description:
      "Learned full-stack development including HTML, CSS, JavaScript, React, and backend technologies.",
    current: false,
  },
  {
    icon: Briefcase,
    year: "Apr 2025 – Sep 2025",
    title: "MERN Stack Developer Trainee",
    company: "CETPA Infotech Pvt Ltd",
    location: "Noida, Uttar Pradesh (On-site)",
    description:
      "Completed training in MERN stack including React, Node.js, Express.js, and MongoDB. Built multiple full-stack projects.",
    current: false,
  },
  {
    icon: Briefcase,
    year: "Feb 2026 – Present",
    title: "Frontend Developer Intern",
    company: "Athenura",
    location: "Noida, Uttar Pradesh (Remote)",
    description:
      "Working on frontend development using HTML, Tailwind CSS, and modern UI practices.",
    current: true,
  },
];

const Experience = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(155,93,229,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p
            className="text-xs sm:text-sm tracking-[0.25em] uppercase mb-3"
            style={{ color: "#4F8EF7", fontFamily: "JetBrains Mono, monospace" }}
          >
            💼 Work History
          </p>
          <h2
            className="font-black tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#F0F0FF" }}
          >
            Work{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experience
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, #4F8EF7, #9B5DE5)",
              transformOrigin: "center",
            }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: "20px",
              width: "2px",
              background:
                "linear-gradient(to bottom, #4F8EF7 0%, rgba(79,142,247,0.3) 70%, transparent 100%)",
            }}
          />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((item, i) => (
              <motion.div
                key={item.title + item.company}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                  className="absolute flex items-center justify-center rounded-full"
                  style={{
                    left: "6px",
                    top: "20px",
                    width: "28px",
                    height: "28px",
                    background: item.current
                      ? "linear-gradient(135deg, #4F8EF7, #9B5DE5)"
                      : "rgba(79,142,247,0.15)",
                    border: "2px solid rgba(79,142,247,0.4)",
                    boxShadow: item.current ? "0 0 12px rgba(79,142,247,0.5)" : "none",
                  }}
                >
                  <item.icon
                    size={13}
                    style={{ color: item.current ? "#fff" : "#4F8EF7" }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-2xl p-4 sm:p-5 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(79,142,247,0.1)",
                  }}
                  onMouseEnter={e =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.3)")
                  }
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.1)")
                  }
                >
                  {/* Date + current badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold"
                      style={{
                        color: "#4F8EF7",
                        background: "rgba(79,142,247,0.1)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      <Calendar size={11} />
                      {item.year}
                    </div>
                    {item.current && (
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                        style={{
                          color: "#00C853",
                          background: "rgba(0,200,83,0.1)",
                          border: "1px solid rgba(0,200,83,0.25)",
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-sm sm:text-base mb-1"
                    style={{ color: "#F0F0FF" }}
                  >
                    {item.title}
                  </h3>

                  {/* Company */}
                  <p className="text-sm font-semibold mb-2" style={{ color: "#4F8EF7" }}>
                    {item.company}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin size={13} style={{ color: "#4B4B6A" }} />
                    <span className="text-xs" style={{ color: "#6B6B8A" }}>
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#8888AA" }}>
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
