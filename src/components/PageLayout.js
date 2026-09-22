"use client";
import Link from 'next/link'
import TechBackground from '@/components/TechBackground'
import { Sparkles, Users2, Award } from 'lucide-react'

const INFO_ITEMS = [
  { icon: Sparkles, label: 'Learn by building real work.' },
  { icon: Users2, label: 'Get guided support from mentors.' },
  { icon: Award, label: 'Earn recognition with certificates.' },
]

export default function PageLayout({ title, subtitle, badge, actions, children }) {
  return (
    <section
      className="min-h-screen px-4 py-20 sm:px-6 lg:px-8"
      style={{ position: 'relative', background: '#0a1628', color: '#F1F5F9' }}
    >
      <TechBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center gap-2 text-sm" style={{ color: '#94A3B8' }}>
            <Link
              href="/"
              className="font-medium transition-colors"
              style={{ color: '#4ADE80' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#22C55E')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#4ADE80')}
            >
              Home
            </Link>
            <span style={{ color: 'rgba(148,163,184,0.5)' }}>/</span>
            <span style={{ color: '#E2E8F0' }}>{title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              {badge ? (
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest"
                  style={{
                    color: '#4ADE80',
                    border: '1px solid rgba(34,197,94,0.3)',
                    background: 'rgba(34,197,94,0.08)',
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  }}
                >
                  {badge}
                </span>
              ) : null}
              <h1
                className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
                style={{ color: '#F8FAFC' }}
              >
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg" style={{ color: '#94A3B8' }}>
                {subtitle}
              </p>
              {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1.5px solid rgba(255,255,255,0.08)',
              }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: '#22C55E' }}
              >
                Thinkly
              </p>
              <div className="mt-4 space-y-3 text-sm" style={{ color: '#94A3B8' }}>
                {INFO_ITEMS.map((item) => (
                  <p key={item.label} className="flex items-start gap-2.5">
                    <item.icon
                      size={16}
                      color="#4ADE80"
                      strokeWidth={1.8}
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <span>{item.label}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">{children}</div>
        </div>
      </div>
    </section>
  )
}
