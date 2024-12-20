import React from "react";
import { IconType } from "react-icons";

type SidebarItemProps = {
  name: string;
  icon?: IconType;
  isActive?: boolean;
};

const SidebarItems = ({
    name,
    icon,
    isActive,
  }: SidebarItemProps) => {
    if (icon) {
        return (
          <li
            className="group hover:bg-primary-50 hover:text-primary-500 data-[active=true]:bg-primary-50 data-[active=true]:text-primary-500 transition-colors duration-150 cursor-pointer p-1 rounded-full"
            data-active={isActive}
          >
            <a href={"#"} className="flex gap-2 items-center text-sm ">
              <span className="h-10 w-10 group-hover:bg-primary-500 group-data-[active=true]:bg-primary-500 flex items-center justify-center rounded-full transition-colors duration-150">
                {React.createElement(icon, {
                  className:
                    "h-5 w-5 group-hover:text-white group-data-[active=true]:text-white transition-colors duration-150",
                })}
              </span>
              {name}
            </a>
          </li>
        );
      }
    
      return <li className="text-xs tracking-wider uppercase p-2">{name}</li>;
};

export default SidebarItems;