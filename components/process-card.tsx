import type { LucideIcon } from "lucide-react"

interface ProcessCardProps {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export function ProcessCard({ step, title, description, icon: Icon }: ProcessCardProps) {
  return (
    <div className="relative">
      <div className="relative border rounded-xl p-8 bg-white shadow-lg hover:shadow-xl transition-all z-10 group">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-bold py-1 px-4 rounded-full">
          {step}
        </div>
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </div>
    </div>
  )
}

