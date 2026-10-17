'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { Terminal } from 'lucide-react'
import QuoteForm from './QuoteForm'

const QuoteModalContext = createContext()

export function useQuoteModal() {
  return useContext(QuoteModalContext)
}

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  return (
    <QuoteModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Free quote request form"
        >
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />
          <div className="relative z-10 w-full max-w-3xl my-6 mx-4 md:my-10">
            <div
              style={{
                background: '#0a1628',
                border: '1.5px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close quote form"
                className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: '#CBD5E1',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(34,197,94,0.15)'
                  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'
                  e.currentTarget.style.color = '#4ADE80'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                  e.currentTarget.style.color = '#CBD5E1'
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <div className="px-5 pt-12 pb-8 md:px-8 md:pt-14 md:pb-9">
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      color: '#4ADE80',
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(34,197,94,0.3)',
                      borderRadius: 999,
                      padding: '6px 16px',
                      background: 'rgba(34,197,94,0.1)',
                    }}
                  >
                    <Terminal size={13} /> get_a_quote
                  </span>

                  <h2
                    style={{
                      fontSize: 'clamp(24px,4vw,34px)',
                      fontWeight: 800,
                      color: '#F8FAFC',
                      margin: '18px 0 12px',
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Tell Us About <span style={{ color: '#22C55E' }}>Your Project.</span>
                  </h2>

                  <p
                    style={{
                      color: '#94A3B8',
                      fontSize: 15,
                      maxWidth: 480,
                      margin: '0 auto',
                      lineHeight: 1.7,
                    }}
                  >
                    Share a few details and we&apos;ll send you a clear plan, timeline
                    and transparent quote — with no cost and no obligation.
                  </p>
                </div>

                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  )
}
