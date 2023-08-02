import { post } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useReadRfid } from "@/hooks/read_rfid";

const CreateStudent = () => {
  const { rfidData, scanRfid, isScanning } = useReadRfid()
  const [formData, setFormData] = useState({
    student_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    fathers_name: "",
    mothers_name: "",
    guardian_phone: "",
    rfid: rfidData,
    submit: false
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      submit: false,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const resetForm = () => {
    setFormData({
      ...formData,
      student_id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      fathers_name: "",
      mothers_name: "",
      guardian_phone: "",
      rfid: "",
      submit: false
    })
  }

  useEffect(() => {
    if (rfidData) {
      setFormData({ ...formData, rfid: rfidData })
    }
  }, [rfidData])

  const createUser = async (e) => {

    if (formData?.submit) {
      await post({
        postendpoint: "/admin/create_student", postData: formData, config: {
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
          }
        }
      }).then((res) => {
        alert(res?.data?.message)
        resetForm()
      }).catch((error) => {
        alert(error?.response?.data?.message)
      })
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Create New User</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        createUser(e)
      }}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ID</label>
          <input
            type="id"
            name="student_id"
            value={formData?.student_id}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter student ID"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData?.first_name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter user's name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData?.last_name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter user's name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter user's email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="number"
            name="phone"
            value={formData?.phone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter user's phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Father&apos;s Name</label>
          <input
            type="text"
            name="fathers_name"
            value={formData?.fathers_name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Father's Name"

          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Mother&apos;s Name</label>
          <input
            type="text"
            name="mothers_name"
            value={formData?.mothers_name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter mother's name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Guardian&apos;s phone number</label>
          <input
            type="text"
            name="guardian_phone"
            value={formData?.guardian_phone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter number"
          />
        </div>

        <div>
          {isScanning ? "Scan Card" :
            <button type="button" className="w-[70%] mb-4 text-white transition-colors duration-200 transform bg-gradient-to-b from-sky-800 to-emerald-900 rounded-md ml-10 px-5 py-2 text-xl hover:text-blue-300 focus:outline-none"
              onClick={(e) => {
                setFormData({ ...formData, submit: false })
                scanRfid()
              }}>Issue RFID Card</button>

          }
          <span className="ml-5">{rfidData}</span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={(e) => {
            setFormData({
              ...formData,
              submit: true
            })
          }}
        >
          Create User
        </button>


        {/* <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Issue RFID Card
        </button> */}
      </form>
    </div>
  );
};

export default CreateStudent;
