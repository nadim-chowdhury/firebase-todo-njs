import "@/styles/globals.css";
import Head from "next/head";
import { AuthUserContext } from "@/firebase/auth";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JS Dev - Todo App</title>
      </Head>

      <AuthUserContext>
        <Component {...pageProps} />
      </AuthUserContext>
    </>
  );
}
