import Image from "next/image"
import { cn } from "@/lib/utils"

interface IntegrationLogoProps {
  name: string
  logo: string
  color: string
  className?: string
}

export function IntegrationLogo({ name, logo, color, className }: IntegrationLogoProps) {
  return (
    <div className={cn("relative w-20 h-20 rounded-2xl overflow-hidden", color, className)}>
      <Image src={logo || "/placeholder.svg"} alt={name} fill className="p-4 object-contain" />
    </div>
  )
}
