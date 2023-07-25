const ViewAdmin = ({ user }) => {
    return (
        <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
          
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <p className="mt-1 p-2 w-full border rounded-md">Tahsin</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <p className="mt-1 p-2 w-full border rounded-md">Mim</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 p-2 w-full border rounded-md">mim@ciu.com</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone:</label>
            <p className="mt-1 p-2 w-full border rounded-md">0178569541</p>
          </div>
          {/* Add more profile details as needed */}
        </div>
      );
    };
    
  
  export default ViewAdmin;
  