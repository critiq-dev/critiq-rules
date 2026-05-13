import fs from "node:fs";
export function bad(req: { query: { file: string } }) {
  return fs.readFileSync(req.query.file, "utf8");
}
