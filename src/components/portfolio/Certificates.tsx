import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ZoomIn, X } from "lucide-react";
import cert1 from "@/assets/cert1.jpg";
import cert2 from "@/assets/cert2.jpg";
import cert3 from "@/assets/cert3.jpg";
import cert4 from "@/assets/cert4.jpg";
import cert5 from "@/assets/cert5.jpg";

const certificates = [
  { title: "MERN Stack Development",  image: cert1, issuer: "CETPA Infotech" },
  { title: "Frontend Development",    image: cert2, issuer: "Skill Academy" },
  { title: "Web Development",         image: cert3, issuer: "Certification Authority" },
  { title: "JavaScript",              image: cert4, issuer: "Certification Authority" },
  { title: "React Development",       image: cert5, issuer: "Certification Authority" },
];

const Certificates = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

  return (
    <section id="certificates" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(155,93,229,0.05) 0%, transparent 60%)",
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
            🏆 Achievements
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
              Certificates
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
          <p className="mt-4 text-sm sm:text-base max-w-md mx-auto" style={{ color: "#6B6B8A" }}>
            Tap any certificate to view it in full size.
          </p>
        </motion.div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              onClick={() => setLightbox({ image: cert.image, title: cert.title })}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(79,142,247,0.1)",
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.35)")
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.1)")
              }
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(5,5,8,0.7)", backdropFilter: "blur(2px)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(79,142,247,0.2)", border: "1px solid rgba(79,142,247,0.4)" }}
                  >
                    <ZoomIn size={22} style={{ color: "#4F8EF7" }} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} style={{ color: "#4F8EF7" }} />
                  <h3 className="text-sm font-bold" style={{ color: "#F0F0FF" }}>
                    {cert.title}
                  </h3>
                </div>
                <p className="text-xs" style={{ color: "#6B6B8A" }}>
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)" }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={e => e.stopPropagation()}
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(79,142,247,0.3)" }}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full h-auto"
            />
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.15)", color: "#F0F0FF" }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            {/* Caption */}
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
            >
              <p className="text-sm font-semibold" style={{ color: "#F0F0FF" }}>
                {lightbox.title}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;
