import Link from 'next/link'
import React from 'react'

export default function AuthGuardFallback({title, description}: {title: string, description: string}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm text-center space-y-6">
        
        {/* Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
          <span className="text-red-500 text-2xl">🔒</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/auth/login"
            className="w-full sm:w-auto flex-1 bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
          >
            Login
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
