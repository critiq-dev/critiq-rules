import * as fs from "fs";
fs.readFile("/path", (err, data) => {
  if (err) throw err;
  console.log(data);
});
