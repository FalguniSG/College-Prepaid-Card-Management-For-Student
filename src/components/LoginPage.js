import { useUser } from "@/hooks/user"
import { post } from "@/lib/axios"
import { useState } from "react"

const LoginPage = () => {
  const [userType, setUserType] = useState(null)

  const userTypeChange = (e) => {
    setUserType(e.currentTarget.value)
  }

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { data: user, isLoading: userLoading, mutate: userMutate } = useUser({
    middleware: "guest", redirectIfAuthenticated: "/"
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleFormSubmit = async () => {
    await post({
      postendpoint: `/login?u_t=${userType}`, postData: formData, config: {
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        }
      }
    }).then(() => {
      userMutate()
    })
      .catch(error => {
        alert(error?.response?.data?.message)
      })
  }
  if (user) {
    return ""
  } else {
    return (
      <>
        <form className="mt-6" onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}>
          <div className="flex justify-center items-center">
            <label htmlFor="admin_typ" className="m-5"><input type="radio" name="radio-group" value={"admin"} onChange={userTypeChange} required /> Admin</label>
            <label htmlFor="user_type" className="m-5"><input type="radio" name="radio-group" value={"student"} onChange={userTypeChange} required /> User</label>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold "
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 bg-white text-black border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
              value={formData?.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold "
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 bg-white text-black border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              value={formData?.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-2">
            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-red-600 focus:outline-none focus:bg-gray-600" type="submit">
              Login
            </button>
          </div>
        </form>
      </>
    )
  }
}

export default LoginPage