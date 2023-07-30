const UserProfileView = ({ user }) => {
  return (
    <div className=" mx-auto bg-white p-5 shadow-md rounded-md">
      <div className="flex flex-col items-center justify-center">
        <div className="flex-1/2 shadow-lg p-10">
          <h1 className="text-2xl font-bold text-blue-900">Personal Details</h1>
          <h2 className="text-xl font-semibold">Name: Tahsin Mim</h2>
          <p className="text-xl text-gray-600">ID: 18102015</p>
          <p className="text-xl text-gray-600">Email ID: amitumi@gmail.com </p>
          <p className="text-xl text-gray-600">Phone Number: 01711989745</p>
        </div>

        <div className="flex-1/2  shadow-lg p-10">
          <h1 className="text-2xl font-bold text-blue-900">Guardian Information</h1>
          <p className="text-xl text-gray-600">Father's Name: Dad</p>
          <p className="text-xl text-gray-600">Mother's Name: Mom</p>
          <p className="text-xl text-gray-600">Phone Number: 01755874351</p>
        </div>

        <div className="flex-1/2  shadow-lg p-10">
          <h1 className="text-2xl font-bold text-blue-900">RFID Card Information</h1>
          <h2 className="text-xl font-semibold">Card Number : 5842153253261</h2>
          <p className="text-xl text-gray-600">Balance: 1550TK</p>
        </div>
      </div>

    </div>
  );
};

export default UserProfileView;
