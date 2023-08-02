import { useUser } from "@/hooks/user";
import SearchUser from "../../components/SearchUser";
import SidebarAcc from "../../components/SidebarAcc";
import TransactionHistory from "../../components/TransactionHistoryAdmin";
import UserCard from "../../components/UserCard";

const Transaction = () => {
  const {data} = useUser({middleware: "auth"})

  return (
    <div className="flex flex-row">
      <div className="w-1/5"> 
          <SidebarAcc /> 
      </div>
      <div className="w-4/5 p-6">
        <SearchUser />
        <UserCard />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Transaction;
