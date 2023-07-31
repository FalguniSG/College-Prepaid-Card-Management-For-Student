import Fine from "../../components/Library/Fine";
import LostFine from "../../components/Library/LostFIne";
import SidebarLib from "../../components/SidebarLib";

const SetFine = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5">
          <SidebarLib />
        </div>
        <div className="w-4/5 p-6">
          <Fine />
          <LostFine />
        </div>
      </div>
    );
  };
  
  export default SetFine;
  