// components/Footer.js

import Link from 'next/link'
import { Mail, MapPin, Phone, Heart } from 'lucide-react'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-indigo-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-12 -mt-24 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold">Stay Updated!</h3>
              <p className="text-blue-100 mt-1">
                Get latest internship opportunities directly in your inbox
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-900 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
                        <img src='./logo.png' alt="Logo" className="h-35 w-50" />

            </h3>

            <p className="text-blue-200 text-sm mb-4">
              Building futures through quality internships, projects,
              and community support.
            </p>

            <div className="flex space-x-3">
              <Link
                href="#"
                className="bg-blue-800/50 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <FaFacebook size={16} />
              </Link>

              <Link
                href="#"
                className="bg-blue-800/50 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <FaTwitter size={16} />
              </Link>

              <Link
                href="#"
                className="bg-blue-800/50 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <FaLinkedin size={16} />
              </Link>

              <Link
                href="#"
                className="bg-blue-800/50 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-blue-200 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="#careers"
                  className="text-blue-200 hover:text-white transition"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="#blog"
                  className="text-blue-200 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="#press"
                  className="text-blue-200 hover:text-white transition"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#internships"
                  className="text-blue-200 hover:text-white transition"
                >
                  Internships
                </Link>
              </li>

              <li>
                <Link
                  href="#projects"
                  className="text-blue-200 hover:text-white transition"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="#certificate"
                  className="text-blue-200 hover:text-white transition"
                >
                  Certificate Verification
                </Link>
              </li>

              <li>
                <Link
                  href="#help"
                  className="text-blue-200 hover:text-white transition"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#privacy"
                  className="text-blue-200 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="#terms"
                  className="text-blue-200 hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="#cookies"
                  className="text-blue-200 hover:text-white transition"
                >
                  Cookie Policy
                </Link>
              </li>

              <li>
                <Link
                  href="#disclaimer"
                  className="text-blue-200 hover:text-white transition"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>

            <ul className="space-y-2 text-sm text-blue-200">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                supportthinkly.co@gmail.com
              </li>

              <li className="flex items-center gap-2">
                <Phone size={14} />
                 +91 9818509083
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={14} />
                New Delhi, India
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
          <p>
            © {new Date().getFullYear()} Thinkly.co. All rights reserved.
          </p>

          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-400" />
            for aspiring professionals
          </p>
        </div>

      </div>
    </footer>
  )
}
