import NavBar from "../components/NavBar";

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
