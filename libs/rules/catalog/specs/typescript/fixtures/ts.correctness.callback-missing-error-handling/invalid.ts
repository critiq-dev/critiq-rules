import * as fs from "fs";
fs.readFile("/path", (err, data) => {
  console.log(data);
});
