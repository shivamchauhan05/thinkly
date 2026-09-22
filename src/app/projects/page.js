"use client";
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { Sparkles, LayoutDashboard, PenTool, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: 'AI Study Planner',
    category: 'AI Product',
    description: 'A smart planner that helps students organize subjects, deadlines, and revision goals.',
    outcome: 'Boosted daily task completion by 40% for beta users.',
    icon: Sparkles,
  },
  {
    title: 'E-Commerce Dashboard',
    category: 'Web App',
    description: 'A complete dashboard for managing products, orders, and customer insights.',
    outcome: 'Built with a clean admin experience for quick decision-making.',
    icon: LayoutDashboard,
  },
  {
    title: 'Design Portfolio UI',
    category: 'Creative UI',
    description: 'A polished portfolio experience focused on storytelling and strong visual hierarchy.',
    outcome: 'Designed to impress recruiters and clients with modern presentation.',
    icon: PenTool,
  },
]

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      subtitle="See the kind of real-world work you can create, showcase, and talk about in interviews."
      badge="Hands-on building"
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
          key="certificates"
          href="/certificates"
          className="rounded-lg px-4 py-2 text-sm font-semibold transition-all"
          style={{ background: '#22C55E', color: '#08150C' }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#16a34a')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#22C55E')}
        >
          View Certificates
        </Link>,
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
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
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.25)',
              }}
            >
              <project.icon size={20} color="#4ADE80" strokeWidth={1.8} />
            </div>
            <p
              className="mt-4 text-sm font-semibold uppercase tracking-wide"
              style={{ color: '#22C55E' }}
            >
              {project.category}
            </p>
            <h2 className="mt-2 text-xl font-semibold" style={{ color: '#F8FAFC' }}>
              {project.title}
            </h2>
            <p className="mt-3 text-sm leading-6" style={{ color: '#94A3B8' }}>
              {project.description}
            </p>
            <div
              className="mt-5 rounded-xl p-4 text-sm"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#CBD5E1',
              }}
            >
              <span
                className="inline-flex items-center gap-1.5 font-semibold"
                style={{ color: '#F1F5F9' }}
              >
                <TrendingUp size={14} color="#4ADE80" /> Outcome:
              </span>{' '}
              {project.outcome}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
