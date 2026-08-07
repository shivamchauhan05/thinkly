// components/Statistics.js
'use client'
import { Users, FolderGit2, UserCheck, Award } from 'lucide-react'

const stats = [
  { id: 1, icon: Users, label: 'Interns', value: 5000, suffix: '+' },
  { id: 2, icon: FolderGit2, label: 'Projects', value: 200, suffix: '+' },
  { id: 3, icon: UserCheck, label: 'Mentors', value: 50, suffix: '+' },
  { id: 4, icon: Award, label: 'Completion Rate', value: 95, suffix: '%' },
]

export default function Statistics() {
  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-900">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-blue-700 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}