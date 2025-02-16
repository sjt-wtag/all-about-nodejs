const fs = require("fs");

//Sync...
fs.writeFileSync("./test.txt", "Hey hello");

//Async
fs.writeFile("./test.txt", "helloo world async", (err) => {});

//Sync
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

//Async
// need a callback for err
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});

// Sync
fs.appendFileSync("./contacts.txt", new Date().getDate().toLocaleString());
fs.cpSync('./test.txt', './copy.txt');
// fs.unlinkSync("./copy.txt"); // delete file
console.log(fs.statSync("./test.txt")); // details of a file
fs.mkdirSync("my-docs/a/b", {recursive: true});

