import { useUserSearchContext } from '@/contexts/usersSearchContext';
import { useGetUsers } from '@/hooks/adminGetUsers';
import { useEffect, useState } from 'react';

const SearchUser = () => {
  const { userSearchData } = useUserSearchContext()
  const [searchKey, setSearchKey] = useState(userSearchData?.data ? "id" : null)
  const [searchTerm, setSearchTerm] = useState(userSearchData?.data?.id)
  const [submit, setSubmit] = useState(false)

  const { data, isLoading, mutate } = useGetUsers(
    {
      postData: submit ?
        {
          user_type: "student",
          [searchKey]: searchTerm
        } : ""
    }
  )

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">

      <div className=" flex flex-row mb-4">
        {/* <label className="block text-sm font-medium text-gray-700"></label> */}
        <select
          value={searchKey}
          className="mt-1 p-2x text-gray-500 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          name='searchTerm'
          onChange={(e) => {
            setSubmit(false)
            setSearchKey(e.currentTarget.value)
          }}>
          <option value={""}>Select</option>
          <option value={"id"}>Id</option>
          <option value={"first_name"}>First Name</option>
          <option value={"last_name"}>Last Name</option>
          <option value={"email"}>Email</option>
          <option value={"phone"}>Phone</option>
        </select>
        <input
          type="text"
          onChange={(e) => {
            setSearchTerm(e.currentTarget.value)
            setSubmit(false)
          }}
          value={[searchKey].searchTerm}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
        />

      </div>
      <button
        type="button"
        onClick={() => {
          setSubmit(true)
        }}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchUser;
