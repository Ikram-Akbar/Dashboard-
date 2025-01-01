import { useContext } from "react";
import ActiveMenuContext from "../contexts/active-menu-context";

export default function Dashboard() {
  const context = useContext(ActiveMenuContext);

  if (!context) {
    throw new Error("ActiveMenuContext is not provided");
  }

  const {menuName } = context;
  return (
    <>
      {menuName.length <= 0 ?<><p className="font-semibold text-xl">Noting is Selected</p></> : <><h2 className="font-semibold text-xl">{menuName}</h2>

<div className="mt-4 h-96 border-4 rounded border-dashed border-slate-200 p-6"></div></> }
    </>
  );
}
