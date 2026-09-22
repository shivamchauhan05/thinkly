"use client";
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { Code2, Palette, LineChart, Clock, Wifi, Building2, ArrowRight } from 'lucide-react'

const internships = [
  {
    title: 'Software Development Internship',
    type: 'Remote',
    duration: '4 weeks',
    description: 'Build modern web apps with React, Next.js, and real-world APIs.',
    highlights: ['React', 'Next.js', 'API Integration'],
    icon: Code2,
  },
  {
    title: 'UI/UX Design Internship',
    type: 'Hybrid',
    duration: '6 weeks',
    description: 'Create user-friendly interfaces and polished product experiences.',
    highlights: ['Figma', 'Wireframes', 'Design Systems'],
    icon: Palette,
  },
  {
    title: 'Data Science Internship',
    type: 'Remote',
    duration: '5 weeks',
    description: 'Work with charts, datasets, and Python-based analysis workflows.',
    highlights: ['Python', 'Pandas', 'Visualization'],
    icon: LineChart,
  },
]

export default function InternshipsPage() {
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
                <span
                  className="inline-flex items-center gap-1 font-semibold"
                  style={{ color: '#22C55E' }}
                >
                  Apply now <ArrowRight size={14} />
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </PageLayout>
  )
}
