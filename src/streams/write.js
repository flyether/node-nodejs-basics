import * as fs from 'node:fs';
import process  from 'process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename) + "/files/fileToWrite.txt";

const write = async () => {

    console.log('write text for recording');

    const writableStream = fs.createWriteStream(_dirname)
    process.stdin.pipe(writableStream);
    process.stdin.resume();

};

await write();