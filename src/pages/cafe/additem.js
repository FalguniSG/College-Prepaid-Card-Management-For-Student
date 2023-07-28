import CafeItemInput from "../../components/AddItem";
import AddItem from "../../components/AddItem";
import SidebarCafe from "../../components/SidebarCafe";

const NewItem = () => {
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
