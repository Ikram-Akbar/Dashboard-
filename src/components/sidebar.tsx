import Logo from "./logo";
import SidebarItems from "./sidebar-items";
import menus from "./menu";

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <aside>
      <div className={`h-16 flex items-center p-4 ${collapsed ? "justify-center" : "gap-2"}`}>
        <Logo height={40} />
        {!collapsed && (
          <div>
            <h4 className="font-bold text-lg leading-6">Wecommerce</h4>
            <p className="text-sm leading-5">Admin Dashboard</p>
          </div>
        )}
      </div>
      <ul className="p-4 space-y-1">
        {menus.map((item, index) => (
          <SidebarItems
            key={index}
            name={collapsed ? "" : item.name}
            icon={item.icon}
            isActive={item.isActive}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
