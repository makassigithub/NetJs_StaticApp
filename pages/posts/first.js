import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      post: {
        title: " My First Post",
        body: "This is my first loaded static post",
      },
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
