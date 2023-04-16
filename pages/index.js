import Head from "next/head";
import Link from "next/link";

import { getPaths } from "../dataService/posts";

export function titlize([firstLetter, ...remaining]) {
  return [firstLetter.toUpperCase(), ...remaining].join("");
}

export async function getStaticProps() {
  const paths = await getPaths();
  return {
    props: {
      paths: paths.map((path) => ({
        link: path,
        label: path
          .split("-")
          .map((path) => titlize(path))
          .join(" "),
      })),
    },
  };
}

function HomePage({ paths }) {
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
          {paths.map((path) => (
            <li key={path.link}>
              <Link href={`posts/${path.link}`}>{path.label}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
