import { readdir, readFile } from "fs/promises";

export async function getPost(path) {
  return await readFile(`content/${path}.json`, "utf8");
}

export async function getPaths() {
  const suffix = ".json";
  const files = await readdir("content");
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}
