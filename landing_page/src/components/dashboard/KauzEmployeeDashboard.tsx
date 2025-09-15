import { 
  Building2, 
  Calendar, 
  CreditCard, 
  Globe, 
  TrendingUp, 
  Users,
  Zap,
  AlertTriangle
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import { UsageChart } from "./UsageChart";
import { OrganizationTable } from "./OrganizationTable";

export function KauzEmployeeDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Kauz Platform Overview</h1>
          <p className="text-muted-foreground">Monitor platform health and organization performance.</p>
        </div>
      </div>

      {/* Platform Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Organizations"
          value="127"
          change={{ value: 8, type: "increase" }}
          icon={Building2}
          description="Active customers"
          accent
        />
        
        <MetricCard
          title="Platform Users"
          value="2,847"
          change={{ value: 12, type: "increase" }}
          icon={Users}
          description="Across all orgs"
        />
        
        <MetricCard
          title="Monthly Revenue"
          value="$89,250"
          change={{ value: 18, type: "increase" }}
          icon={CreditCard}
          description="Recurring revenue"
        />
        
        <MetricCard
          title="System Uptime"
          value="99.97%"
          icon={Globe}
          description="Last 30 days"
        />
      </div>

      {/* System Health Alerts */}
      <div className="glass-card p-6 border-warning/20">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <h3 className="text-lg font-semibold">System Health Alerts</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
            <p className="text-sm font-medium text-success">API Response Time</p>
            <p className="text-lg font-bold text-success">142ms</p>
            <p className="text-xs text-muted-foreground">Optimal</p>
          </div>
          
          <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <p className="text-sm font-medium text-warning">GPU Utilization</p>
            <p className="text-lg font-bold text-warning">78%</p>
            <p className="text-xs text-muted-foreground">High usage</p>
          </div>
          
          <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
            <p className="text-sm font-medium text-success">Error Rate</p>
            <p className="text-lg font-bold text-success">0.03%</p>
            <p className="text-xs text-muted-foreground">Excellent</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UsageChart 
          title="Platform Revenue Trend"
          type="line"
          data={[
            { date: "Jan", revenue: 65000, orgs: 98 },
            { date: "Feb", revenue: 71000, orgs: 103 },
            { date: "Mar", revenue: 78000, orgs: 108 },
            { date: "Apr", revenue: 84000, orgs: 115 },
            { date: "May", revenue: 89250, orgs: 127 },
          ]}
        />
        
        <UsageChart 
          title="Organization Plan Distribution"
          type="donut"
          data={[
            { name: "Enterprise", value: 45, color: "hsl(var(--primary))" },
            { name: "Professional", value: 35, color: "hsl(var(--secondary))" },
            { name: "Starter", value: 15, color: "hsl(var(--accent))" },
            { name: "Trial", value: 5, color: "hsl(var(--muted))" },
          ]}
        />
      </div>

      {/* Organization Management Table */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-6">
          <Building2 className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold">Organization Management</h3>
        </div>
        
        <OrganizationTable />
      </div>
    </div>
  );
}