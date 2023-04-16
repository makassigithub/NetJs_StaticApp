import Head from "next/head";

import { getPost, getPaths } from "../../dataService/posts";

export async function getStaticPaths() {
  const filesNames = await getPaths();
  console.log(filesNames);
  return {
    paths: filesNames.map((postPath) => ({ params: { postPath } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("context", JSON.stringify(context));
  const { postPath } = context.params;
  const data = await getPost(postPath);
  return {
    props: {
      post: JSON.parse(data),
    },
  };
}

function Post({ post }) {
  console.log("[Fist Post] page rendered");
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <h6>{post.date}</h6>
      </main>
    </>
  );
}

export default Post;
