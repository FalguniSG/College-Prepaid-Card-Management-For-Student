const UserCard = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 m-4 p-6 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        
        <div>
          <h2 className="text-xl font-semibold">Name: Tahsin Mim</h2>
          <p className="text-xl text-gray-600">ID: 18102015</p>
          <p className="text-xl text-gray-600">Balance: 1550TK</p>

        </div>
      </div>
      {/* Add more user details as needed */}
    </div>
  );
};

export default UserCard;
