
import SidebarUser from "../../components/SidebarUser";
import UserProfileView from "../../components/UserProfileView";

const Profile = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5"> 
            <SidebarUser /> 
        </div>
        <div className="w-4/5 p-6">
           <UserProfileView />
       
        </div>
      </div>
    );
  };
  
  export default Profile;
  