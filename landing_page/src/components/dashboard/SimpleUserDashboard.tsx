import { 
  Brain, 
  Calendar, 
  Clock, 
  MessageSquare, 
  TrendingUp, 
  Zap 
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import { UsageChart } from "./UsageChart";

export function SimpleUserDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your AI usage overview.</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="AI Points Used"
          value="2,847"
          change={{ value: 12, type: "increase" }}
          icon={Zap}
          description="This billing period"
          accent
        />
        
        <MetricCard
          title="Chat Sessions"
          value="156"
          change={{ value: 8, type: "increase" }}
          icon={MessageSquare}
          description="This month"
        />
        
        <MetricCard
          title="Models Used"
          value="8"
          icon={Brain}
          description="Different AI models"
        />
        
        <MetricCard
          title="Days Remaining"
          value="12"
          icon={Calendar}
          description="In billing cycle"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UsageChart 
          title="Daily AI Points Usage"
          type="area"
          data={[
            { date: "Jan 1", usage: 120 },
            { date: "Jan 2", usage: 145 },
            { date: "Jan 3", usage: 190 },
            { date: "Jan 4", usage: 167 },
            { date: "Jan 5", usage: 203 },
            { date: "Jan 6", usage: 178 },
            { date: "Jan 7", usage: 225 },
          ]}
        />
        
        <UsageChart 
          title="Model Usage Distribution"
          type="donut"
          data={[
            { name: "GPT-4", value: 45, color: "hsl(var(--primary))" },
            { name: "Claude", value: 30, color: "hsl(var(--secondary))" },
            { name: "Gemini", value: 15, color: "hsl(var(--accent))" },
            { name: "Others", value: 10, color: "hsl(var(--muted))" },
          ]}
        />
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold">Recent Activity</h3>
        </div>
        
        <div className="space-y-3">
          {[
            { action: "Python code execution", model: "GPT-4", time: "2 minutes ago", points: 45 },
            { action: "SharePoint document analysis", model: "Claude", time: "15 minutes ago", points: 32 },
            { action: "Data visualization request", model: "GPT-4", time: "1 hour ago", points: 28 },
            { action: "Tool function call", model: "Gemini", time: "2 hours ago", points: 15 },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-card/30 rounded-lg border border-border/50">
              <div>
                <p className="font-medium text-sm">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.model} • {activity.time}</p>
              </div>
              <div className="text-right">
                <span className="text-accent font-medium text-sm">{activity.points} pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}