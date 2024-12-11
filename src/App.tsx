import Dashboard from "./components/dashboard"
import Sidebar from "./components/sidebar"
import TopNav from "./components/topNav"



function App() {

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-1 bg-slate-100 ms-64">
        <TopNav />
        <main className="p-8 h-[calc(100vh-4rem)]">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
