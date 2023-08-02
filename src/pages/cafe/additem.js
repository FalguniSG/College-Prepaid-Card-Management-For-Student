import { useUser } from "@/hooks/user";
import CafeItemInput from "../../components/AddItem";
import AddItem from "../../components/AddItem";
import SidebarCafe from "../../components/SidebarCafe";

const NewItem = () => {
  const { data } = useUser({ middleware: "auth" })

  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <SidebarCafe />
      </div>
      <div className="w-4/5 p-6">
        <CafeItemInput />

      </div>
    </div>
  );
};


export default NewItem;
