import Head from "next/head";

function AboutPage() {
  console.log("[About] page rendered");
  return (
    <>
      <Head>
        <title>About - blog</title>
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}

export default AboutPage;
