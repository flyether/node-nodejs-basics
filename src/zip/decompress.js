
import * as fs from 'node:fs';
import { createUnzip } from'zlib';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename) + "/files/fileToCompress.txt";
const _dirnameGz = dirname(_filename) + "/files/archive.gz";

const decompress = async () => {

    const input = await fs.createReadStream(_dirnameGz);
    const outPut = await fs.createWriteStream(_dirname);
    input.pipe(createUnzip()).pipe(outPut);
};

await decompress();