import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, CreditCard, MoreHorizontal } from "lucide-react";

const organizationData = [
  {
    id: 1,
    name: "TechCorp Solutions",
    plan: "Enterprise",
    users: 127,
    monthlySpend: 8950,
    pointsUsed: 245000,
    pointsLimit: 300000,
    expiryDate: "2024-12-15",
    status: "active"
  },
  {
    id: 2,
    name: "InnovateLabs",
    plan: "Professional",
    users: 45,
    monthlySpend: 2340,
    pointsUsed: 89000,
    pointsLimit: 120000,
    expiryDate: "2024-11-28",
    status: "active"
  },
  {
    id: 3,
    name: "StartupCo",
    plan: "Starter",
    users: 12,
    monthlySpend: 590,
    pointsUsed: 18500,
    pointsLimit: 25000,
    expiryDate: "2024-10-20",
    status: "warning"
  },
  {
    id: 4,
    name: "GlobaTech Industries",
    plan: "Enterprise",
    users: 289,
    monthlySpend: 15670,
    pointsUsed: 567000,
    pointsLimit: 750000,
    expiryDate: "2025-03-10",
    status: "active"
  },
  {
    id: 5,
    name: "AgencyPro",
    plan: "Professional",
    users: 67,
    monthlySpend: 3450,
    pointsUsed: 134000,
    pointsLimit: 180000,
    expiryDate: "2024-09-05",
    status: "expired"
  }
];

const getPlanColor = (plan: string) => {
  switch (plan) {
    case "Enterprise": return "bg-primary/10 text-primary border-primary/20";
    case "Professional": return "bg-secondary/10 text-secondary border-secondary/20";
    case "Starter": return "bg-accent/10 text-accent border-accent/20";
    default: return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "active": return "bg-success/10 text-success border-success/20";
    case "warning": return "bg-warning/10 text-warning border-warning/20";
    case "expired": return "bg-destructive/10 text-destructive border-destructive/20";
    default: return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

export function OrganizationTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Organization</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Plan</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Users</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Monthly Spend</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Usage</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {organizationData.map((org) => {
            const usagePercentage = (org.pointsUsed / org.pointsLimit) * 100;
            
            return (
              <tr 
                key={org.id} 
                className="border-b border-border/50 hover:bg-card/30 transition-colors"
              >
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium">{org.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3" />
                      Expires: {org.expiryDate}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge className={getPlanColor(org.plan)}>
                    {org.plan}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{org.users}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">${org.monthlySpend.toLocaleString()}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>{org.pointsUsed.toLocaleString()} / {org.pointsLimit.toLocaleString()}</span>
                      <span>{usagePercentage.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          usagePercentage > 90 ? "bg-destructive" : 
                          usagePercentage > 75 ? "bg-warning" : "bg-accent"
                        }`}
                        style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge className={getStatusColor(org.status)}>
                    {org.status}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}