import { useState } from 'react';

const SearchUser = () => {
  

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">ID</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter ID/RFID card number"
        />
      </div>
      <button
        type="button"
        onClick={handleSearch}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Search
      </button>

      {searchResult && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Search Result:</h3>
          <p>User ID: {searchResult.id}</p>
          <p>Name: {searchResult.name}</p>
          {/* Display other user information as needed */}
        </div>
      )}
    </div>
  );
};

export default SearchUser;
