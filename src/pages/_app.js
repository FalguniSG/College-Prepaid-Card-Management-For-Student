
import Head from "next/head";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> RBUAPS </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <Component {...pageProps} />
      
    </>
  )
}
export default MyApp;
