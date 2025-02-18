// Why Convert Callbacks to Promises?
// 1. Readability: Promises make code easier to read and maintain by avoiding deep nesting.
// 2. Error Handling: Promises provide a unified approach for error handling using .catch() blocks.
// 3. Chaining: Promises support chaining, allowing sequential asynchronous operations
//  to be handled more gracefully.
// 4. Compatibility: Modern JavaScript features like async/await work seamlessly with promises,
//  making asynchronous code even more readable and manageable.

// ------------------------------simple file read using callback-----------------------------

import fs from "fs";

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

// convert to promise -------------------------------

function readFilePromise(filepath, endcoding) {
  return new Promise((resolve, reject) => {
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFilePromise("example.txt", "utf8")
  .then((data) => console.log("File content:", data))
  .catch((err) => console.error("Error reading file:", err));

// ------------------------------ using callback-----------------------------

// Existing Callback
const callback = function (err, success) {
  if (err) {
    console.log("Geek is very sad!");
  } else {
    console.log("Geek is optimistic, " + "thus becomes successful");
  }
};

const caller = function (status, callback) {
  if (status === "Happy") callback(null, true);
  else {
    callback(new Error(), false);
  }
};

caller("Happy", callback);
caller("Sad", callback);

// conver to promise ----------------------

const error = function () {
  console.log("promise :  Geek is very sad!");
};

const success = function () {
  console.log("Promise:  Geek is optimistic, " + "thus becomes successful");
};

const callerPromise = function (status) {
  return new Promise(function (resolve, reject) {
    if (status === "Happy") resolve();
    else reject();
  });
};

callerPromise("Happy").then(success).catch(error);
callerPromise("Sad").then(success).catch(error);
