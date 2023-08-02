import { useUser } from "@/hooks/user";

const AdminProfileView = () => {
  const { data, isLoading } = useUser({ middleware: "auth" })
  if (isLoading) {
    return "Loading..."
  } else {
    return (
      <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">

        <h2 className="text-xl font-semibold mb-4">My Profile</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <p className="mt-1 p-2 w-full border rounded-md">{data?.data?.first_name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <p className="mt-1 p-2 w-full border rounded-md">{data?.data?.last_name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 p-2 w-full border rounded-md">{data?.data?.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone:</label>
          <p className="mt-1 p-2 w-full border rounded-md">{data?.data?.phone}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Account Type:</label>
          <p className="mt-1 p-2 w-full border rounded-md">{data?.data?.type}</p>
        </div>
        {/* Add more profile details as needed */}
      </div>
    )
  }
}


export default AdminProfileView;
