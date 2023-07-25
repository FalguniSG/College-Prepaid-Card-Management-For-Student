import ViewAdmin from "../../components/AdminProfileView";
import Sidebar from "../../components/Sidebar";

const profile = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5"> 
            <Sidebar /> 
        </div>
        <div className="w-4/5 p-6">
          <ViewAdmin />
       
        </div>
      </div>
    );
  };
  
  export default profile;
  