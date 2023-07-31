const ReturnBook = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white m-4 px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <div className="w-[50%] mx-auto border-black shadow-lg">
        <input
          type="text"
          placeholder="Search Book..."
          className="w-full px-4 py-2 rounded border"
        />
      </div>
      <div className="max-w-full overflow-x-auto mt-8">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left ">
              <th className=" py-4 px-8 font-medium text-black  "> ISBN</th>
              <th className=" py-4 px-8 font-medium text-black  ">Title</th>
              <th className="py-4 px-4 font-medium text-black ">Publisher</th>
              <th className="py-4 px-4 font-medium text-black ">Lost/Late Fine</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9  ">
                <h5 className="font-medium text-black dark:text-gray">
                  36514541
                </h5>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 ">
                <h5 className="font-medium text-black dark:text-gray">
                  A Kite Runner
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 ">
                <p className="text-black dark:text-gray"> Khaled Hosseini </p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 ">
                <button
                  type="button"
                  className="w-[40%] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Pay 
                </button>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReturnBook;
