import url from "url";
import path from "path";


const filePath = "./dir1/dir2/dir3/test.txt";

console.log(path.basename(filePath));

console.log(path.dirname(filePath));

console.log(path.extname(filePath));

console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("__filename", __filename);
console.log("__dirname", __dirname);

// join()
const newFilePath = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(newFilePath);
// resolve()
const resolvePath = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(resolvePath);