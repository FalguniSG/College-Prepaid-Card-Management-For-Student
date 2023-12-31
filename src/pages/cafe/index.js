import { useUser } from "@/hooks/user";
import Cart from "../../components/CafeCart";
import SearchUser from "../../components/SearchUser";
import SidebarCafe from "../../components/SidebarCafe";
import UserCard from "../../components/UserCard";

const Sell = () => {
  const { data: user, isLoading: userLoading } = useUser({ middleware: "auth" })

  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <SidebarCafe />
      </div>
      <div className="w-4/5 p-6">
        <SearchUser />

        <UserCard />
        <Cart />

      </div>
    </div>
  );
};

export default Sell;
