
import SwitcherThree from "./SwitcherThree";

const UsersTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                User Type
              </th>
              <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                ID & Joining Semester
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Name
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Card Number
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Balance
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Actions
              </th>
              <th className="py-4 px-4 font-medium text-black ">
                Account Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-gray">
                  Student
                </h5>
                <p className="text-sm">Summer '19</p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-gray">
                  16202024
                </h5>
                <p className="text-sm">Summer '19</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-gray"> Falguni Sengupta</p>
              </td>
              
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                 1528555621
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                 62.95
                </p>
              </td>
              <td className="border-b underline text-teal-800 border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className=" flex-col items-center ">
                  <button className="underline underline-offset-2  hover:text-primary">
                    Recharge
                  </button>
                  <button className="underline underline-offset-2 hover:text-primary">
                    Issue/Reissue Card
                  </button>
                  <button className="underline underline-offset-2 hover:text-primary">
                    View Transactions
                  </button>
                </div>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                    <SwitcherThree />
                </p>
              </td>
            </tr>        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
