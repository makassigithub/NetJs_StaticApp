import fs from "fs/promises";

export async function getPost(path) {
  return await fs.readFile(`content/${path}.json`, "utf8");
}
