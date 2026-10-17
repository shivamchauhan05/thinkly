"use client";
import { useState } from 'react'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { useApplyModal } from '@/components/ApplyModal'
import {
  Megaphone,
  Palette,
  Code2,
  PenTool,
  Camera,
  Smartphone,
  Clock,
  Wifi,
  Building2,
  ArrowRight,
  Globe,
  GraduationCap,
  Users,
  Award,
  CheckCircle2,
  ChevronDown,
  Mail,
} from 'lucide-react'

const SITE_DOMAIN = 'thinklyedu.com'
const SITE_URL = 'https://thinklyedu.com'
const SUPPORT_EMAIL = 'supportthinkly.co@gmail.com'

const internships = [
  {
    title: 'Marketing Internship',
    type: 'Remote',
    duration: '1–6 months',
    description: 'Learn digital marketing, SEO, campaigns, and brand growth through live projects.',
    highlights: ['SEO', 'Campaigns', 'Analytics'],
    icon: Megaphone,
  },
  {
    title: 'Design Internship',
    type: 'Remote',
    duration: '1–6 months',
    description: 'Create user-friendly interfaces and polished product experiences.',
    highlights: ['Figma', 'Wireframes', 'Design Systems'],
    icon: Palette,
  },
  {
    title: 'Technology Internship',
    type: 'Remote',
    duration: '1–6 months',
    description: 'Build modern web apps with React, Next.js, and real-world APIs.',
    highlights: ['React', 'Next.js', 'API Integration'],
    icon: Code2,
  },
  {
    title: 'Content Writing Internship',
    type: 'Remote',
    duration: '1–6 months',
    description: 'Write blogs, web copy, and social content that is clear, engaging, and SEO-friendly.',
    highlights: ['Blogs', 'Copywriting', 'SEO Writing'],
    icon: PenTool,
  },
  {
    title: 'Photography & Video Internship',
    type: 'Hybrid',
    duration: '1–6 months',
    description: 'Shoot, edit, and publish photos and videos for real brands and campaigns.',
    highlights: ['Shooting', 'Editing', 'Reels'],
    icon: Camera,
  },
  {
    title: 'Social Media Internship',
    type: 'Remote',
    duration: '1–6 months',
    description: 'Plan content calendars, grow communities, and track engagement across platforms.',
    highlights: ['Content Plans', 'Community', 'Engagement'],
    icon: Smartphone,
  },
]

const STATS = [
  { icon: Users, label: 'Learners', value: '1000+' },
  { icon: Clock, label: 'Duration', value: '1–6 months' },
  { icon: Globe, label: 'Mode', value: 'Remote ready' },
  { icon: Award, label: 'Certificate', value: 'Verified' },
]

const STEPS = [
  { title: 'Apply online', desc: 'Pick your internship track and fill the short application form. It is free to apply.' },
  { title: 'Get matched', desc: 'We match you with a mentor and a project rhythm that fits your availability.' },
  { title: 'Work on real projects', desc: 'Complete guided tasks, get feedback, and build work you can show to employers.' },
  { title: 'Earn your certificate', desc: 'Finish the program to receive a verified certificate you can share on LinkedIn.' },
]

const BENEFITS = [
  'Mentor-led, project-based learning',
  'Flexible 1 to 6 month tracks',
  'Verified completion certificate',
  'Portfolio-ready project work',
  'Remote',
  'Beginner friendly, no experience needed',
]

