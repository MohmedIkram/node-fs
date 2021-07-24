import express from "express";
const app = express();
import { statSync, readdir } from "fs";
import emoji from "node-emoji";
var content = "";

content = `list of files in my loocal storage(desktop files )`;
let foo = (err, files) => {
  let fl = files.length;
  for (let i = 0; i < fl; i++) {
    var stats = statSync(`C:/Users/ikram/Desktop/${files[i]}`);
    if (stats.isFile()) {
      //If it is as file
      content += `
      ${emoji.emojify(":open_file_folder:")}file ~ ${files[i]}`;
    } else {
      //If it is a directory
      content += ` 
      ${emoji.emojify(":star:")}directory ~ ${files[i]}`;
    }
  }
};
readdir("C:/Users/ikram/Desktop/", "utf8", foo);
app.get("/", (req, res) => {
  res.send(content);
});
app.listen(3000, () => console.log("server is started"));
