'use client'

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Logo() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkTheme = mounted ? resolvedTheme === 'dark' : false 

  const logoUrl = isDarkTheme 
    ? "/Logo-blanco.png" 
    : "/Logo-negro.png"

    if (!mounted){
      return (
        <div className="relative w-24 h-24">
          <Image
            src="/Logo-negro.png"
            alt="SF Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      )
    }
  return (
    <div className="relative w-24 h-24">
      <Image
        src={logoUrl}
        alt="SF Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
