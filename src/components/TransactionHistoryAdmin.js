import { useAuthContext } from "@/contexts/authContext";
import { useUserSearchContext } from "@/contexts/usersSearchContext";
import { useAdminTransactions } from "@/hooks/admin_transactions";
import { useTransactionTypes } from "@/hooks/payment_types";
import { useEffect, useState } from "react";

const TransactionHistory = () => {
  const { authData } = useAuthContext()
  const { userSearchData } = useUserSearchContext()

  const [queryParams, setQueryParams] = useState({
    admin_type: authData?.data?.admin_type_name,
    admin_type_id: authData?.data?.admin_type,
    student_id: "",
    transaction_desc_id: "",
    from_date: "",
    to_date: ""
  })

  const { data: transaction_types, isLoading: transactionTypesLoading } = useTransactionTypes({ params: { admin_type_id: queryParams?.admin_type_id } })
  const { data: transaction_data, isLoading: transactionLoading, mutate: mutateTransaction } = useAdminTransactions({ queryParams: queryParams })

  const handleInputChange = e => {
    setQueryParams({
      ...queryParams,
      [e.currentTarget.name]: e.target.value
    })
  }


  useEffect(() => {
    if (userSearchData?.data?.student_id) {
      setQueryParams({ ...queryParams, student_id: userSearchData?.data?.student_id })
    }
  }, [userSearchData])

  useEffect(() => {
    if (authData) {
      setQueryParams({ ...queryParams, admin_type: authData?.data?.admin_type_name, admin_type_id: authData?.data?.admin_type })
    }
  }, [authData])


  return (

    <div className="rounded-sm border border-stroke bg-white m-4 px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-row w-full ml-40">
        <select
          name="transaction_desc_id"
          value={queryParams?.transaction_desc_id}
          className="mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 w-[30%]"
          onChange={(e) => {
            handleInputChange(e)
            mutateTransaction()
          }}
          required
        >
          <option value="" disabled>Select</option>
          {transaction_types?.data?.map((trans_d, ind) => (
            <option key={"td_" + ind} value={trans_d?.id}>{trans_d?.transaction_description}</option>
          ))}
        </select>

        <div className="flex flex-row w-[40%]">
          <label className="mx-5 p-1"> From <input type="date" className="border" /></label>
          <label className="mx-5 p-1">To <input type="date" className="border" /></label>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className=" py-4 px-1 font-medium text-black  xl:pl-11">
                Transaction ID
              </th>
              <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                Date & Time
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Amount
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Payment Description
              </th>
            </tr>
          </thead>

          <tbody>
            {transaction_data?.data?.map((tr_data, ind) => (
              <tr key={"tr_data_" + ind}>
                <td className="border-b border-[#eee] py-4 px-12 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-gray">
                    {ind + 1}
                  </h5>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-gray">
                    {tr_data?.payment_date.split(" ")[0]}
                  </h5>
                  <p className="text-sm">{tr_data?.payment_date.split(" ")[1]}</p>
                </td>


                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                    {tr_data?.amount}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                    {tr_data?.transaction_description}
                  </p>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
