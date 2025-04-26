"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { create } from 'zustand'

// Create a store to track loading state globally
interface LoadingState {
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: true,
  setLoading: (isLoading) => set({ isLoading }),
}))

export function CryptoLoading() {
  const [progress, setProgress] = useState(0)
  const [matrixText, setMatrixText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const setLoading = useLoadingStore((state) => state.setLoading)

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%"
    
    // Matrix text effect
    const matrixInterval = setInterval(() => {
      const randomText = Array(8)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("")
      setMatrixText(randomText)
    }, 50)

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(matrixInterval)
          setTimeout(() => {
            setIsComplete(true)
            // Update the global loading state after animation completes
            setTimeout(() => setLoading(false), 500)
          }, 500) // Delay before hiding splash screen
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(interval)
      clearInterval(matrixInterval)
    }
  }, [setLoading])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900 transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      <div className="relative w-48 h-48 mb-8">
        <Image
          src="https://yhxagirrbrqtcqer.public.blob.vercel-storage.com/Santozfellas%20Logo%20White-JPSmIFz81s6OmZwltcRGyf2MEWTnGH.png"
          alt="SF Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Matrix-style loading text */}
      <div className="font-mono text-white mb-4 h-6">{`CARGANDO: ${matrixText}`}</div>

      {/* Progress bar container */}
      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* Progress percentage */}
      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>
    </div>
  )
}