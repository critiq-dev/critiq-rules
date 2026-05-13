import fs from "node:fs/promises";
export async function good(req: { query: { file: string } }) {
  return await fs.readFile(req.query.file, "utf8");
}
