const LibFinePay = () => {

  return (
    <div className="max-w-md mx-auto bg-blue-100 p-6 mt-5 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Pay Library Fine</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <select
              name="userType"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
              <option value="regular">Lost Fine</option>
              <option value="admin">Late Fine</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount Payable
          </label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Amount"
          />
        </div>
        <div className="max-w-md mx-auto mt-4 flex items-center">
          <p className="text-red-500 text-2xl font-bold bg-red-200 rounded-lg p-2">
            Scan RFID Card
          </p>
          <button
            type="button"
            className="w-[40%] bg-blue-500 text-white ml-8 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default LibFinePay;
