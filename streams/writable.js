import fs from 'fs';
import path from 'path';


const __dirname = path.dirname(new URL(import.meta.url).pathname);


const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

const readStream = fs.createReadStream(inputFilePath, { encoding: "utf-8" });

const writeStream = fs.createWriteStream(outputFilePath);

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Data has been written");
});