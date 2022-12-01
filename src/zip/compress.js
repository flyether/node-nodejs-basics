import * as fs from 'node:fs';
import { createGzip } from'zlib';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename) + "/files/fileToCompress.txt";
const _dirnameGz = dirname(_filename) + "/files/archive.gz";

const compress = async () => {
    const GzipStream = await fs.createReadStream(_dirname)
    GzipStream.pipe(createGzip())
    .pipe(fs.createWriteStream(_dirnameGz))  
};

await compress();