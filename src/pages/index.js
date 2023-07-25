import { useRouter } from "next/router";
import LoginPage from "../components/LoginPage";

export default function Home() {
  const router = useRouter()

  

  return (
    <div className=" bg-gradient-to-tr from-sky-900 via-gray-500 to-green-900 relative items-center justify-center flex flex-col min-h-screen overflow-hidden">
      <div className=" text-white w-full p-6 rounded-md shadow-md lg:max-w-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="mx-[45%] w-15 h-20">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>

        <LoginPage />
      </div>
    </div>
  );
}
