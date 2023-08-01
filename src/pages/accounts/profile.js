import AdminProfileView from "../../components/AdminProfileView";
import SidebarAcc from "../../components/SidebarAcc";

const Profile = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <SidebarAcc />
      </div>
      <div className="w-4/5 p-6">
        <AdminProfileView />

      </div>
    </div>
  );
};

export default Profile;
