import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, MapPin, Trophy } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    year: "2018 – 2019",
    title: "Secondary School Certificate (10th)",
    institution: "Government Higher Secondary School",
    location: "Jharkhand",
    grade: "81.20%",
    description: "Completed secondary education with strong academic performance.",
    accent: "#4F8EF7",
  },
  {
    icon: GraduationCap,
    year: "2019 – 2021",
    title: "Higher Secondary Certificate (12th — Science PCM)",
    institution: "Inter Science College",
    location: "Hazaribagh",
    grade: "65%",
    description: "Focused on Physics, Chemistry, and Mathematics stream.",
    accent: "#9B5DE5",
  },
  {
    icon: Award,
    year: "2021 – 2024",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Vinoba Bhave University (VBU)",
    location: "Hazaribagh",
    grade: "CGPA: 6.86",
    description: "Studied programming, data structures, DBMS, operating systems, and web development.",
    accent: "#F7A24F",
  },
  {
    icon: Trophy,
    year: "Jul 2024 – Aug 2026",
    title: "Master of Computer Applications (MCA)",
    institution: "Amity University Online",
    location: "Online",
    grade: "Currently Pursuing",
    description: "Specialization in AI & ML. Focus on AI, ML, DSA, DBMS, Python, and Software Engineering.",
    accent: "#00C853",
  },
];

const Education = () => {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 60%, rgba(79,142,247,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

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
            🎓 Academic Background
          </p>
          <h2
            className="font-black tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#F0F0FF" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education
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

        {/* Cards grid — 1 col mobile, 2 col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-5 sm:p-6 overflow-hidden group transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = `${item.accent}44`)
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)")
              }
            >
              {/* Accent glow top-left */}
              <div
                className="absolute top-0 left-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${item.accent}18 0%, transparent 70%)`,
                  transform: "translate(-30%, -30%)",
                }}
              />

              {/* Top row: icon + year badge */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30` }}
                >
                  <item.icon size={22} style={{ color: item.accent }} />
                </div>
                <span
                  className="text-xs font-mono font-bold px-3 py-1.5 rounded-full"
                  style={{
                    color: item.accent,
                    background: `${item.accent}12`,
                    border: `1px solid ${item.accent}25`,
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-sm sm:text-base mb-1 leading-snug transition-colors duration-200"
                style={{ color: "#F0F0FF" }}
              >
                {item.title}
              </h3>

              {/* Institution */}
              <p className="text-sm font-semibold mb-3" style={{ color: item.accent }}>
                {item.institution}
              </p>

              {/* Location + Grade */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} style={{ color: "#4B4B6A" }} />
                  <span className="text-xs" style={{ color: "#6B6B8A" }}>
                    {item.location}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Trophy size={13} style={{ color: item.accent }} />
                  <span className="text-xs font-semibold" style={{ color: item.accent }}>
                    {item.grade}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#8888AA" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
