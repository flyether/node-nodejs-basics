
import * as fs from 'node:fs';
import { createUnzip } from'zlib';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename) + "/files/fileToCompress.txt";
const golFilenameGz = dirname(_filename) + "/files/archive.gz";

const decompress = async () => {

    const input = await fs.createReadStream(golFilenameGz);
    const outPut = await fs.createWriteStream(golFilename);
    input.pipe(createUnzip()).pipe(outPut);
};

await decompress();