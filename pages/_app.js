import NavBar from "../components/NavBar";
import "../styles/global.css";

function App({ Component, pageProps }) {
  /* console.log(`[App] rendered with :
                  Component: ${Component}
                  Props: ${JSON.stringify(pageProps)}
               `); */
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
