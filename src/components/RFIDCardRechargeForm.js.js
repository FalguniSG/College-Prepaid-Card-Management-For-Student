import { useUserSearchContext } from "@/contexts/usersSearchContext";
import { useReadRfid } from "@/hooks/read_rfid";
import { post } from "@/lib/axios";
import { useState } from "react";
import { useEffect } from "react";


const RFIDCardRechargeForm = () => {
  const { rfidData, isScanning, scanRfid } = useReadRfid()
  const { userSearchData } = useUserSearchContext()

  const [formData, setFormData] = useState({
    rfid: rfidData,
    student_id: userSearchData?.data?.student_id,
    recharge_amount: "",
    submit: false
  })

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

  const handleRecharge = (e) => {
    e.preventDefault()

    if (formData?.submit) {
      post({
        postendpoint: "/accounts/recharge_card", postData: formData, config: {
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
          }
        }
      }).then((res) => {
        alert(res?.data?.message)
      }).catch((error) => {
        alert(error?.response?.data?.message)
      })
    }
  }

  return (
    <div className="max-w-md mx-auto bg-blue-100 p-6 mt-5 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">RFID Card Recharge</h2>
      <form onSubmit={(e) => { handleRecharge(e) }}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <div className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300">
            {rfidData ?? "XXXXXXXXXXXXX"}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            onChange={e => {
              setFormData({
                ...formData,
                submit: false,
                recharge_amount: e.currentTarget.value
              })
            }}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Amount to Recharge"
            required
          />
        </div>
        <div className="max-w-md mx-auto mt-4 flex items-center">
          {isScanning ? "Scan Card" : <button className="text-white transition-colors duration-200 transform bg-gradient-to-b from-sky-800 to-emerald-900 rounded-md ml-5 px-5 py-2 text-xl hover:text-blue-300 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation()
              setFormData({ ...formData, submit: false })
              scanRfid()
            }
            }>
            Scan RFID Card
          </button>}
          {
            rfidData &&
            <button
              onClick={(e) => {
                e.stopPropagation()
                setFormData({ ...formData, submit: true })

              }}
              type="submit"
              className="w-[40%] bg-blue-500 text-white ml-8 py-2 px-4 rounded-md"
            >
              Recharge
            </button>}
        </div>
      </form>
    </div>
  );
};

export default RFIDCardRechargeForm;