const FAQS = [
  { q: 'Do I need prior experience to apply?', a: 'No. Every track starts from the basics and builds up with guided projects and mentor feedback.' },
  { q: 'Is the internship really free to apply?', a: 'Yes, applying is free. Submit the form and our team will get back to you with the next steps.' },
  { q: 'How long is the internship?', a: 'You can choose a track between 1 and 6 months depending on your availability and goals.' },
  { q: 'Will I get a certificate?', a: 'Yes. You receive a verified certificate on successful completion that you can add to LinkedIn and your resume.' },
  { q: 'Can I work remotely?', a: 'Yes. Most tracks are fully remote, and some may have a hybrid option.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '18px 0',
          fontFamily: 'inherit',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: '#F1F5F9', paddingRight: 20 }}>{q}</span>
        <ChevronDown
          size={18}
          color="#4ADE80"
          style={{
            flexShrink: 0,
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'none',
          }}
        />
      </button>
      {open && (
        <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.75, paddingBottom: 18, margin: 0, paddingRight: 32 }}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function InternshipsPage() {
  const { open: openApplyModal } = useApplyModal()

  return (
    <PageLayout
      title="Internships"
      subtitle="Choose a practical internship path and grow with guided projects, mentorship, and real exposure."
      badge="Career-ready experience"
      actions={[
        <Link
          key="home"
          href="/"
          className="rounded-lg px-4 py-2 text-sm font-semibold transition-all"
          style={{ border: '1.5px solid rgba(255,255,255,0.16)', color: '#E2E8F0' }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#22C55E'
            e.currentTarget.style.color = '#4ADE80'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'
            e.currentTarget.style.color = '#E2E8F0'
          }}
        >
          Back to Home
        </Link>,
        <Link
          key="projects"
          href="/projects"
          className="rounded-lg px-4 py-2 text-sm font-semibold transition-all"
          style={{ background: '#22C55E', color: '#08150C' }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#16a34a')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#22C55E')}
        >
          Explore Projects
        </Link>,
      ]}
    >
      {/* Stats */}
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-3 rounded-2xl p-4"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1.5px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.25)',
              }}
            >
              <s.icon size={18} color="#4ADE80" strokeWidth={1.8} />
            </div>
            <div>
              <div
                className="text-xs font-bold uppercase tracking-wide"
                style={{ color: '#22C55E' }}
              >
                {s.label}
              </div>
              <div className="text-sm font-bold" style={{ color: '#F1F5F9' }}>
                {s.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Internship cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {internships.map((item) => {
          const TypeIcon = item.type === 'Remote' ? Wifi : Building2
          return (
            <div
              key={item.title}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1.5px solid rgba(255,255,255,0.08)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'
                e.currentTarget.style.background = 'rgba(34,197,94,0.05)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.25)',
                  }}
                >
                  <item.icon size={20} color="#4ADE80" strokeWidth={1.8} />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{
                    color: '#4ADE80',
                    border: '1px solid rgba(34,197,94,0.3)',
                    background: 'rgba(34,197,94,0.08)',
                  }}
                >
                  <TypeIcon size={12} />
                  {item.type}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold" style={{ color: '#F8FAFC' }}>
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6" style={{ color: '#94A3B8' }}>
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      color: '#CBD5E1',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <div
                className="mt-6 flex items-center justify-between text-sm"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: 16,
                }}
              >
                <span
                  className="inline-flex items-center gap-1.5"
                  style={{ color: '#94A3B8' }}
                >
                  <Clock size={14} color="#4ADE80" />
                  {item.duration}
                </span>
                <button
                  type="button"
                  onClick={() => openApplyModal()}
                  className="inline-flex items-center gap-1 font-semibold transition-all"
                  style={{
                    color: '#22C55E',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#4ADE80')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#22C55E')}
                >
                  Apply now <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* How it works */}
      <section className="mt-16">
        <div className="mb-8 text-center">
          <span
            style={{
              color: '#22C55E',
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              letterSpacing: '0.05em',
            }}
          >
            <span style={{ opacity: 0.6 }}>//</span> how_it_works
          </span>
          <h2 className="mt-3 text-2xl font-extrabold md:text-3xl" style={{ color: '#F8FAFC' }}>
            From application to certificate in 4 steps.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1.5px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="mb-3 text-sm font-bold"
                style={{
                  color: '#22C55E',
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                }}
              >
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#F1F5F9' }}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6" style={{ color: '#94A3B8' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-16">
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: 'rgba(34,197,94,0.04)',
            border: '1.5px solid rgba(34,197,94,0.2)',
          }}
        >
          <div className="mb-5 flex items-center gap-3">
            <GraduationCap size={26} color="#4ADE80" strokeWidth={1.8} />
            <h2 className="text-xl font-bold md:text-2xl" style={{ color: '#F8FAFC' }}>
              Why intern with Thinklyedu?
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm" style={{ color: '#CBD5E1' }}>
                <CheckCircle2 size={16} color="#22C55E" style={{ flexShrink: 0 }} />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-16 max-w-2xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: '#F8FAFC' }}>
            Frequently asked questions
          </h2>
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1.5px solid rgba(255,255,255,0.08)',
            borderRadius: 20,
            padding: '0 24px',
          }}
        >
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* CTA + domain */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: '#F8FAFC' }}>
          Ready to start your internship?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6" style={{ color: '#94A3B8' }}>
          Free to apply. Pick your track, get a mentor, and build real work with {SITE_DOMAIN}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => openApplyModal()}
            className="rounded-full px-8 py-3 text-sm font-bold transition-all"
            style={{
              background: '#22C55E',
              color: '#08150C',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 28px rgba(34,197,94,0.28)',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#16a34a')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#22C55E')}
          >
            Apply Now →
          </button>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-all"
            style={{ border: '1.5px solid rgba(255,255,255,0.16)', color: '#E2E8F0' }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#22C55E'
              e.currentTarget.style.color = '#4ADE80'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'
              e.currentTarget.style.color = '#E2E8F0'
            }}
          >
            <Mail size={16} /> Contact Support
          </a>
        </div>
        <p className="mt-6 text-xs" style={{ color: '#64748B' }}>
          Official website:{' '}
          <a
            href={SITE_URL}
            style={{ color: '#4ADE80', textDecoration: 'none' }}
          >
            {SITE_DOMAIN}
          </a>
        </p>
      </section>
    </PageLayout>
  )
}
