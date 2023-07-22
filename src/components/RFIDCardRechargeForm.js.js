const RFIDCardRechargeForm = () => {
  const handleScanButtonClick = () => {
    // Implement the RFID card scanning functionality here
    // This function should interact with your RFID scanning device/software
  };

  const handleRechargeSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and recharge logic here
  };

  return (
    <div className="max-w-md mx-auto bg-blue-100 p-6 mt-5 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">RFID Card Recharge</h2>
      <form onSubmit={handleRechargeSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter RFID Card Number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Amount to Recharge"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            type="button"
            onClick={handleScanButtonClick}
            className="w-1/2 bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          >
            Scan RFID Card
          </button>
          <button
            type="submit"
            className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Recharge Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RFIDCardRechargeForm;
