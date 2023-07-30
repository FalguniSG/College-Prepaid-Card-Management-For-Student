import SwitcherThree from "./SwitcherThree";

const Booklist = () => {
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
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                ISBN
              </th>
              <th className=" py-4 px-8 font-medium text-black  xl:pl-11">
                Title
              </th>
              <th className="py-4 px-4 font-medium text-black ">Publisher</th>
              <th className="py-4 px-4 font-medium text-black ">
                Total Copies
              </th>
              <th className="py-4 px-4 font-medium text-black ">Lost Fine</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                <h5 className="font-medium text-black dark:text-gray">
                  36514541
                </h5>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                <h5 className="font-medium text-black dark:text-gray">
                  A Kite Runner
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 k">
                <p className="text-black dark:text-gray"> Khaled Hosseini </p>
              </td>

              <td className="border-b border-[#eee] py-5 px-4 ">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                  5
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 ">
                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                  350
                </p>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booklist;
