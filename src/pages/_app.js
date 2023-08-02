
import { AuthProvider } from "@/contexts/authContext";
import { UserProvider } from "@/contexts/usersSearchContext";
import Head from "next/head";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> RBCPS </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </AuthProvider>

    </>
  )
}
export default MyApp;
