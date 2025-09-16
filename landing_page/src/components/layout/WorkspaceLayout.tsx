import { useState } from "react";
import { ChatSidebar } from "../chat/ChatSidebar";
import { ChatMain } from "../chat/ChatMain";

export const WorkspaceLayout = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <ChatSidebar 
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        selectedChat={selectedChat}
        onSelectChat={setSelectedChat}
      />
      <ChatMain 
        selectedChat={selectedChat}
        sidebarCollapsed={sidebarCollapsed}
      />
    </div>
  );
};