import { useState } from "react";
import Dashboard from "./components/dashboard";
import Sidebar from "./components/sidebar";
import TopNav from "./components/topNav";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="w-full flex">
      <div className={`hidden sm:block`}>
        <Sidebar collapsed={isSidebarCollapsed} />
      </div>
      <div
        className="flex-1 bg-slate-100">
        <TopNav onToggleSidebar={handleToggleSidebar} />
        <main className="p-8 h-[calc(100vh-4rem)]">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
