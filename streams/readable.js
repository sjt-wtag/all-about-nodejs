import fs from 'fs';
import path from 'path';


const __dirname = path.dirname(new URL(import.meta.url).pathname);


const inputFilePath = path.join(__dirname, 'input.txt');
const readStream = fs.createReadStream(inputFilePath, { encoding: 'utf-8' });

readStream.on('data', (chunk) => {
  console.log('Received a chunk of data: ', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading the file');
});

readStream.on('error', (err) => {
  console.log('An error occurred: ', err.message);
});
