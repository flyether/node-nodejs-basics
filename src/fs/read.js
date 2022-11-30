import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename) + "/files/fileToRead.txt";

const read = async () => {
    const file = await fs.stat(_dirname).catch((e)=>{});
    if (!file) {
        throw new Error('FS operation failed');
    }
        console.log(await fs.readFile( _dirname, 'utf8'));
};

await read();