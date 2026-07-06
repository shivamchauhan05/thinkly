// components/FAQ.js
'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  { id: 1, question: 'Is the internship free?', answer: 'Yes, all our internships are completely free. We believe in providing equal opportunities for everyone to learn and grow.' },
  { id: 2, question: 'Is the internship remote?', answer: 'Yes, all our internships are 100% remote. You can work from anywhere with an internet connection.' },
  { id: 3, question: 'How do I get a certificate?', answer: 'You will receive a certificate upon successful completion of all internship tasks and projects. The certificate includes a unique verification ID.' },
  { id: 4, question: 'How long is the internship?', answer: 'The internship duration is typically 4-6 weeks, depending on the domain. You can work at your own pace within the timeline.' },
  { id: 5, question: 'What are the eligibility criteria?', answer: 'Anyone with a passion to learn and basic knowledge of their chosen domain can apply. Students and fresh graduates are encouraged to apply.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-blue-700">
            Got questions? We've got answers
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-blue-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 transition"
              >
                <span className="font-semibold text-blue-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-blue-700 border-t border-blue-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}