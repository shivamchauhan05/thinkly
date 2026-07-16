// components/Navbar.js 
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useApplyModal } from './ApplyModal'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { open: openApplyModal } = useApplyModal()

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    scrollTo(id)
  }

  const handleApplyClick = (e) => {
    e.preventDefault()
    setIsOpen(false)
    openApplyModal()
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src='./logo.png' alt="Logo" className="h-40 w-60" />
          <div className="flex-shrink-0">
            {/* <Link href="/" className="text-2xl font-bold text-blue-700">
              thinkly<span className="text-blue-500"></span>
            </Link> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#internships" onClick={(e) => handleNavClick(e, 'domains')} className="text-blue-800 hover:text-blue-600 transition cursor-pointer">Internships</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-blue-800 hover:text-blue-600 transition cursor-pointer">Projects</a>
            <a href="#certificate" onClick={(e) => handleNavClick(e, 'certificate')} className="text-blue-800 hover:text-blue-600 transition cursor-pointer">Certificate</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-blue-800 hover:text-blue-600 transition cursor-pointer">FAQ</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex space-x-4">
            <a href="#apply" onClick={(e) => handleNavClick(e, 'apply')} className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition cursor-pointer">
              Sign In
            </a>
            <a href="#apply" onClick={handleApplyClick} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#internships" onClick={(e) => handleNavClick(e, 'internships')} className="block text-blue-800 hover:text-blue-600 cursor-pointer">Internships</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="block text-blue-800 hover:text-blue-600 cursor-pointer">Projects</a>
            <a href="#certificate" onClick={(e) => handleNavClick(e, 'certificate')} className="block text-blue-800 hover:text-blue-600 cursor-pointer">Certificate</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="block text-blue-800 hover:text-blue-600 cursor-pointer">FAQ</a>
            <div className="pt-2 space-y-2">
              <a href="#apply" onClick={(e) => handleNavClick(e, 'apply')} className="block text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg cursor-pointer">Sign In</a>
              <a href="#apply" onClick={handleApplyClick} className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">Apply Now</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
