import React, { useContext } from "react";
import { IconType } from "react-icons";
import clsx from "clsx";
import SidebarContext from "../contexts/sidebar-context";
import ActiveMenuContext from "../contexts/active-menu-context";

type SidebarItemProps = {
  name: string;
  icon?: IconType;
};

export default function SidebarItem({ name, icon }: SidebarItemProps) {
  const { isCollapsed } = useContext(SidebarContext) || {};
  const context = useContext(ActiveMenuContext);

  if (!context) {
    throw new Error("ActiveMenuContext is not provided");
  }

  const { isActiveMenu, setIsActiveMenu, setMenuName } = context;
  const handleMenuButton = (name:string)=>{
    setIsActiveMenu(name);
    setMenuName(name);
  }

  return (
    <li
      className={clsx(
        "group hover:text-primary-500 cursor-pointer p-1 rounded-full transition-colors duration-150",
        { "bg-primary-50 text-primary-500": isActiveMenu === name }
      )}
      onClick={() => handleMenuButton(name)}
      role="menuitem"
      aria-current={isActiveMenu === name ? "page" : undefined}
    >
      {icon ? (
        <a href="#" className="flex gap-2 items-center text-sm">
          <span
            className={clsx(
              "h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full",
              {
                "bg-primary-500 text-white": isActiveMenu === name,
                "group-hover:bg-primary-500 group-hover:text-white":
                  isActiveMenu !== name,
              }
            )}
          >
            {React.createElement(icon, { className: "h-5 w-5" })}
          </span>
          {!isCollapsed && <span>{name}</span>}
        </a>
      ) : (
        !isCollapsed && <span className="text-xs tracking-wider uppercase p-2">{name}</span>
      )}
    </li>
  );
}
