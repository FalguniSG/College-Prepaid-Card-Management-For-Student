
const TransactionHistory = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white m-4 px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                Transaction ID
              </th>
              <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                Date & Time
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Type
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Amount
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Payment Method
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Counter
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Remaining Balance
              </th>
            </tr>
          </thead>
          
          
          <tbody>
            <tr>
            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-gray">
                  #2022101
                </h5>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-gray">
                  24.07.23 
                </h5>
                <p className="text-sm">16:04</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-gray">Recharge</p>
              </td>
              
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                 1500
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                 Success
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                 Cash
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                 Accounts
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                 1660
                </p>
              </td>
              
              
            </tr>        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
