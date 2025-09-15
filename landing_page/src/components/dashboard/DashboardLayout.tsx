import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { SimpleUserDashboard } from "./SimpleUserDashboard";
import { OrgAdminDashboard } from "./OrgAdminDashboard";
import { KauzEmployeeDashboard } from "./KauzEmployeeDashboard";

export type UserRole = "simple" | "org-admin" | "kauz-employee";

interface DashboardLayoutProps {
  userRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export function DashboardLayout({ userRole, onRoleChange }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderDashboard = () => {
    switch (userRole) {
      case "simple":
        return <SimpleUserDashboard />;
      case "org-admin":
        return <OrgAdminDashboard />;
      case "kauz-employee":
        return <KauzEmployeeDashboard />;
      default:
        return <SimpleUserDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        userRole={userRole}
        onRoleChange={onRoleChange}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} userRole={userRole} />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}>
          <div className="p-6 bg-gray-50 min-h-screen">
            {renderDashboard()}
          </div>
        </main>
      </div>
    </div>
  );
}