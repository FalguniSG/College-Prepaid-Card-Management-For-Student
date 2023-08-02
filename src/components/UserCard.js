import { useAuthContext } from "@/contexts/authContext";
import { useUserSearchContext } from "@/contexts/usersSearchContext";

const UserCard = () => {
  const { userData } = useUserSearchContext()
  const { authData } = useAuthContext()


  console.log(authData)
  if (!userData?.data) {
    return <>{""}</>
  } else {
    return (
      <div className="max-w-md mx-auto bg-gray-100 m-4 p-6 shadow-md rounded-md" >
        <div className="flex items-center justify-center">

          <div>
            <h2 className="text-xl font-semibold">Name: {userData?.data?.first_name + " " + userData?.data?.last_name}</h2>
            <p className="text-xl text-gray-600">ID: {userData?.data?.student_id}</p>
            {authData?.data?.type == "accounts" && <p className="text-xl text-gray-600">Balance: 1550TK</p>}

          </div>
        </div>

      </div>
    )
  }
}

export default UserCard;
