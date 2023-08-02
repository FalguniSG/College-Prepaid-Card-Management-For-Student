import { useUser } from "@/hooks/user";
import ViewAdmin from "../../components/AdminProfileView";
import Sidebar from "../../components/Sidebar";

const Profile = () => {
  const {data} = useUser({middleware: "auth"})

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

export default Profile;
