import Head from "next/head";

import { getPost } from "../../dataService/posts";

export async function getStaticProps() {
  const data = await getPost("first-post");
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
