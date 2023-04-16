import fs from "fs/promises";

import Head from "next/head";

export async function getStaticProps() {
  const data = await fs.readFile("content/data.json");
  return {
    props: {
      post: JSON.parse(data),
    },
  };
}

function FirstPost({ post }) {
  console.log("[Fist Post] page rendered");
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export default FirstPost;
