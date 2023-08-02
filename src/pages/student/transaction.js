import { useUser } from "@/hooks/user";
import SidebarUser from "../../components/SidebarUser";
import TransactionHistory from "../../components/TransactionHistoryAdmin";
import UserCard from "../../components/UserCard";
import { useUserSearchContext } from "@/contexts/usersSearchContext";
import { useEffect } from "react";
import { useGetUsers } from "@/hooks/adminGetUsers";

const TransactionHistoryView = () => {
  const { data: user, error } = useUser({ middleware: "auth" })

  const { data: searchData, error: searchError, isLoading, mutate } = useGetUsers(
    {
      postData: {
        user_type: "student",
      }
    }
  )

  const { setUserSearchData } = useUserSearchContext()

  useEffect(() => {
    if (searchError) {
      setUserSearchData(searchError?.respose?.data?.message)
    } else if (searchData) {
      setUserSearchData(searchData);
    }
  }, [searchData, searchError, setUserSearchData]);

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
