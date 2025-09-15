import { 
  BarChart3, 
  Bot, 
  Building2, 
  Calendar, 
  Database, 
  FileText, 
  Home, 
  Settings, 
  Users,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { UserRole } from "./DashboardLayout";

interface SidebarProps {
  isOpen: boolean;
  userRole: UserRole;
}

const navigationItems = {
  common: [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: Bot, label: "AI Chat", href: "#" },
    { icon: Database, label: "SharePoint", href: "#" },
    { icon: Zap, label: "Tools", href: "#" },
  ],
  admin: [
    { icon: Users, label: "Team Analytics", href: "#" },
    { icon: BarChart3, label: "Usage Reports", href: "#" },
  ],
  kauz: [
    { icon: Building2, label: "Organizations", href: "#" },
    { icon: FileText, label: "Plans & Billing", href: "#" },
    { icon: Calendar, label: "System Health", href: "#" },
  ],
  settings: [
    { icon: Settings, label: "Settings", href: "#" },
  ]
};

export function Sidebar({ isOpen, userRole }: SidebarProps) {
  const getNavItems = () => {
    let items = [...navigationItems.common];
    
    if (userRole === "org-admin" || userRole === "kauz-employee") {
      items = [...items, ...navigationItems.admin];
    }
    
    if (userRole === "kauz-employee") {
      items = [...items, ...navigationItems.kauz];
    }
    
    items = [...items, ...navigationItems.settings];
    return items;
  };

  return (
    <aside className={cn(
      "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-border transition-all duration-300 z-40 shadow-sm",
      isOpen ? "w-64" : "w-16"
    )}>
      <nav className="p-4 space-y-2">
        {getNavItems().map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-smooth group",
                "hover:bg-gray-50 hover:text-primary",
                "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              {isOpen && (
                <span className="font-medium truncate">{item.label}</span>
              )}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}