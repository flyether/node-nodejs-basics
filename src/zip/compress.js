import * as fs from 'node:fs';
import { createGzip } from'zlib';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename) + '/files/fileToCompress.txt';
const golFilenameGz = dirname(_filename) + '/files/archive.gz';

const compress = async () => {
    const GzipStream = await fs.createReadStream(golFilename);
    GzipStream.pipe(createGzip())
    .pipe(fs.createWriteStream(golFilenameGz));
};

await compress();