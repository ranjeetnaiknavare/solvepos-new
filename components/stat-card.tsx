import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  value: string
  label: string
  icon: LucideIcon
}

export function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-white p-1 shadow-md transition-all hover:shadow-xl group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-600 transition-all duration-500"></div>

      <div className="relative p-6 bg-white rounded-lg flex flex-col items-center text-center">
        <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
          {value}
        </div>
        <p className="text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

