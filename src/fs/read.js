import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename) + "/files/fileToRead.txt";

const read = async () => {
    const file = await fs.stat(golFilename).catch((e)=>{});
    if (!file) {
        throw new Error('FS operation failed');
    }
        console.log(await fs.readFile(golFilename, 'utf8',  {flag: 'wx'}));
};

await read();

