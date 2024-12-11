import Logo from "./logo";
import SidebarItems from "./sidebar-items";
import menus from "./menu";



const Sidebar = () => {
  return (
    <aside className="w-64 h-screen shadow absolute bg-white">
      <div className="h-16 flex gap-2 items-center p-4">
        <Logo height={40} />
        <div>
          <h4 className="font-bold text-lg leading-6 ">Wecommerce</h4>
          <p className="text-sm leading-5 ">Admin Dashboard</p>
        </div>
      </div>
      <ul className="p-4 space-y-1">
        {menus.map((item, index) => (
          <SidebarItems
            key={index}
            name={item.name}
            icon={item.icon}
            isActive={item.isActive}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
