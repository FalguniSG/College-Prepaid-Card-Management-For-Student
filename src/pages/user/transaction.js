import SidebarUser from "../../components/SidebarUser";
import TransactionHistory from "../../components/TransactionHistoryAdmin";
import UserCard from "../../components/UserCard";

const TransactionHistoryView = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/5"> 
          <SidebarUser /> 
      </div>
      <div className="w-4/5 p-6">
        <UserCard />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default TransactionHistoryView;
