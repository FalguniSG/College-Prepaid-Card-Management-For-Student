import { useUser } from "@/hooks/user.js";
import SearchUser from "../../components/SearchUser.js";
import SidebarAcc from "../../components/SidebarAcc.js";
import UsersTable from "../../components/UsersTable.js";



const Action = () => {
  const { data } = useUser({ middleware: "auth" })

  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <SidebarAcc />
      </div>
      <div className="w-4/5 p-6">
        <SearchUser />
        <UsersTable />

      </div>
    </div>
  );
};

export default Action;
