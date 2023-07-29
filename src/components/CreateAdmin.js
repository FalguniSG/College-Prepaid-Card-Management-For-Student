const CreateAdmin = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Create New User</h2>
      <form>
          <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">User Type</label>
          <select
              name="userType"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
              <option value="regular">Accounts</option>
              <option value="admin">Library</option>
              <option value="manager">Cafeteria</option>
          </select>
          </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter user's name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter user's name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter user's email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter user's phone number"
          />
        </div>
       
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateAdmin;
