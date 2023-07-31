const CafeStockTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white m-4 px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
      <div className="flex-1 mr-2">
        <input
          type="text"
          
          className="block w-1/2 ml-[25%] mb-5 p-2 shadow-lg border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search Item..."
        />
      </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                Item
              </th>
              <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                Price/TK
              </th>
              <th className="py-4 px-4 font-medium text-black ">Quantity</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border-b text-left border-[#eee] ">
                <p className="text-black  px-8"> Biryani</p>
              </td>

              <td className="border-b border-[#eee]  px-10">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                  200
                </p>
              </td>
              <td className="border-b border-[#eee] px-10">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                  30
                </p>
              </td>
              <td className="border-b border-[#eee] px-10">
                <button
                  type="button"
                  className="w-full bg-blue-500 text-white py-2 px-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Edit
                </button>
              </td>
              <td className="border-b border-[#eee] ">
                <button
                  type="button"
                  className="w-full bg-blue-500 text-white py-2 px-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CafeStockTable;
