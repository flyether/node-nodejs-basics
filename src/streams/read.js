import * as fs from 'node:fs';
import process  from 'process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename) + "/files/fileToRead.txt";

const read = async () => {
    const stream = await fs.createReadStream(_dirname , 'utf8');

    stream
    .on('open', () => { stream.pipe(process.stdout); })
};

await read();