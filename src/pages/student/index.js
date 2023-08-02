
import { useUser } from "@/hooks/user";
import SidebarUser from "../../components/SidebarUser";
import UserProfileView from "../../components/UserProfileView";
import { useUserSearchContext } from "@/contexts/usersSearchContext";
import { useGetUsers } from "@/hooks/adminGetUsers";
import { useEffect } from "react";

const Profile = () => {
  const { data } = useUser({ middleware: "auth" })
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
        <UserProfileView />

      </div>
    </div>
  );
};

export default Profile;
