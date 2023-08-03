import { useTransactionTypes } from "@/hooks/payment_types";
import { useAuthContext } from "@/contexts/authContext";
import { useState } from "react";
import { useUserSearchContext } from "@/contexts/usersSearchContext";
import { useReadRfid } from "@/hooks/read_rfid";
import { post } from "@/lib/axios";
import { useEffect } from "react";

const AccountsPayment = () => {
  const { rfidData, isScanning, scanRfid } = useReadRfid()
  const { authData } = useAuthContext()
  const { userSearchData } = useUserSearchContext()

  const { data: transaction_types, isLoading: transactionTypesLoading } = useTransactionTypes({ params: { admin_type_id: authData?.data?.admin_type } })

  const [formData, setFormData] = useState({
    student_id: userSearchData?.data?.student_id,
    rfid: rfidData,
    amount: "",
    transaction_desc_id: "",
    submit: false
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      submit: false,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  useEffect(() => {
    if (rfidData) {
      setFormData({ ...formData, rfid: rfidData })
    }
  }, [rfidData])

  useEffect(() => {
    if (userSearchData?.data?.student_id) {
      setFormData({ ...formData, student_id: userSearchData?.data?.student_id })
    }
  }, [userSearchData])


  const handleRechargeSubmit = async (e) => {
    e.preventDefault();
    await post({
      postendpoint: "/accounts/tuition_payments", postData: formData, config: {
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        }
      }
    })
      .then((res) => {
        alert(res?.data?.message)
      })
      .catch(error => {
        alert(error?.response?.data?.message)
      })
  };

  return (
    <div className="max-w-md mx-auto bg-blue-100 p-6 mt-5 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Accounts Payment</h2>
      <form onSubmit={handleRechargeSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Payment</label>
          <select
            name="transaction_desc_id"
            onChange={handleInputChange}
            value={formData?.transaction_desc_id}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="" disabled>Select</option>
            {transaction_types?.data?.map((trans_d, ind) => (
              <option key={"td_" + ind} value={trans_d?.id}>{trans_d?.transaction_description}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 ">
            Card Number
          </label>
          <div
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="RFID Card Number"
            disabled
          >{rfidData ?? "XXXXXXXXXX"}</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            onChange={handleInputChange}
            min={0}
            value={formData?.amount}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Amount to Pay"
            required
          />
        </div>
        <div className="max-w-md mx-auto mt-4 flex items-center">
          {
            isScanning ? "Scan Card" : <button className="text-white transition-colors duration-200 transform bg-gradient-to-b from-sky-800 to-emerald-900 rounded-md ml-5 px-5 py-2 text-xl hover:text-blue-300 focus:outline-none" type="button"
              onClick={(e) => {
                setFormData({ ...formData, submit: false })
                scanRfid()
              }}>
              Scan RFID Card
            </button>
          }
          {rfidData &&
            <button
              type="submit"
              className="w-[40%] bg-blue-500 text-white ml-8 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={(e) => {
                e.stopPropagation()
                setFormData({ ...formData, submit: true })
              }}
            >
              Payment
            </button>
          }
        </div>
      </form>
    </div>
  );
};

export default AccountsPayment;
