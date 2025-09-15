import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon: LucideIcon;
  description?: string;
  className?: string;
  accent?: boolean;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  description, 
  className,
  accent = false 
}: MetricCardProps) {
  return (
    <Card className={cn(
      "glass-card p-6 transition-smooth hover:bg-card/80",
      accent && "border-accent/20 glow-accent",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <div className="space-y-1">
            <p className={cn(
              "text-2xl font-bold",
              accent ? "text-accent" : "text-foreground"
            )}>
              {value}
            </p>
            {change && (
              <div className="flex items-center gap-1">
                <span className={cn(
                  "text-xs font-medium",
                  change.type === "increase" ? "text-success" : "text-destructive"
                )}>
                  {change.type === "increase" ? "+" : "-"}{Math.abs(change.value)}%
                </span>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        
        <div className={cn(
          "p-3 rounded-xl",
          accent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
}