"use client";
import React, { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Fullscreen } from "lucide-react";
import {
  FaCamera,
  FaCertificate,
  FaClock,
  FaFileAlt,
  FaGlobe,
  FaHeadphones,
  FaHelicopter,
  FaLightbulb,
  FaVideo,
} from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

export default function PhotographyVideoPage() {
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0%";
    el.style.transition = "width 1.1s cubic-bezier(0.4,0,0.2,1) 0.5s";
    setTimeout(() => {
      el.style.width = "100%";
    }, 50);
  }, []);
  return (
    <main
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        color: "#0D1F3C",
        background: "white",
        paddingTop: 68,
      }}
    >
      <section
        style={{
          padding: "clamp(56px,8vw,88px) clamp(20px,6vw,80px) 56px",
          background:
            "linear-gradient(160deg, #ffffff 0%, #f5fbf8 55%, #ffffff 100%)",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", flex: "1 1 340px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#22C55E",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              border: "1px solid rgba(34,197,94,0.3)",
              borderRadius: 999,
              padding: "6px 16px",
              background: "rgba(34,197,94,0.06)",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22C55E",
                display: "inline-block",
              }}
            />
            1–6 month internship track
          </span>

          <h1
            style={{
              fontSize: "clamp(38px,5vw,62px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#0D1F3C",
              margin: "0 0 18px",
            }}
          >
            Photography &
            <span style={{ display: "block", color: "#22C55E" }}>
              Video Internship
            </span>
            <span
              ref={lineRef}
              style={{
                display: "block",
                height: 3,
                background: "rgba(34,197,94,0.25)",
                borderRadius: 4,
                marginTop: 6,
                width: "0%",
              }}
            />
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "#64748B",
              lineHeight: 1.75,
              maxWidth: 560,
              margin: "0 0 32px",
            }}
          >
            Start your dynamic creative career with a 1-6 month immersive
            internship. Learn composition, pro editing, and cinematic
            storytelling-build a professional portfolio and graduate with a
            verified certificate.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-start">
            <div className="flex gap-3 justify-center items-center">
              <MdOutlineWatchLater size={18} className="font-extrabold" />
              <div>
                <p className="text-green-600 font-bold text-[14px]">
                  Flexible Duration
                </p>
                <p className="font-extrabold text-[13px]">1-6 months</p>
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <FaGlobe size={18} className="text-sky-500" />
              <div>
                <p className="text-green-600 font-bold text-[14px]">
                  REMOTE READY
                </p>
                <p className="font-extrabold text-[13px]">Work from anywhere</p>
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <FaFileAlt size={18} className="text-blue-800" />
              <div>
                <p className="text-green-600 font-bold text-[14px]">
                  PROJECT-BASED
                </p>
                <p className="font-extrabold text-[13px]">
                  Client-standard shoots
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <FaCertificate size={18} className="text-purple-600"  />
              <div>
                <p className="text-green-600 font-bold text-[14px]">
                  VERIFIED CERTIFICATE
                </p>
                <p className="font-extrabold text-[13px]">
                  Shareable on LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
          <div className="rounded-2xl">
            <Image
              src="/photography/camera setup.jpeg"
              alt="camera"
              width={600}
              height={1000}
              className="rounded-4xl w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-4">
            <div className="pl-4 py-2 shadow-xl rounded-2xl bg-white">
              <Image
                src="/photography/camera.jpeg"
                alt="camera1"
                width={80}
                height={80}
              />
              <div>
                <h2 className="font-extrabold">Photography Fund:...</h2>
                <p className="text-[12px] font-bold text-gray-600">
                  Cempositien, lighting, <br /> Pertraiture, Product Shoots.
                </p>
              </div>
            </div>
            <div className="pl-4 py-2 shadow-xl rounded-2xl bg-white">
              <Image
                src="/photography/video-production.jpg"
                alt="camera1"
                width={80}
                height={80}
              />
              <div>
                <h2 className="font-extrabold">Video Production</h2>
                <p className="text-[12px] font-bold text-gray-600">
                  Scripting, Directing, Camera
                  <br /> Operation,Audio Recording.
                </p>
              </div>
            </div>
            <div className="pl-4 py-2 shadow-xl rounded-2xl bg-white">
              <Image
                src="/photography/videography.jpg"
                alt="camera1"
                width={80}
                height={80}
              />
              <div>
                <h2 className="font-extrabold">Aerial Videography</h2>
                <p className="text-[12px] font-bold text-gray-600">
                  UAV Operations, Sefty
                  <br /> Cinematic Overview, Servey...
                </p>
              </div>
            </div>
            <div className="pl-4 py-2 shadow-xl rounded-2xl bg-white">
              <Image
                src="/photography/WhatsApp Image 2026-08-30 at 10.43.06 PM (1).jpeg"
                alt="camera1"
                width={80}
                height={80}
              />
              <div>
                <h2 className="font-extrabold">Editing & Post-Prod...</h2>
                <p className="text-[12px] font-bold text-gray-600">
                  Color Grading, Sequance, <br /> Visual Effects,
                  DaVincl(premi...
                </p>
              </div>
            </div>
            <div className="pl-4 py-2 shadow-xl rounded-2xl bg-white">
              <Image
                src="/photography/WhatsApp Image 2026-08-30 at 10.43.06 PM.jpeg"
                alt="camera1"
                width={80}
                height={80}
              />
              <div>
                <h2 className="font-extrabold">Sound Design & Sco...</h2>
                <p className="text-[12px] font-bold text-gray-600">
                  Field Recording, Dialogus, <br /> Foley, Soundtrack Selection.
                </p>
              </div>
            </div>
            <div className="pl-4 py-2 shadow-xl rounded-2xl bg-white">
              <Image
                src="/photography/WhatsApp Image 2026-08-30 at 10.43.05 PM.jpeg"
                alt="camera1"
                width={80}
                height={80}
              />
              <div>
                <h2 className="font-extrabold">Creative Direction</h2>
                <p className="text-[12px] font-bold text-gray-600">
                  Concept to execution, Brand <br /> Storytelling, Client Brief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="flex justify-center my-14 text-3xl sm:text-5xl gap-4 font-extrabold text-black flex-wrap px-4 text-center">
        Your <span className="text-green-600 whitespace-nowrap">1-6 Month</span>{" "}
        Journey
      </h2>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 24px 88px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            marginBottom: 64,
          }}
        >
          {[
            "Camera Basics",
            "Composition & Framing",
            "Lighting",
            "Portraiture",
            "Product Photography",
            "White-Balance & Exposure",
            "Scripting",
            "Storyboarding",
            "Direction",
            "Camera Operation",
            "Audio Recording",
            "Drone / UAV Operation",
            "Adobe Photoshop",
            "Adobe Lightroom",
            "Premiere Pro",
            "DaVinci Resolve",
            "Color Grading",
            "Sound Design",
            "Foley",
            "Motion / VFX",
            "Client Briefing",
            "Brand Storytelling",
            "Portfolio Building",
          ].map((tool) => (
            <span
              key={tool}
              style={{
                fontSize: 13.5,
                fontWeight: 600,
                color: "#0D1F3C",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: 999,
                padding: "9px 18px",
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#22C55E";
                e.currentTarget.style.background = "rgba(34,197,94,0.06)";
                e.currentTarget.style.color = "#16803C";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.background = "#F8FAFC";
                e.currentTarget.style.color = "#0D1F3C";
              }}
            >
              {tool}
            </span>
          ))}
        </div>

        <div style={{ display: "grid", gap: 24 }}>
          {[
            {
              month: "Month 1",
              title: "Camera & Composition Foundations",
              desc: "Master exposure, white balance, framing, and composition rules. Practice with real gear or your phone and build your first shot series.",
              color: "#22C55E",
            },
            {
              month: "Month 2",
              title: "Lighting & Art Direction",
              desc: "Learn natural and artificial lighting setups, portrait and product staging, and how to direct a subject for clean, market-ready shots.",
              color: "#3B82F6",
            },
            {
              month: "Month 3",
              title: "Storytelling, Scripting & Direction",
              desc: "Write scripts and storyboards, plan shots, and direct short sequences — turning an idea into a clear, shootable production plan.",
              color: "#F59E0B",
            },
            {
              month: "Month 4",
              title: "Video Production & Camera Operation",
              desc: "Operate cameras, capture stable footage and clean audio, and explore aerial/drone videography for cinematic overview shots.",
              color: "#EF4444",
            },
            {
              month: "Month 5",
              title: "Editing & Post-Production",
              desc: "Cut sequences in Premiere Pro and DaVinci Resolve — color grade, add sound design and effects, and deliver polished final exports.",
              color: "#8B5CF6",
            },
            {
              month: "Month 6",
              title: "Client Briefs & Portfolio",
              desc: "Work on a real client-standard project from brief to delivery and package your best work into an interview-ready portfolio.",
              color: "#0D1F3C",
            },
          ].map((item, index) => (
            <div
              key={item.month}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: 20,
                alignItems: "start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: item.color,
                    marginTop: 4,
                  }}
                />
                {index < 5 && (
                  <div
                    style={{
                      flex: 1,
                      width: 2,
                      background: "#E2E8F0",
                      marginTop: 8,
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  padding: 26,
                  background: "white",
                  borderRadius: 20,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 8px 28px rgba(15,23,42,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: item.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 10,
                  }}
                >
                  {item.month}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0D1F3C",
                    margin: "0 0 10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#64748B",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#F8FAFC", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              color: "#22C55E",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            What you'll master
          </span>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,40px)",
              fontWeight: 900,
              color: "#0D1F3C",
              margin: "12px auto 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Skills that make your visuals stand out.
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: 16,
              maxWidth: 560,
              margin: "0 auto 48px",
              lineHeight: 1.75,
            }}
          >
            From the moment you pick up a camera to the final export, every
            module builds skills real studios and brands hire for.
          </p>
          <div
            className="rx-stack grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 20 }}
          >
            {[
              {
                icon: FaCamera,
                title: "Photography",
                desc: "Composition, lighting, exposure, portraiture, product and event shoots.",
              },
              {
                icon: FaVideo,
                title: "Video Production",
                desc: "Scripting, storyboarding, direction, camera operation and audio recording.",
              },
              {
                icon: FaScissors,
                title: "Editing & Post",
                desc: "Sequencing, color grading, sound design, motion and visual effects.",
              },
              {
                icon: FaHelicopter,
                title: "Aerial Videography",
                desc: "Drone operation, safe flight planning and cinematic aerial overviews.",
              },
              {
                icon: FaHeadphones,
                title: "Sound Design",
                desc: "Field recording, dialogue, foley work and soundtrack selection.",
              },
              {
                icon: FaLightbulb,
                title: "Creative Direction",
                desc: "Concept to execution, brand storytelling and client brief management.",
              },
            ].map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  style={{
                    background: "white",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: 20,
                    padding: 26,
                    textAlign: "left",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(15,23,42,0.08)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* ICON */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "rgba(34,197,94,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={26} color="#22C55E" />
                  </div>

                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#0D1F3C",
                      marginBottom: 10,
                    }}
                  >
                    {skill.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 14,
                      color: "#64748B",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {skill.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              color: "#22C55E",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Alumni
          </span>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,40px)",
              fontWeight: 900,
              color: "#0D1F3C",
              margin: "12px auto 48px",
              letterSpacing: "-0.02em",
            }}
          >
            Creators who turned passion into a career.
          </h2>
          <div
            className="rx-stack grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 20 }}
          >
            {[
              {
                name: "Aditya Verma",
                role: "Photography Intern → Commercial Photographer",
                quote:
                  "I built a full portfolio of real shoots and landed clients within months of finishing. The mentorship was gold.",
              },
              {
                name: "Neha Gupta",
                role: "Video Intern → Content Creator",
                quote:
                  "Direction, editing, sound — I learned the whole pipeline and now produce brand videos full-time.",
              },
              {
                name: "Karan Singh",
                role: "Drone Intern → Aerial Videographer",
                quote:
                  "The hands-on drone and cinematography work felt like a real production studio, not a course.",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#F8FAFC",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 20,
                  padding: 28,
                  textAlign: "left",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(15,23,42,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    color: "#475569",
                    lineHeight: 1.75,
                    margin: "0 0 24px",
                  }}
                >
                  “{item.quote}”
                </p>
                <div>
                  <div
                    style={{ fontSize: 15, fontWeight: 700, color: "#0D1F3C" }}
                  >
                    {item.name}
                  </div>
                  <div style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              color: "#22C55E",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            FAQ
          </span>
          <h2
            style={{
              fontSize: "clamp(26px,4vw,38px)",
              fontWeight: 900,
              color: "#0D1F3C",
              margin: "12px auto 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Common questions about the Photography & Video internship.
          </h2>
          <div
            style={{
              background: "white",
              border: "1.5px solid #E2E8F0",
              borderRadius: 20,
              padding: "0 24px",
              textAlign: "left",
            }}
          >
            {[
              {
                q: "Do I need my own camera to join?",
                a: "No. You can start with your phone and a free editing suite. We'll guide you through setups that work for your gear and budget.",
              },
              {
                q: "I'm a total beginner — can I still apply?",
                a: "Yes. The internship starts from camera and composition fundamentals and builds up to professional shoots and post-production.",
              },
              {
                q: "What editing tools will I learn?",
                a: "You'll work with Adobe Lightroom, Adobe Photoshop, Premiere Pro, and DaVinci Resolve for color grading and editing.",
              },
              {
                q: "Will I get real projects?",
                a: "Yes. You complete client-standard shoots from brief to delivery, building a portfolio you can share with employers.",
              },
              {
                q: "Do I get a certificate?",
                a: "Yes. You receive a verified Photography & Video internship certificate plus a portfolio-ready body of work.",
              },
            ].map(({ q, a }) => {
              const [open, setOpen] = React.useState(false);
              return (
                <div key={q} style={{ borderBottom: "1px solid #E2E8F0" }}>
                  <button
                    onClick={() => setOpen(!open)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "18px 0",
                      fontFamily: "inherit",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#0D1F3C",
                        paddingRight: 20,
                      }}
                    >
                      {q}
                    </span>
                    <svg
                      style={{
                        width: 18,
                        height: 18,
                        color: "#22C55E",
                        flexShrink: 0,
                        transition: "transform 0.2s",
                        transform: open ? "rotate(45deg)" : "none",
                      }}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {open && (
                    <p
                      style={{
                        fontSize: 14,
                        color: "#64748B",
                        lineHeight: 1.75,
                        paddingBottom: 18,
                        margin: 0,
                        paddingRight: 32,
                      }}
                    >
                      {a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "48px 24px 8px",
          background: "#F8FAFC",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#94A3B8",
              marginBottom: 10,
            }}
          >
            Related searches
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#94A3B8",
              lineHeight: 2,
              margin: 0,
            }}
          >
            Photography Internship &middot; Video Editing Internship &middot;
            Videography Internship &middot; Cinematography Internship &middot;
            Drone Videography Internship &middot; Photography Internship with
            Certificate &middot; Video Production Internship India &middot;
            Remote Photography Internship &middot; Content Creation Internship
            &middot; Adobe Premiere Pro Internship &middot; Photography
            Internship for Students &middot; Work From Home Photography
            Internship &middot; Internship with Job Offer &middot; Best
            Internship for Media Students
          </p>
        </div>
      </section>

      <section
        style={{
          background: "#0D1F3C",
          padding: "88px 24px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 46, marginBottom: 20 }}>📸</div>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 900,
              lineHeight: 1.1,
              margin: "0 0 18px",
              letterSpacing: "-0.02em",
            }}
          >
            Launch your Photography & Video internship in 1–6 months.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.76)",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            Free to apply, crafted for real learning, and built to help you
            build a portfolio and secure your first creative role.
          </p>
          <a
            href="mailto:supportthinkly.co@gmail.com"
            style={{
              display: "inline-block",
              background: "#22C55E",
              color: "white",
              fontWeight: 700,
              fontSize: 16,
              padding: "16px 44px",
              borderRadius: 999,
              textDecoration: "none",
              boxShadow: "0 12px 40px rgba(34,197,94,0.25)",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Apply for Photography & Video Internship →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
