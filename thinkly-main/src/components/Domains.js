// components/Domains.js
'use client'
import { 
  Code2, Brain, BarChart3, Palette, Megaphone, Shield, PenTool 
} from 'lucide-react'
import { useApplyModal } from './ApplyModal'

const domains = [
  { id: 1, name: 'Web Development', icon: Code2, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500', students: '1,200+' },
  { id: 2, name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500', students: '800+' },
  { id: 3, name: 'Data Science', icon: BarChart3, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500', students: '950+' },
  { id: 4, name: 'UI/UX Design', icon: Palette, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-500', students: '700+' },
  { id: 5, name: 'Digital Marketing', icon: Megaphone, color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-500', students: '1,100+' },
  { id: 6, name: 'Cyber Security', icon: Shield, color: 'from-red-500 to-rose-500', bgColor: 'bg-red-500', students: '600+' },
  { id: 7, name: 'Content Writing', icon: PenTool, color: 'from-teal-500 to-cyan-500', bgColor: 'bg-teal-500', students: '900+' },
]

export default function Domains() {
  const { open: openApplyModal } = useApplyModal()

  return (
    <section id="domains" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Explore Domains</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mt-2 mb-4">
            Choose Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Career Path</span>
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-lg">
            Industry-relevant domains with hands-on projects and expert mentorship
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Colored Header instead of image */}
              <div className={`h-32 bg-gradient-to-r ${domain.color} flex items-center justify-center`}>
                <domain.icon className="w-16 h-16 text-white opacity-80" />
              </div>
              
              <div className="p-5">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${domain.color} flex items-center justify-center mb-3 shadow-lg`}>
                  <domain.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{domain.name}</h3>
                <p className="text-blue-600 text-sm mb-2">👥 {domain.students} enrolled</p>
                <p className="text-blue-600 text-sm mb-4">Learn from industry experts</p>
                <button onClick={openApplyModal} className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Apply Now → 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}