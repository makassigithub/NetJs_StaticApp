import Head from "next/head";
import NavBar from "../components/NavBar";
import "../styles/global.css";
import Link from "next/link";

function App({ Component, pageProps }) {
  /* console.log(`[App] rendered with :
                  Component: ${Component}
                  Props: ${JSON.stringify(pageProps)}
               `); */
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico"></link>
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
