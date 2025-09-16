import { Brain, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { UserRole } from "./DashboardLayout";

interface HeaderProps {
  userRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onToggleSidebar: () => void;
}

const roleLabels = {
  "simple": "Simple User",
  "org-admin": "Organization Admin", 
  "kauz-employee": "Kauz Employee"
};

export function Header({ userRole, onRoleChange, onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-gradient-primary h-16 px-6 border-b border-white/10 sticky top-0 z-50">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="text-white hover:bg-white/10"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          
          <div className="flex items-center justify-center">
              <img
                src="/logo.png"
                alt="KAUZ AI Workplace"
                className="w-full max-h-12 object-contain"
              />
          </div>
          
        </div>

        <div className="flex items-center gap-4">
          {/* Role Selector for Demo */}
          <Select value={userRole} onValueChange={onRoleChange}>
            <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple User</SelectItem>
              <SelectItem value="org-admin">Organization Admin</SelectItem>
              <SelectItem value="kauz-employee">Kauz Employee</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
            <User className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">{roleLabels[userRole]}</span>
          </div>
        </div>
      </div>
    </header>
  );
}