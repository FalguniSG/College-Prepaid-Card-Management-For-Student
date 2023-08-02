import { useUser } from "@/hooks/user";
import RechargeHistory from "../../components/RechargeHistory";
import SidebarUser from "../../components/SidebarUser";
import UserCard from "../../components/UserCard";

const RechargeHistoryView = () => {
  const { data } = useUser({ middleware: "auth" })

  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <SidebarUser />
      </div>
      <div className="w-4/5 p-6">
        <UserCard />
        <RechargeHistory />
      </div>
    </div>
  );
};

export default RechargeHistoryView;
