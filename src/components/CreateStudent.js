import { useUser } from "@/hooks/user";
import { post } from "@/lib/axios";
import { useState } from "react";

const CreateStudent = () => {
  const { data: user, isLoading: userLoading } = useUser({ middleware: "auth" })
  const [formData, setFormData] = useState({
    student_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    fathers_name: "",
    mothers_name: "",
    guardian_phone: "",
    rfid: 1565565225655,
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
      rfid: 1565565225655,
      submit: false
    })
  }

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
        <p className="text-red-600 m-12 ml-[35%] text-xl font-bold ">Scan a Card</p>

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
