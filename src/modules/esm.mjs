
import {fileURLToPath} from "url";
import { createRequire } from 'module';
import path from 'node:path';
import { release, version } from 'os';
import {createServer as createServerHttp} from "node:http"
import "./files/c.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export  {
    unknownObject,
    myServer,
};

