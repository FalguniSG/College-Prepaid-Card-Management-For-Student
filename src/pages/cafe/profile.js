import ViewAdmin from "../../components/AdminProfileView";
import SidebarCafe from "../../components/SidebarCafe";

const Profile = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5"> 
            <SidebarCafe /> 
        </div>
        <div className="w-4/5 p-6">
            <ViewAdmin />
       
        </div>
      </div>
    );
  };
  
  export default Profile;
  