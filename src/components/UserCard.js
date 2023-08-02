import { useAuthContext } from "@/contexts/authContext";
import { useUserSearchContext } from "@/contexts/usersSearchContext";

const UserCard = () => {
  const { userSearchData, setUserSearchData } = useUserSearchContext()
  const { authData } = useAuthContext()



  return (
    userSearchData &&
    <div className="max-w-md mx-auto bg-gray-100 m-4 p-6 shadow-md rounded-md" >
      <div className="flex items-center justify-center">

        {!userSearchData?.data ? userSearchData :

          <div>
            <h2 className="text-xl font-semibold">Name: {userSearchData?.data?.first_name + " " + userSearchData?.data?.last_name}</h2>
            <p className="text-xl text-gray-600">ID: {userSearchData?.data?.student_id}</p>
            {
              (authData?.data?.type == "accounts" || authData?.data?.type == "student")  && <p className="text-xl text-gray-600">Tk.{userSearchData?.data?.balance}/-</p>
            }
          </div>
        }
      </div>
    </div>
  )
}


export default UserCard;
