import { useUser } from "@/hooks/user";
import SearchUser from "../../components/SearchUser";
import Sidebar from "../../components/Sidebar";
import TransactionHistory from "../../components/TransactionHistoryAdmin";
import UserCard from "../../components/UserCard";

const TransactionHistoryView = () => {
  const {data} = useUser({middleware: "auth"})

  return (
    <div className="flex flex-row">
      <div className="w-1/5"> 
          <Sidebar /> 
      </div>
      <div className="w-4/5 p-6">
        <SearchUser />
        <UserCard />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default TransactionHistoryView;
a