import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowDown, ArrowUpRight } from "lucide-react";

/* ---------------------------------------------------------
   NEO-BRUTALIST PORTFOLIO — Sumedh S Khobragade
   Tokens:
   - bg cream:   #F5F0E8
   - ink:        #0A0A0A
   - yellow:     #FFE500
   - pink:       #FF3EA5
   - lime:       #C6FF00
   - display:    Archivo Black
   - body:       Space Grotesk
   - mono:       JetBrains Mono
--------------------------------------------------------- */

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
`;

function useRevealOnScroll() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Tag({ children, accent }) {
  const bg = accent === "yellow" ? "#FFE500" : accent === "pink" ? "#FF3EA5" : accent === "lime" ? "#C6FF00" : "#F5F0E8";
  return (
    <span
      className="inline-block px-3 py-1 text-xs md:text-sm font-bold border-[3px] border-black uppercase tracking-wide"
      style={{ backgroundColor: bg, fontFamily: "'JetBrains Mono', monospace" }}
    >
      {children}
    </span>
  );
}

function BrutalButton({ children, href, primary, icon: Icon }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 px-6 py-3 border-[3px] border-black font-bold uppercase text-sm md:text-base
        shadow-[6px_6px_0px_#000] transition-all duration-100 ease-out
        hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000]
        active:translate-x-[6px] active:translate-y-[6px] active:shadow-none`}
      style={{
        backgroundColor: primary ? "#FFE500" : "#F5F0E8",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {children}
      {Icon && <Icon size={18} strokeWidth={2.5} />}
    </a>
  );
}

