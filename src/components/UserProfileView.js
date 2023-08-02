import { useAuthContext } from "@/contexts/authContext";
import { useUserSearchContext } from "@/contexts/usersSearchContext";

const UserProfileView = ({ }) => {
  const { authData } = useAuthContext()
  const { userSearchData } = useUserSearchContext()

  return (
    <div className=" mx-auto bg-white p-5 shadow-md rounded-md">
      <div className="flex flex-col items-center justify-center">
        <div className="flex-1/2 shadow-lg p-10">
          <h1 className="text-2xl font-bold text-blue-900">Personal Details</h1>
          <h2 className="text-xl font-semibold">Name: {authData?.data?.first_name + " " + authData?.data?.last_name}</h2>
          <p className="text-xl text-gray-600">ID: {authData?.data?.student_id}</p>
          <p className="text-xl text-gray-600">Email ID: {authData?.data?.email} </p>
          <p className="text-xl text-gray-600">Phone Number: {authData?.data?.phone}</p>
        </div>

        <div className="flex-1/2  shadow-lg p-10">
          <h1 className="text-2xl font-bold text-blue-900">Guardian Information</h1>
          <p className="text-xl text-gray-600">Father&apos;s Name: {authData?.data?.fathers_name ? authData?.data?.fathers_name : "N/A"}</p>
          <p className="text-xl text-gray-600">Mother&apos;s Name: {authData?.data?.mothers_name ? authData?.data?.mothers_name : "N/A"}</p>
          <p className="text-xl text-gray-600">Phone Number: {authData?.data?.guardian_phone ? authData?.data?.guardian_phone : ""}</p>
        </div>

        <div className="flex-1/2  shadow-lg p-10">
          <h1 className="text-2xl font-bold text-blue-900">RFID Card Information</h1>
          <h2 className="text-xl font-semibold">Card Number : {authData?.data?.rfid}</h2>
          <p className="text-xl text-gray-600">Balance: Tk.{userSearchData?.data?.balance}</p>
        </div>
      </div>

    </div>
  );
};

export default UserProfileView;
