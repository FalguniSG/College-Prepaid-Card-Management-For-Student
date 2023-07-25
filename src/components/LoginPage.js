import { useRouter } from "next/router"
import { useState } from "react"

const LoginPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const submitForm = () => {
    if (formData?.email == "register@email.com" && formData?.password == "12345") {
      router.push("/register/home")
    } else if (formData?.email == "cafe@email.com" && formData?.password == "12345") {
      router.push("/cafe/additem")
    }
  }
  return (
    <>
      <form className="mt-6" onSubmit={e => {
        e.preventDefault()
        submitForm()
      }}>
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

export default LoginPage