function IconButton({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-12 h-12 border-[3px] border-black bg-[#F5F0E8]
        shadow-[4px_4px_0px_#000] transition-all duration-100 ease-out
        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] hover:bg-[#FF3EA5]"
    >
      <Icon size={20} strokeWidth={2.5} />
    </a>
  );
}

function SectionHeading({ index, title }) {
  return (
    <div className="flex items-baseline gap-3 mb-10">
      <span
        className="text-sm md:text-base font-bold px-2 border-[3px] border-black bg-[#C6FF00]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {index}
      </span>
      <h2
        className="text-4xl md:text-6xl font-black uppercase tracking-tight"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
      >
        {title}
      </h2>
    </div>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="border-[3px] border-black bg-[#F5F0E8] shadow-[5px_5px_0px_#000] p-5 md:p-6">
      <div
        className="text-3xl md:text-4xl font-black mb-1"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
      >
        {value}
      </div>
      <div
        className="text-xs md:text-sm uppercase tracking-wider font-bold text-black/70"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </div>
    </div>
  );
}

function ProjectCard({ title, tags, description, github, rotate, accent }) {
  const [ref, visible] = useRevealOnScroll();
  const accentColor = accent === "yellow" ? "#FFE500" : accent === "pink" ? "#FF3EA5" : "#C6FF00";
  return (
    <div
      ref={ref}
      className="border-[3px] border-black bg-[#F5F0E8] shadow-[7px_7px_0px_#000] p-6 md:p-7 transition-all duration-700 ease-out"
      style={{
        transform: visible
          ? `rotate(${rotate}deg) translateY(0)`
          : `rotate(${rotate}deg) translateY(24px)`,
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="w-full h-32 md:h-36 mb-5 border-[3px] border-black flex items-center justify-center"
        style={{
          backgroundColor: accentColor,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0, rgba(0,0,0,0.08) 2px, transparent 2px, transparent 12px)",
        }}
      >
        <span
          className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/60"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          [ preview ]
        </span>
      </div>
      <h3
        className="text-2xl md:text-3xl font-black mb-3 uppercase"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <p
        className="text-sm md:text-base leading-relaxed mb-5"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {description}
      </p>
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 font-bold uppercase text-sm border-b-[3px] border-black hover:bg-[#FFE500] transition-colors"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        View code <ArrowUpRight size={16} strokeWidth={3} />
      </a>
    </div>
  );
}

function TimelineItem({ title, org, period, description }) {
  return (
    <div className="relative pl-8 md:pl-10 pb-2">
      <div className="absolute left-[-9px] top-1 w-4 h-4 bg-[#FF3EA5] border-[3px] border-black" />
      <div
        className="text-xs md:text-sm font-bold uppercase tracking-wide mb-1 text-black/60"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {period}
      </div>
      <h3
        className="text-xl md:text-2xl font-black uppercase"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
      >
        {title}
      </h3>
      <div
        className="text-sm md:text-base font-bold mb-2"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {org}
      </div>
      <p
        className="text-sm md:text-base leading-relaxed max-w-2xl"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dotGrid = {
    backgroundImage: "radial-gradient(#00000022 1.5px, transparent 1.5px)",
    backgroundSize: "22px 22px",
  };

  const skillGroups = [
    { label: "Languages", accent: "yellow", items: ["Python", "C", "C++", "SQL", "HTML"] },
    { label: "Mobile", accent: "pink", items: ["Android SDK", "Jetpack Compose", "Material Design 3", "Android Studio"] },
    { label: "IoT & Embedded", accent: "lime", items: ["ESP32", "ESP8266", "Arduino IDE", "PlatformIO"] },
    { label: "Tools", accent: "yellow", items: ["Git", "GitHub", "MATLAB", "OpenCV", "VS Code"] },
  ];

  const certifications = [
    "NPTEL — OOP in C++ (IIT)",
    "Web Dev Workshop — IIT Bombay Techfest",
    "MATLAB Certified — Signal Processing",
    "Blockchain Workshop — NIT Raipur",
    "5G Summer School — VNIT Nagpur",
  ];

  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: "#F5F0E8", fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <style>{FONTS}</style>

      {/* NAV */}
      <nav
        className={`sticky top-0 z-50 border-b-[3px] border-black flex items-center justify-between px-5 md:px-10 py-4 transition-colors ${
          scrolled ? "bg-[#F5F0E8]" : "bg-[#F5F0E8]"
        }`}
      >
        <a
          href="#top"
          className="font-black text-lg md:text-xl uppercase tracking-tight"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          SSK<span style={{ color: "#FF3EA5" }}>_</span>
        </a>
        <div
          className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-wide"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <a href="#about" className="hover:bg-[#FFE500] px-1">About</a>
          <a href="#projects" className="hover:bg-[#FFE500] px-1">Projects</a>
          <a href="#skills" className="hover:bg-[#FFE500] px-1">Skills</a>
          <a href="#experience" className="hover:bg-[#FFE500] px-1">Experience</a>
          <a href="#contact" className="hover:bg-[#FFE500] px-1">Contact</a>
        </div>
        <a
          href="#contact"
          className="text-xs md:text-sm font-bold uppercase px-3 py-2 border-[3px] border-black bg-[#C6FF00] shadow-[3px_3px_0px_#000]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Say hi
        </a>
      </nav>

      {/* HERO */}
      <header
        id="top"
        className="relative border-b-[3px] border-black px-5 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden"
        style={dotGrid}
      >
        <div className="max-w-5xl mx-auto relative">
          {/* signature stamp */}
          <div
            className="absolute -right-2 top-0 md:right-6 md:top-2 w-28 h-28 md:w-36 md:h-36 rounded-full border-[4px] border-black flex items-center justify-center text-center rotate-[-9deg] shadow-[5px_5px_0px_#000] bg-[#FF3EA5] z-10"
          >
            <span
              className="text-[10px] md:text-xs font-bold uppercase leading-tight tracking-widest px-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              status: shipped &amp; running
            </span>
          </div>

          <div
            className="inline-block mb-6 px-3 py-1 border-[3px] border-black bg-[#FFE500] text-xs md:text-sm font-bold uppercase tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            B.Tech ECE · Class of 2027
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.95] mb-6 max-w-4xl"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            Sumedh S<br />Khobragade
          </h1>

          <p
            className="text-lg md:text-2xl font-bold mb-3 max-w-2xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Electronics &amp; Telecommunication Engineer <span className="text-[#FF3EA5]">/</span> Android &amp; IoT Developer
          </p>
          <p
            className="text-sm md:text-base font-medium mb-10 max-w-2xl text-black/70"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            B.Tech ECE @ YCCE Nagpur · CGPA 8.69/10 · Building real things with Kotlin, C++, and sensors
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <BrutalButton href="#projects" primary icon={ArrowDown}>
              View Projects
            </BrutalButton>
            <BrutalButton href="/resume.pdf" icon={Download}>
              Download Resume
            </BrutalButton>
            <div className="flex gap-3 ml-1">
              <IconButton href="https://github.com/Logic-Voyage" icon={Github} label="GitHub" />
              <IconButton href="https://linkedin.com/in/sumedh-khobragade" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="border-b-[3px] border-black px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeading index="01" title="About" />
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <p
              className="md:col-span-3 text-lg md:text-xl leading-relaxed font-medium"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              I'm an ECE undergraduate at YCCE Nagpur (2023–2027) with hands-on experience across
              Android development, IoT/embedded systems, and data analytics. I like taking a project
              from a rough idea to something that actually runs on a device — whether that's a
              Kotlin app on a phone, an ESP32 reading sensor data, or a model classifying faces
              in real time. I design and ship production-quality applications independently,
              start to finish.
            </p>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
              <StatBox value="8.69" label="CGPA / 10" />
              <StatBox value="3+" label="Shipped Projects" />
              <StatBox value="VNIT" label="5G Summer School" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b-[3px] border-black px-5 md:px-10 py-16 md:py-24" style={dotGrid}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading index="02" title="Projects" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="md:col-span-2">
              <ProjectCard
                title="AuraStand"
                tags={["Kotlin", "Jetpack Compose", "Android"]}
                accent="yellow"
                rotate={-1.5}
                description="An Android standby dashboard app that turns an old phone into a bedside display. Multiple clock styles, true AMOLED dark mode, custom backgrounds, immersive fullscreen, and a responsive landscape UI. Modular widgets cover a photo slideshow, calendar, battery status, and rotating quotes, all backed by persistent settings. Resolved complex orientation and split-screen bugs at the manifest level."
                github="https://github.com/Logic-Voyage"
              />
            </div>
            <ProjectCard
              title="Smart Water Quality & Overflow Detection"
              tags={["ESP32", "C++", "IoT"]}
              accent="lime"
              rotate={1.5}
              description="Real-time water quality and overflow monitoring using TDS, ultrasonic, and temperature sensors. Wireless data transmission feeds a remote dashboard for live readings. Presented as the capstone project at VNIT Nagpur's 5G Summer School."
              github="https://github.com/Logic-Voyage"
            />
            <ProjectCard
              title="Emotion Detection System"
              tags={["Python", "OpenCV", "ML"]}
              accent="pink"
              rotate={-1}
              description="Real-time facial emotion recognition built on image preprocessing and feature extraction, with model evaluation across multiple emotion classes to validate accuracy and robustness."
              github="https://github.com/Logic-Voyage"
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-b-[3px] border-black px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeading index="03" title="Skills" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {skillGroups.map((group) => (
              <div key={group.label} className="border-[3px] border-black bg-[#F5F0E8] shadow-[6px_6px_0px_#000] p-6">
                <h3
                  className="text-lg md:text-xl font-black uppercase mb-4 tracking-wide"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item} accent={group.accent}>
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-b-[3px] border-black px-5 md:px-10 py-16 md:py-24" style={dotGrid}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading index="04" title="Experience" />
          <div className="border-l-[3px] border-black ml-2 pl-0 space-y-10">
            <TimelineItem
              period="Summer 2026"
              title="Summer School Intern, 5G & IoT Research"
              org="VNIT Nagpur"
              description="One-month intensive program covering 5G communication, radio access networks, and spectrum management. Built and demoed the Smart Water Quality IoT system as the program's capstone project."
            />
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-b-[3px] border-black px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeading index="05" title="Certifications" />
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="px-4 py-3 border-[3px] border-black bg-[#F5F0E8] shadow-[4px_4px_0px_#000] text-sm md:text-base font-bold"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="px-5 md:px-10 py-16 md:py-24" style={dotGrid}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-7xl font-black uppercase leading-[0.95] mb-8"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            Let's build<br />something.
          </h2>
          <div className="flex flex-wrap gap-4 mb-12">
            <BrutalButton href="mailto:sumedh.khobragade@example.com" primary icon={Mail}>
              Email Me
            </BrutalButton>
            <BrutalButton href="https://github.com/Logic-Voyage" icon={Github}>
              GitHub
            </BrutalButton>
            <BrutalButton href="https://linkedin.com/in/sumedh-khobragade" icon={Linkedin}>
              LinkedIn
            </BrutalButton>
          </div>
          <div
            className="border-t-[3px] border-black pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs md:text-sm font-bold uppercase tracking-wide text-black/60"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span>© 2026 Sumedh S Khobragade</span>
            <span>Built with React &amp; Tailwind — no gradients, no soft corners</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
