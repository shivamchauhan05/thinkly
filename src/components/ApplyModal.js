'use client'
import { createContext, useContext, useState } from 'react'
import ApplyForm from './ApplyForm'

const ApplyModalContext = createContext()

export function useApplyModal() {
  return useContext(ApplyModalContext)
}

export function ApplyModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <ApplyModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
          <div className="relative z-10 w-full max-w-4xl my-8 mx-4">
            <div className="bg-white rounded-2xl shadow-2xl relative">
              <button
                onClick={close}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <ApplyForm />
            </div>
          </div>
        </div>
      )}
    </ApplyModalContext.Provider>
  )
}
