import Head from "next/head";

function HomePage() {
  console.log("[Home] page rendered");
  return (
    <>
      <Head>
        <title>Home - blog</title>
        <meta name="descriotion" value="this is my blog"></meta>
      </Head>
      <main>
        <h1>Blog post</h1>
        <ul>
          <li>One</li>
          <li>Thwo</li>
          <li>Three</li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
