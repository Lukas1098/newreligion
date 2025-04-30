"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { create } from 'zustand'
import { useTheme } from 'next-themes'


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
  const [mounted, setMounted] = useState(false)
  const setLoading = useLoadingStore((state) => state.setLoading)
  const { resolvedTheme } = useTheme()
  
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const isDarkTheme = mounted ? resolvedTheme === 'dark' : false 
  
  // Logo URLs según el tema
  const logoUrl = isDarkTheme 
    ? "/Logo-blanco.png" 
    : "/Logo-negro.png"

  useEffect(() => {
    if (!mounted) return 
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%"
    
    // Matrix text effect
    const matrixInterval = setInterval(() => {
      const randomText = Array(8)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("")
      setMatrixText(randomText)
    }, 50)

    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(matrixInterval)
          setTimeout(() => {
            setIsComplete(true)
            
            setTimeout(() => setLoading(false), 500)
          }, 500) 
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(interval)
      clearInterval(matrixInterval)
    }
  }, [setLoading, mounted])

  
  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center transition-opacity duration-500 bg-white">
        <div className="relative w-48 h-48 mb-8">
          <Image
            src="/Logo-negro.png"
            alt="SF Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="font-mono mb-4 h-6 text-black">CARGANDO: XXXXXXXX</div>
        <div className="w-64 h-1 rounded-full overflow-hidden bg-gray-200">
          <div className="h-full transition-all duration-100 ease-out bg-black" style={{ width: '0%' }} />
        </div>
        <div className="mt-2 font-mono text-sm text-black">0%</div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center transition-opacity duration-500",
        isDarkTheme ? "loading-bg-dark" : "loading-bg-light", 
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      <div className="relative w-48 h-48 mb-8">
        <Image
          src={logoUrl}
          alt="SF Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Matrix-style loading text */}
      <div className={cn(
        "font-mono mb-4 h-6",
        isDarkTheme ? "loading-text-dark" : "loading-text-light"
      )}>
        {`CARGANDO: ${matrixText}`}
      </div>

      {/* Progress bar container */}
      <div className={cn(
        "w-64 h-1 rounded-full overflow-hidden",
        isDarkTheme ? "bg-dark-400" : "bg-gray-200"
      )}>
        <div 
          className={cn(
            "h-full transition-all duration-100 ease-out",
            isDarkTheme ? "progress-bar-dark" : "progress-bar-light"
          )}
          style={{ width: `${progress}%` }} 
        />
      </div>

      {/* Progress percentage */}
      <div className={cn(
        "mt-2 font-mono text-sm",
        isDarkTheme ? "loading-text-dark" : "loading-text-light"
      )}>
        {`${progress}%`}
      </div>
    </div>
  )
}