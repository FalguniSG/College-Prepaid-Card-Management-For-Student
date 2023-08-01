import { useUserContext } from "@/contexts/usersSearchContext";
import SwitcherThree from "./SwitcherThree";
import { useEffect, useState } from "react";


const UsersTable = () => {

  const { userData } = useUserContext();
  const [userSearchData, setUserSearchData] = useState([])


  useEffect(() => {
    if (Array.isArray(userData?.data)) {
      setUserSearchData(userData?.data)
    } else if (userData != undefined) {
      setUserSearchData([userData?.data])
    } else {
      setUserSearchData([])
    }
  }, [userData])


  return (
    <div className="rounded-sm border border-stroke bg-white m-4 px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                User Type
              </th>
              <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                ID & Joining Semester
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Name
              </th>
              {/* <th className="py-4 px-4 font-medium text-black ">
                Card Number
              </th> */}
              <th className="py-4 px-4 font-medium text-black ">
                Balance
              </th>
              {/* <th className="py-4 px-4 font-medium text-black ">
                Actions
              </th> */}
              <th className="py-4 px-4 font-medium text-black ">
                Account Status
              </th>
            </tr>
          </thead>


          <tbody>
            {
              userSearchData?.map((data, ind) => (
                <tr key={"search_result" + ind}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                    <h5 className="font-medium text-black dark:text-gray">
                      Student
                    </h5>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                    <h5 className="font-medium text-black dark:text-gray">
                      {data?.student_id}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 k">
                    <p className="text-black dark:text-gray"> {data?.first_name + " " + data?.last_name}</p>
                  </td>

                  {/* <td className="border-b border-[#eee] py-5 px-4 ">
                  <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                    {data?.rfid}
                  </p>
                </td> */}
                  <td className="border-b border-[#eee] py-5 px-4 ">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                      Tk. {data?.balance}/-
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 ">
                    <SwitcherThree />
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
