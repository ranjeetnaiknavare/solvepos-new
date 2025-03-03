"use client"

export function FloatingCube() {
  return (
    <div className="w-32 h-32 relative perspective-500">
      <div className="w-full h-full absolute animate-spin-slow transform-style-3d">
        <div className="absolute w-32 h-32 border-2 border-blue-500 bg-blue-500 bg-opacity-20 transform -translate-z-16"></div>
        <div className="absolute w-32 h-32 border-2 border-blue-500 bg-blue-500 bg-opacity-20 transform translate-z-16"></div>
        <div className="absolute w-32 h-32 border-2 border-blue-500 bg-blue-500 bg-opacity-20 transform -translate-y-16 rotate-x-90"></div>
        <div className="absolute w-32 h-32 border-2 border-blue-500 bg-blue-500 bg-opacity-20 transform translate-y-16 rotate-x-90"></div>
        <div className="absolute w-32 h-32 border-2 border-blue-500 bg-blue-500 bg-opacity-20 transform -translate-x-16 rotate-y-90"></div>
        <div className="absolute w-32 h-32 border-2 border-blue-500 bg-blue-500 bg-opacity-20 transform translate-x-16 rotate-y-90"></div>
      </div>
    </div>
  )
}

