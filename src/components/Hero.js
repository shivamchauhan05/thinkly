// components/Hero.js
'use client'
import { ArrowRight, Briefcase } from 'lucide-react'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="animate-pulse mr-2">🚀</span>
              <span className="text-blue-700 text-sm font-medium">Launching Your Career Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Build Your Future with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Thinkly</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-700 max-w-2xl mb-8">
              Internships, projects, certificates, and a community that helps you grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                onClick={(e) => { e.preventDefault(); scrollTo('apply') }}
                className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#domains"
                onClick={(e) => { e.preventDefault(); scrollTo('domains') }}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer"
              >
                Explore Internships
                <Briefcase className="ml-2 w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-blue-600">
              <span className="flex items-center gap-1">⭐ 4.9/5 Rating</span>
              <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
              <span className="flex items-center gap-1">👥 10k+ Students</span>
              <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
              <span className="flex items-center gap-1">🏆 Top Choice 2026</span>
            </div>
          </div>
          
          {/* Right Image - Using div instead of img with onError */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-indigo-500 h-[400px] flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-2xl font-bold">Students Working Together</h3>
                <p className="mt-2 text-blue-100">Join 5000+ active interns</p>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">2,500+</p>
                  <p className="text-xs text-gray-500">Active Interns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}