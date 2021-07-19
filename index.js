// const directory = "./folder1";
// import { readdir } from "fs";

// readdir(directory, (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

import express from "express";
import { readdir } from "fs";
import "./images/myimg.png";

const app = express();
//directory path
const directory = "./folder1";
const PORT = 3000;

app.get("/", (request, respone) => {
  readdir(directory, (err, files) => {
    files.forEach((file) => {
      respone.send(file + "/index.html");
    });
  });
});

app.listen(PORT, () => console.log("server is started"));
