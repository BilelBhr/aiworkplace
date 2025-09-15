import { useState } from "react";
import { DashboardLayout, UserRole } from "@/components/dashboard/DashboardLayout";

const Index = () => {
  const [userRole, setUserRole] = useState<UserRole>("simple");

  return (
    <DashboardLayout 
      userRole={userRole} 
      onRoleChange={setUserRole}
    />
  );
};

export default Index;
