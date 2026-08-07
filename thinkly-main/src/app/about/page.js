"use client";
import { useEffect, useRef, useState } from "react";
import Footer from '@/components/Footer'
import { useApplyModal } from '@/components/ApplyModal'

// ── Icons (inline SVG, no external deps) ──────────────────────────────────────
const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 2a14.98 14.98 0 0 0-6.16 12.12A14.98 14.98 0 0 0 8.32 19.19v-4.82m7.27 0-7.27 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0" stroke="#22C55E" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

// ── Animated counter ───────────────────────────────────────────────────────────
function Counter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(ease * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const { open: openApplyModal } = useApplyModal()
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0%";
    el.style.transition = "width 1s cubic-bezier(0.4,0,0.2,1) 0.4s";
    setTimeout(() => { el.style.width = "100%"; }, 100);
  }, []);

  return (
        <>
         {/* <Hero /> */}
    <main className="font-sans bg-white text-[#0D1F3C] antialiased">


      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block text-[#22C55E] text-xs font-bold uppercase tracking-widest mb-6 border border-[#22C55E]/30 rounded-full px-4 py-1.5 bg-[#22C55E]/5">
            About Thinklyedu
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Where Students Get
            <span className="block text-[#22C55E] relative">
              Real Experience.
              <span ref={lineRef} className="absolute bottom-1 left-0 h-[3px] bg-[#22C55E]/30 rounded-full" style={{ width: "0%" }} />
            </span>
          </h1>
          <p className="text-lg text-[#64748B] leading-relaxed max-w-xl mt-6 mb-10">
            Thinklyedu bridges the gap between classroom learning and career readiness — connecting ambitious students with internship opportunities that actually matter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#"
              className="bg-[#0D1F3C] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#1E3A5F] transition-colors"
              onClick={(e) => { e.preventDefault(); openApplyModal() }}>
              Start Your Journey →
            </a>
            <a href="#mission"
              className="border border-[#0D1F3C]/20 text-[#0D1F3C] font-semibold px-8 py-3.5 rounded-full hover:border-[#22C55E] hover:text-[#22C55E] transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0D1F3C] py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 500, suffix: "+", label: "Students Placed" },
            { value: 120, suffix: "+", label: "Partner Companies" },
            { value: 95, suffix: "%", label: "Satisfaction Rate" },
            { value: 30, suffix: "+", label: "Cities Covered" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black text-[#22C55E] mb-1">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-white/60 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section id="mission" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-[#F0F4F8] flex items-center justify-center overflow-hidden">
              <div className="relative flex items-center justify-center w-48 h-48">
                {/* Orbiting dots */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div key={deg} className="absolute w-3 h-3 rounded-full bg-[#22C55E]"
                    style={{
                      transform: `rotate(${deg}deg) translateX(80px)`,
                      opacity: 0.4 + (deg / 300) * 0.6,
                    }} />
                ))}
                <div className="w-24 h-24 rounded-full bg-[#0D1F3C] flex items-center justify-center">
                  <span className="text-4xl font-black text-[#22C55E]">T</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#22C55E] text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg">
              🎯 Internships that count
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-[#22C55E] text-xs font-bold uppercase tracking-widest">Our Mission</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-6 leading-tight">
              Empowering Students
              <span className="text-[#22C55E]"> Through Action</span>
            </h2>
            <p className="text-[#64748B] leading-relaxed mb-6">
              We believe every student deserves a fair shot at real-world experience. Thinklyedu was built to eliminate the catch-22 of needing experience to get experience — by creating structured, mentored internship pathways with companies that are committed to student growth.
            </p>
            <ul className="space-y-3">
              {[
                "Structured learning programs with measurable outcomes",
                "Mentorship from industry professionals",
                "Certificate of completion for every intern",
                "Zero cost for students — always",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#1E3A5F] text-sm font-medium">
                  <IconCheck />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section id="vision" className="py-24 px-6 bg-[#F0F4F8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-[#22C55E] text-xs font-bold uppercase tracking-widest">Our Vision</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-6 leading-tight">
              India's Most Trusted
              <span className="text-[#22C55E]"> Internship Platform</span>
            </h2>
            <p className="text-[#64748B] leading-relaxed mb-6">
              We envision a future where no talented student is left behind due to lack of opportunity. By 2027, we aim to place 10,000+ students in meaningful internships across every major industry in India — building a generation of career-ready graduates.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: <IconRocket />, label: "Career Launch" },
                { icon: <IconUsers />, label: "Community" },
                { icon: <IconBriefcase />, label: "Industry Connect" },
                { icon: <IconStar />, label: "Excellence" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <span className="text-[#0D1F3C]">{item.icon}</span>
                  <span className="text-sm font-semibold text-[#1E3A5F]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-[#0D1F3C] p-8 flex flex-col justify-between">
              <div className="text-[#22C55E] font-black text-5xl">2027</div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-2">Goal</div>
                <div className="text-white font-bold text-2xl leading-snug">10,000+ Students Placed Across India</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[70, 85, 60, 90, 75, 95].map((h, i) => (
                  <div key={i} className="bg-white/10 rounded-lg overflow-hidden h-12 flex items-end">
                    <div className="bg-[#22C55E] w-full rounded-lg transition-all" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-xs font-bold uppercase tracking-widest">Why Thinklyedu</span>
            <h2 className="text-4xl font-extrabold mt-3 leading-tight">
              Built Different. <span className="text-[#22C55E]">For Students.</span>
            </h2>
            <p className="text-[#64748B] mt-4 max-w-xl mx-auto">
              We're not just another job board. Here's what makes Thinklyedu the right choice for your career journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <IconRocket />,
                title: "Real Projects, Real Impact",
                desc: "Forget coffee-fetching internships. Our partners assign students to live projects with measurable deliverables and genuine ownership.",
                highlight: "Live projects",
              },
              {
                icon: <IconUsers />,
                title: "Mentor-Driven Learning",
                desc: "Every intern is assigned a dedicated mentor from the host company who guides weekly, reviews work, and writes a professional recommendation.",
                highlight: "1-on-1 mentorship",
              },
              {
                icon: <IconStar />,
                title: "Verified Certifications",
                desc: "Our certificates are industry-recognized and skill-linked, so recruiters know exactly what you can do — not just where you interned.",
                highlight: "Skill-linked certs",
              },
              {
                icon: <IconBriefcase />,
                title: "All Domains Welcome",
                desc: "From Marketing and Design to Tech, Finance, and Operations — we have internship pathways across 15+ domains.",
                highlight: "15+ domains",
              },
              {
                icon: <IconStar />,
                title: "100% Free for Students",
                desc: "We will never charge a student. Ever. Our platform is fully funded by our partner companies, so you can focus on learning.",
                highlight: "Zero cost",
              },
              {
                icon: <IconUsers />,
                title: "Community & Network",
                desc: "Join a growing community of 500+ Thinklyedu alumni who help each other with referrals, advice, and opportunities.",
                highlight: "500+ alumni",
              },
            ].map((card) => (
              <div key={card.title}
                className="group bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:border-[#22C55E]/40 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0D1F3C]/5 flex items-center justify-center text-[#0D1F3C] mb-5 group-hover:bg-[#22C55E]/10 group-hover:text-[#22C55E] transition-colors">
                  {card.icon}
                </div>
                <span className="text-[#22C55E] text-xs font-bold uppercase tracking-wider">{card.highlight}</span>
                <h3 className="text-lg font-bold mt-2 mb-3 text-[#0D1F3C]">{card.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section id="apply" className="py-24 px-6 bg-[#0D1F3C]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[#22C55E] text-xs font-bold uppercase tracking-widest border border-[#22C55E]/30 rounded-full px-4 py-1.5 bg-[#22C55E]/10 mb-6">
            Ready to Begin?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Your career story
            <span className="text-[#22C55E] block">starts right here.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join thousands of students who took the leap. Apply for a Thinklyedu internship today — it's free, it's real, and it could change everything.
          </p>
          <a href="#"
            className="inline-block bg-[#22C55E] text-white font-black text-lg px-10 py-4 rounded-full hover:bg-[#16a34a] transition-colors shadow-xl shadow-[#22C55E]/20"
            onClick={(e) => { e.preventDefault(); openApplyModal() }}>
            Apply for Internship →
          </a>
          <p className="text-white/30 text-sm mt-6">
            Questions? Write to us at supportthinkly.co@gmail.com · +91 98185 09083
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
      {/* <footer className="bg-[#0a1628] py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#0D1F3C] border border-[#22C55E]/30 flex items-center justify-center">
              <span className="text-[#22C55E] font-black text-xs">T</span>
            </div>
            <span className="text-white/50 text-sm">© 2026 Thinklyedu. All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-white/30 text-sm">
            <a href="#" className="hover:text-[#22C55E] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#22C55E] transition-colors">Terms</a>
            <a href="mailto:supportthinkly.co@gmail.com" className="hover:text-[#22C55E] transition-colors">Contact</a>
          </div>
        </div>
      </footer> */}
    </main> </>
  );
}