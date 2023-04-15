import Head from "next/head";

function FirstPost() {
  console.log("[About] page rendered");
  return (
    <>
      <Head>
        <title>First post - blog</title>
      </Head>
      <main>
        <h1>First post - blog</h1>
        <p>This is my first Post</p>
      </main>
    </>
  );
}

export default FirstPost;
