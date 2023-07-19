import Link from "next/link";

export default function join() {
  return (
    <div className=" bg-gradient-to-tr from-sky-900 via-gray-500 to-green-900 relative items-center justify-center flex flex-col min-h-screen overflow-hidden">
      <div className=" text-white w-full p-6 bg-swipe bg-no-repeat bg-center rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold "
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold "
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          
          <div className="mt-2">
            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-red-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
