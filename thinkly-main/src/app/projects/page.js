import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

const projects = [
  {
    title: 'AI Study Planner',
    category: 'AI Product',
    description: 'A smart planner that helps students organize subjects, deadlines, and revision goals.',
    outcome: 'Boosted daily task completion by 40% for beta users.',
  },
  {
    title: 'E-Commerce Dashboard',
    category: 'Web App',
    description: 'A complete dashboard for managing products, orders, and customer insights.',
    outcome: 'Built with a clean admin experience for quick decision-making.',
  },
  {
    title: 'Design Portfolio UI',
    category: 'Creative UI',
    description: 'A polished portfolio experience focused on storytelling and strong visual hierarchy.',
    outcome: 'Designed to impress recruiters and clients with modern presentation.',
  },
]

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      subtitle="See the kind of real-world work you can create, showcase, and talk about in interviews."
      badge="Hands-on building"
      actions={[
        <Link key="home" href="/" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          Back to Home
        </Link>,
        <Link key="certificates" href="/certificates" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          View Certificates
        </Link>,
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{project.category}</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">{project.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Outcome:</span> {project.outcome}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
