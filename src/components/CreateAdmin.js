import { useAdminTypes } from "@/hooks/admin_type";
import { useUser } from "@/hooks/user";
import { post } from "@/lib/axios";
import { useState } from "react";

const CreateAdmin = () => {
  const { data: user, isLoading: userLoading } = useUser({ middleware: "auth" })
  const { data: admin_types } = useAdminTypes()

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    admin_type: "",
    email: "",
    phone: "",
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
      first_name: "",
      last_name: "",
      admin_type: "",
      email: "",
      phone: "",
      submit: false
    })
  }

  const createUser = async (e) => {

    if (formData?.submit) {
      await post({
        postendpoint: "/admin/create_admin", postData: formData, config: {
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
          <label className="block text-sm font-medium text-gray-700">User Type</label>
          <select
            name="admin_type"
            value={formData?.admin_type}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="" disabled >Select Admin Type</option>
            {admin_types?.data?.map((types, ind) => (
              <option key={"type " + ind} value={types?.id}>{types?.admin_type_name}</option>
            ))}

          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData?.first_name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="First name"
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
            placeholder="Surname"
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
            placeholder="someone@email.com"
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
            placeholder="+8801xxxxxxxxx"
          />
        </div>


        <button
          type="submit"
          onClick={e=>{
            e.stopPropagation()
            setFormData({
              ...formData,
              submit: true
            })
          }}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateAdmin;
