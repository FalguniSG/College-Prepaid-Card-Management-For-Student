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
          <label className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter RFID Card Number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Amount to Recharge"
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
            Recharge
          </button>
        </div>
      </form>
    </div>
  );
};

export default RFIDCardRechargeForm;
