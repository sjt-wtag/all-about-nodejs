import fs from 'fs';
import path from 'path';
import { Transform } from 'stream';

const __dirname = path.dirname(new URL(import.meta.url).pathname);


const inputFilePath = path.join(__dirname, 'input.txt');
const transformOutputFilePath = path.join(__dirname, "transformOutput.txt");

const readStream = fs.createReadStream(inputFilePath, { encoding: "utf-8" });
const writeStream = fs.createWriteStream(transformOutputFilePath);

//Transform data
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

readStream.pipe(upperCaseTransform).pipe(writeStream);