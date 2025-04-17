"use client"

import { useEffect, useState } from "react"

export function ParticleBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const loadParticles = async () => {
      try {
        // Dynamically import the libraries to avoid SSR issues
        const { tsParticles } = await import("tsparticles-engine")
        const { loadFull } = await import("tsparticles")

        await loadFull(tsParticles)

        await tsParticles.load("tsparticles", {
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        })
      } catch (error) {
        console.error("Failed to initialize particles:", error)
      }
    }

    setMounted(true)
    loadParticles()

    return () => {
      // Cleanup function
      const cleanup = async () => {
        try {
          const { tsParticles } = await import("tsparticles-engine")
          await tsParticles.destroy()
        } catch (error) {
          console.error("Failed to cleanup particles:", error)
        }
      }
      cleanup()
    }
  }, [])

  if (!mounted) return null

  return <div id="tsparticles" className="absolute inset-0 -z-10" aria-hidden="true"></div>
}

