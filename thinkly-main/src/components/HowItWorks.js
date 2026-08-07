// components/HowItWorks.js
'use client'
import { ClipboardList, CheckCircle2, Code, Award } from 'lucide-react'

const steps = [
  { id: 1, title: 'Register', icon: ClipboardList, description: 'Sign up in 2 minutes and choose your favorite domain', color: 'from-blue-500 to-cyan-500' },
  { id: 2, title: 'Get Selected', icon: CheckCircle2, description: 'Complete the screening process and get shortlisted', color: 'from-indigo-500 to-purple-500' },
  { id: 3, title: 'Complete Tasks', icon: Code, description: 'Work on real-world projects with mentor guidance', color: 'from-cyan-500 to-blue-500' },
  { id: 4, title: 'Receive Certificate', icon: Award, description: 'Get certified and showcase on LinkedIn', color: 'from-green-500 to-emerald-500' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Simple Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mt-2 mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-lg">
            Your journey to professional growth in 4 simple steps
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative group">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                  {step.id}
                </div>
                
                <div className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full animate-pulse"></div>
                    <div className={`relative w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-blue-600 text-sm">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 text-blue-400 text-2xl">
                      →
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}