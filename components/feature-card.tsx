import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowUpRight, CheckCircle } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  className?: string
  gradient?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  features,
  className,
  gradient = "from-primary to-purple-600",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-white p-1 shadow-md transition-all hover:shadow-xl",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:bg-gradient-to-r group-hover:${gradient} transition-all duration-500`}
      ></div>

      <div className="relative p-6 bg-white rounded-lg">
        <div className={`mb-4 h-12 w-12 overflow-hidden rounded-full p-[2px] bg-gradient-to-br ${gradient}`}>
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>

        <div className="mb-6 space-y-2">
          {features.map((feature, j) => (
            <div key={j} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <Link
          href="#"
          className="inline-flex items-center text-sm font-medium text-primary group-hover:text-purple-600 transition-colors"
        >
          Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

