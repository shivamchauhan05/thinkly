import Link from 'next/link'

export default function PageLayout({ title, subtitle, badge, actions, children }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-700 hover:text-blue-800">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-700">{title}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            {badge ? (
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {badge}
              </span>
            ) : null}
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{subtitle}</p>
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Thinkly
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Learn by building real work.</p>
              <p>• Get guided support from mentors.</p>
              <p>• Earn recognition with certificates.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
