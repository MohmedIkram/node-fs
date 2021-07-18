const directory = "./folder1";
import { readdir } from "fs";

readdir(directory, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});
