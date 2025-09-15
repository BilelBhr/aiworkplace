import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const employeeData = [
  {
    id: 1,
    name: "Sarah Chen",
    department: "Engineering",
    pointsUsed: 1247,
    sessions: 89,
    favoriteModel: "GPT-4",
    trend: "up",
    trendValue: 12
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    department: "Marketing",
    pointsUsed: 834,
    sessions: 67,
    favoriteModel: "Claude",
    trend: "up",
    trendValue: 8
  },
  {
    id: 3,
    name: "Emily Watson",
    department: "Sales",
    pointsUsed: 923,
    sessions: 71,
    favoriteModel: "GPT-4",
    trend: "down",
    trendValue: 3
  },
  {
    id: 4,
    name: "David Kim",
    department: "Engineering",
    pointsUsed: 1456,
    sessions: 94,
    favoriteModel: "Gemini",
    trend: "up",
    trendValue: 15
  },
  {
    id: 5,
    name: "Lisa Zhang",
    department: "Support",
    pointsUsed: 567,
    sessions: 45,
    favoriteModel: "Claude",
    trend: "up",
    trendValue: 5
  }
];

export function EmployeeTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Employee</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Department</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Points Used</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Sessions</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Favorite Model</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Trend</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr 
              key={employee.id} 
              className="border-b border-border/50 hover:bg-card/30 transition-colors"
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{employee.name}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <Badge variant="secondary" className="bg-card text-card-foreground">
                  {employee.department}
                </Badge>
              </td>
              <td className="py-4 px-4">
                <span className="font-medium text-accent">{employee.pointsUsed.toLocaleString()}</span>
              </td>
              <td className="py-4 px-4">
                <span className="text-muted-foreground">{employee.sessions}</span>
              </td>
              <td className="py-4 px-4">
                <Badge variant="outline" className="border-primary/20 text-primary">
                  {employee.favoriteModel}
                </Badge>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-1">
                  {employee.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-success" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                  <span className={`text-sm font-medium ${
                    employee.trend === "up" ? "text-success" : "text-destructive"
                  }`}>
                    {employee.trendValue}%
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}