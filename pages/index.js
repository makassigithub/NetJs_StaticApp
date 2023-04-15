import Head from "next/head";
import Link from "next/link";

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
          <li>
            <Link href="/posts/first">First Post</Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
