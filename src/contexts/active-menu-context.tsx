import  { createContext, useState, ReactNode } from "react";

type ActiveMenuContextType = {
  isActiveMenu: string;
  menuName:string;
  setIsActiveMenu: (name: string) => void;
  setMenuName: (name: string) => void;
};

const ActiveMenuContext = createContext<ActiveMenuContextType | undefined>(undefined);

export const ActiveMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isActiveMenu, setIsActiveMenu] = useState<string>("");
  const [menuName, setMenuName] = useState<string>("")

  return (
    <ActiveMenuContext.Provider value={{ isActiveMenu, setIsActiveMenu, menuName, setMenuName }}>
      {children}
    </ActiveMenuContext.Provider>
  );
};

export default ActiveMenuContext;
