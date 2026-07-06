// components/CertificatePreview.js
'use client'
import { useState, useRef } from 'react'
import { ShieldCheck, Calendar, Clock, Award, Copy, Download, Share2, CheckCircle, Star } from 'lucide-react'

export default function CertificatePreview({
  studentName = "Priya Sharma",
  courseName = "Full Stack Web Development",
  programType = "Internship",
  startDate = "6 January 2026",
  endDate = "28 March 2026",
  startDateShort = "Jan 2026",
  endDateShort = "Mar 2026",
  durationWeeks = "12 Weeks",
  issueDate = "30 March 2026",
  certificateId = "THK-2026-4A2B",
  directorName = "Rahul Sharma",
  grade = "Distinction",
  skills = ["React.js", "Node.js", "Industry Mentored", "Project-Based", "Live Deployment"],
}) {
  const [copied, setCopied] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const certRef = useRef(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(certificateId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = async () => {
    if (!certRef.current || downloading) return
    setDownloading(true)
    try {
      const { toPng } = await import('html-to-image')
      const dataUrl = await toPng(certRef.current, {
        quality: 1,
        pixelRatio: 2,
      })
      const link = document.createElement('a')
      link.download = `Thinkly_Certificate_${certificateId}.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Download failed:', err)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <section id='certificate' className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">

        {/* ───── CERTIFICATE CARD ───── */}
        <div ref={certRef} className="bg-white border border-blue-200 rounded-sm overflow-hidden shadow-2xl relative">

          {/* Top Header Band */}
          <div className="bg-[#0B1F4F] px-7 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/25 flex items-center justify-center">
                {/* Replace with your actual Thinkly SVG logo */}
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <ellipse cx="16" cy="18" rx="7" ry="8.5" stroke="white" strokeWidth="1.8" fill="none"/>
                  <rect x="13" y="26" width="6" height="2" rx="1" fill="#60a5fa"/>
                  <rect x="14" y="28" width="4" height="1.5" rx=".75" fill="#60a5fa"/>
                  <circle cx="16" cy="18" r="2" fill="white"/>
                  <line x1="16" y1="6" x2="16" y2="8" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="10" y1="8" x2="11.5" y2="9.5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="22" y1="8" x2="20.5" y2="9.5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="7.5" y1="13" x2="9.5" y2="13" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="24.5" y1="13" x2="22.5" y2="13" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-base leading-tight">
                  thinkly<span className="text-blue-400">.com</span>
                </div>
                <div className="text-white/40 text-[9px] tracking-[2px] uppercase mt-0.5">
                  Learning &amp; Development
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white/40 text-[9px] tracking-widest uppercase mb-1">Registration No.</div>
              <div className="text-white font-mono font-semibold text-xs">{certificateId}</div>
            </div>
          </div>

          {/* Gold Stripe */}
          <div className="h-[3px] bg-[#C9A84C]" />

          {/* Body */}
          <div className="px-10 py-8 relative">

            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
              <div className="w-44 h-44 rounded-full border-2 border-[#0B1F4F] flex items-center justify-center">
                <span className="font-serif text-7xl font-bold text-[#0B1F4F]">T</span>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#C9A84C]" />
            <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#C9A84C]" />

            {/* Title */}
            <div className="text-center">
              <p className="text-[9px] tracking-[5px] text-[#C9A84C] font-semibold uppercase mb-2">
                Official Certificate of Completion
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#0B1F4F]">
                Certificate of Achievement
              </h2>
              <p className="text-[#C9A84C] text-base tracking-[6px] my-2">✦ ✦ ✦</p>
              <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-2">
                This certificate is proudly presented to
              </p>
            </div>

            {/* Student Name */}
            <div className="text-center mb-5">
              <h1 className="font-serif text-4xl font-bold italic text-[#0B1F4F] mb-2">
                {studentName}
              </h1>
              <div className="relative w-48 mx-auto h-[2px] bg-[#C9A84C]">
                <div className="absolute -top-[3px] left-0 w-[6px] h-[6px] rounded-full bg-[#C9A84C]" />
                <div className="absolute -top-[3px] right-0 w-[6px] h-[6px] rounded-full bg-[#C9A84C]" />
              </div>
            </div>

            {/* Course */}
            <div className="text-center mb-2">
              <p className="text-xs text-gray-500 mb-1">In recognition of the successful completion of the</p>
              <p className="font-serif text-lg font-semibold text-[#0B1F4F]">
                {courseName} {programType}
              </p>
            </div>

            {/* Period Row */}
            <div className="flex items-center justify-center gap-3 flex-wrap mb-3">
              <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
                <Calendar size={12} className="text-[#C9A84C]" />
                {startDate} — {endDate}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
              <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
                <Clock size={12} className="text-[#C9A84C]" />
                {durationWeeks}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
              <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
                <Award size={12} className="text-[#C9A84C]" />
                Grade: {grade}
              </span>
            </div>

            {/* Internship Description Box */}
            <div className="bg-[#f8faff] border border-[#c8d9f0] rounded-lg px-4 py-3 my-3">
              <p className="text-[11px] text-[#0B1F4F] font-semibold mb-1">About this {programType}</p>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                During this program, the candidate demonstrated exceptional proficiency in designing,
                developing, and deploying scalable web applications. The curriculum encompassed
                hands-on training in modern development practices, collaborative team projects,
                and industry-standard workflows — equipping the candidate with real-world skills
                valued by top technology employers.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                <span className="bg-[#EEF4FF] border border-[#B5D4F4] rounded-full px-2.5 py-0.5 text-[10px] text-[#185FA5] font-medium">
                  {courseName}
                </span>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#EEF4FF] border border-[#B5D4F4] rounded-full px-2.5 py-0.5 text-[10px] text-[#185FA5] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-blue-100" />
              <div className="w-2 h-2 rotate-45 bg-[#C9A84C]" />
              <div className="flex-1 h-px bg-blue-100" />
            </div>

            {/* Footer 3-col */}
            <div className="grid grid-cols-3 items-end gap-4">

              {/* Left Meta */}
              <div className="space-y-3">
                <div>
                  <p className="text-[9px] tracking-widest uppercase text-gray-400">Issued On</p>
                  <p className="text-xs font-semibold text-[#0B1F4F] mt-0.5">{issueDate}</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-widest uppercase text-gray-400">Program Period</p>
                  <p className="text-[11px] font-semibold text-[#0B1F4F] mt-0.5">
                    {startDateShort} – {endDateShort}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] tracking-widest uppercase text-gray-400">Certificate ID</p>
                  <p className="text-[11px] font-mono font-semibold text-blue-700 mt-0.5">
                    {certificateId}
                  </p>
                </div>
              </div>

              {/* Center Seal */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-[72px] h-[72px] rounded-full border-2 border-[#0B1F4F] flex items-center justify-center">
                  <div className="w-[58px] h-[58px] rounded-full border border-[#C9A84C] flex flex-col items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-[#0B1F4F] leading-none">T</span>
                    <span className="text-[6px] tracking-widest text-blue-700 uppercase mt-0.5">Thinkly</span>
                  </div>
                </div>
                <p className="text-[8px] tracking-widest text-gray-400 uppercase">Official Seal</p>
              </div>

              {/* Right Signature + QR */}
              <div className="text-right">
                <p className="font-serif italic text-lg text-[#0B1F4F]">{directorName}</p>
                <div className="w-24 h-px bg-[#0B1F4F] ml-auto my-1.5" />
                <p className="text-xs font-semibold text-[#0B1F4F]">{directorName}</p>
                <p className="text-[10px] text-gray-400">Director &amp; CEO, Thinkly.com</p>

                {/* QR + Verified */}
                <div className="flex items-end justify-end gap-2 mt-2">
                  <div className="flex items-center gap-1 bg-green-50 border border-green-200 rounded px-2 py-1">
                    <ShieldCheck size={11} className="text-green-700" />
                    <span className="text-[10px] text-green-700 font-medium">Blockchain Verified</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {/* QR Code SVG */}
                    <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                      <rect width="64" height="64" fill="white"/>
                      <rect x="3" y="3" width="22" height="22" rx="2" fill="none" stroke="#0B1F4F" strokeWidth="2"/>
                      <rect x="8" y="8" width="12" height="12" rx="1" fill="#0B1F4F"/>
                      <rect x="39" y="3" width="22" height="22" rx="2" fill="none" stroke="#0B1F4F" strokeWidth="2"/>
                      <rect x="44" y="8" width="12" height="12" rx="1" fill="#0B1F4F"/>
                      <rect x="3" y="39" width="22" height="22" rx="2" fill="none" stroke="#0B1F4F" strokeWidth="2"/>
                      <rect x="8" y="44" width="12" height="12" rx="1" fill="#0B1F4F"/>
                      <rect x="39" y="39" width="5" height="5" fill="#0B1F4F"/>
                      <rect x="47" y="39" width="5" height="5" fill="#0B1F4F"/>
                      <rect x="55" y="39" width="6" height="5" fill="#0B1F4F"/>
                      <rect x="39" y="47" width="8" height="5" fill="#0B1F4F"/>
                      <rect x="51" y="47" width="5" height="5" fill="#0B1F4F"/>
                      <rect x="39" y="55" width="5" height="6" fill="#0B1F4F"/>
                      <rect x="47" y="55" width="8" height="4" fill="#0B1F4F"/>
                      <rect x="58" y="51" width="4" height="10" fill="#0B1F4F"/>
                      <rect x="12" y="28" width="4" height="4" fill="#C9A84C"/>
                      <rect x="20" y="28" width="4" height="4" fill="#C9A84C"/>
                      <rect x="28" y="28" width="4" height="4" fill="#C9A84C"/>
                      <rect x="28" y="12" width="4" height="4" fill="#C9A84C"/>
                      <rect x="28" y="20" width="4" height="4" fill="#C9A84C"/>
                    </svg>
                    <p className="text-[9px] text-gray-400 mt-0.5">Scan to verify</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Stripe */}
          <div className="h-[3px] bg-[#C9A84C]" />

          {/* Bottom Band */}
          <div className="bg-[#0B1F4F] px-7 py-2 flex items-center justify-between">
            <p className="text-[9px] tracking-widest text-white/40 uppercase">thinkly.com · verified credential</p>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </div>
            <p className="text-[9px] tracking-widest text-white/40 font-mono">{certificateId}</p>
          </div>
        </div>

        {/* ───── BLOCKCHAIN VERIFIED SECTION ───── */}
        <div className="mt-4 bg-white border border-blue-200 rounded-lg overflow-hidden">

          {/* Section Header */}
          <div className="bg-[#0B1F4F] px-6 py-4">
            <h3 className="font-serif text-lg font-bold text-white mb-1">
              Blockchain Verified Certificate
            </h3>
            <p className="text-white/55 text-[11px] leading-relaxed">
              Each certificate has a unique ID instantly verifiable by employers worldwide.
              Our blockchain-backed verification ensures your credential is tamper-proof
              and permanently accessible.
            </p>
          </div>

          {/* Actions */}
          <div className="px-6 py-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F4F] text-white text-xs font-semibold rounded-lg hover:bg-blue-900 transition-all"
              >
                <Copy size={13} />
                {copied ? 'Copied!' : 'Copy Cert ID'}
              </button>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex items-center gap-2 px-4 py-2 border-[1.5px] border-[#185FA5] text-[#185FA5] text-xs font-semibold rounded-lg hover:bg-blue-50 transition-all disabled:opacity-50"
              >
                <Download size={13} />
                {downloading ? 'Downloading...' : 'Download PDF'}
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 border-[1.5px] border-[#185FA5] text-[#185FA5] text-xs font-semibold rounded-lg hover:bg-blue-50 transition-all">
                <Share2 size={13} />
                Share
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 text-sm text-gray-700 font-medium">
                <CheckCircle size={15} className="text-green-600" />
                10,000+ Certificates Issued
              </div>
              <div className="w-px h-4 bg-blue-200" />
              <div className="flex items-center gap-1.5 text-sm text-gray-700 font-medium">
                <Star size={15} className="text-amber-500" />
                4.9/5 Rating
              </div>
              <div className="w-px h-4 bg-blue-200" />
              <div className="flex items-center gap-1.5 text-sm text-gray-700 font-medium">
                <ShieldCheck size={15} className="text-blue-700" />
                Employer Verified
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}