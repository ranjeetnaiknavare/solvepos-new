"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = textElement.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      textElement.style.setProperty("--x", `${x}%`)
      textElement.style.setProperty("--y", `${y}%`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <h1
      ref={textRef}
      className={cn(
        "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x",
        "relative [--x:50%] [--y:50%] [background-position:var(--x)_var(--y)] [transition:background-position_0.3s_ease]",
        className,
      )}
    >
      {children}
    </h1>
  )
}

