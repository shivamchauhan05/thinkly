import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

const internships = [
  {
    title: 'Software Development Internship',
    type: 'Remote',
    duration: '4 weeks',
    description: 'Build modern web apps with React, Next.js, and real-world APIs.',
    highlights: ['React', 'Next.js', 'API Integration'],
  },
  {
    title: 'UI/UX Design Internship',
    type: 'Hybrid',
    duration: '6 weeks',
    description: 'Create user-friendly interfaces and polished product experiences.',
    highlights: ['Figma', 'Wireframes', 'Design Systems'],
  },
  {
    title: 'Data Science Internship',
    type: 'Remote',
    duration: '5 weeks',
    description: 'Work with charts, datasets, and Python-based analysis workflows.',
    highlights: ['Python', 'Pandas', 'Visualization'],
  },
]

export default function InternshipsPage() {
  return (
    <PageLayout
      title="Internships"
      subtitle="Choose a practical internship path and grow with guided projects, mentorship, and real exposure."
      badge="Career-ready experience"
      actions={[
        <Link key="home" href="/" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          Back to Home
        </Link>,
        <Link key="projects" href="/projects" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Explore Projects
        </Link>,
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {internships.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                {item.type}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {highlight}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
              <span>{item.duration}</span>
              <span className="font-semibold text-blue-600">Apply now</span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
