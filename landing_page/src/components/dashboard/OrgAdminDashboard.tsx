import { 
  Brain, 
  Calendar, 
  TrendingUp, 
  Users, 
  Zap,
  UserCheck
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import { UsageChart } from "./UsageChart";
import { EmployeeTable } from "./EmployeeTable";

export function OrgAdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Organization Dashboard</h1>
          <p className="text-muted-foreground">Manage your team's AI usage and performance.</p>
        </div>
      </div>

      {/* Organization Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <MetricCard
          title="Total AI Points"
          value="24,573"
          change={{ value: 15, type: "increase" }}
          icon={Zap}
          description="Organization total"
          accent
        />
        
        <MetricCard
          title="Active Users"
          value="34"
          change={{ value: 6, type: "increase" }}
          icon={Users}
          description="This month"
        />
        
        <MetricCard
          title="Avg. Points/User"
          value="723"
          change={{ value: 3, type: "decrease" }}
          icon={TrendingUp}
          description="Per user monthly"
        />
        
        <MetricCard
          title="Models in Use"
          value="12"
          icon={Brain}
          description="Across organization"
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
          title="Organization Points Usage"
          type="area"
          data={[
            { date: "Week 1", usage: 3200, employees: 28 },
            { date: "Week 2", usage: 3800, employees: 31 },
            { date: "Week 3", usage: 4100, employees: 33 },
            { date: "Week 4", usage: 4650, employees: 34 },
          ]}
        />
        
        <UsageChart 
          title="Department Usage"
          type="bar"
          data={[
            { name: "Engineering", value: 8200, color: "hsl(var(--primary))" },
            { name: "Marketing", value: 5100, color: "hsl(var(--secondary))" },
            { name: "Sales", value: 4300, color: "hsl(var(--accent))" },
            { name: "Support", value: 3200, color: "hsl(var(--warning))" },
            { name: "HR", value: 1800, color: "hsl(var(--muted))" },
          ]}
        />
      </div>

      {/* Employee Performance Table */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-6">
          <UserCheck className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold">Employee Usage Statistics</h3>
        </div>
        
        <EmployeeTable />
      </div>
    </div>
  );
}