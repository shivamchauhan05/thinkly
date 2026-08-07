// components/ImageWithFallback.js
'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ImageWithFallback({ src, alt, className, ...props }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-full">
      {!error ? (
        <img
          src={imgSrc}
          alt={alt}
          className={className}
          onError={() => {
            setError(true)
            setImgSrc(`https://placehold.co/600x400/2563eb/white?text=${encodeURIComponent(alt)}`)
          }}
          {...props}
        />
      ) : (
        <div className={`${className} bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center`}>
          <span className="text-white font-semibold text-center p-4">{alt}</span>
        </div>
      )}
    </div>
  )
}