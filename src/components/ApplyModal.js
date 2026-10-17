'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import ApplyForm from './ApplyForm'

const ApplyModalContext = createContext()

export function useApplyModal() {
  return useContext(ApplyModalContext)
}

export function ApplyModalProvider({ children }) {
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
    <ApplyModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Internship application form"
        >
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />
          <div className="relative z-10 w-full max-w-4xl my-6 mx-4 md:my-10">
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
                aria-label="Close application form"
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
              <ApplyForm />
            </div>
          </div>
        </div>
      )}
    </ApplyModalContext.Provider>
  )
}
