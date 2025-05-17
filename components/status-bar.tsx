import { Clock, Cpu, Database, Signal } from "lucide-react"

export function StatusBar() {
  return (
    <div className="flex items-center justify-between p-2 border border-accent/30 rounded-md bg-background/50 text-xs font-mono">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Signal className="h-3 w-3 text-accent" />
          <span>SYSTEM ONLINE</span>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground">
          <Cpu className="h-3 w-3 text-accent" />
          <span>CPU: 12%</span>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground">
          <Database className="h-3 w-3 text-accent" />
          <span>MEMORY: 42%</span>
        </div>
      </div>

      <div className="flex items-center gap-1 text-muted-foreground">
        <Clock className="h-3 w-3 text-accent" />
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  )
}
