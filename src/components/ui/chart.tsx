import * as React from "react"
import { cn } from "@/lib/utils"

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: Record<string, { label: string; color: string }>
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, config, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full h-full", className)}
      {...props}
    >
      {children}
    </div>
  )
)
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({ content }: any) => <>{content}</>
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-md">
        <p className="text-sm font-medium">
          {payload[0].value}
        </p>
      </div>
    )
  }
  return null
}
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
