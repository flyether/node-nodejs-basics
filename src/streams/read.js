import * as fs from 'node:fs';
import process  from 'process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename) + "/files/fileToRead.txt";

const read = async () => {
    const stream = await fs.createReadStream(golFilename , 'utf8');

    // stream
    // .on('open', () => { 
        stream.pipe(process.stdout);
    //  })
};

await read();