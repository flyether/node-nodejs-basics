import * as fs from 'fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename);

const rename = async () => {
    const dirWrong = _dirname + "/files/wrongFilename.txt";
    const dirProperFilename = _dirname + "/files/properFilename.md";
    let fileWrong = await fs.stat(dirWrong).catch((e)=>{});
    let properFilename = await fs.stat(dirProperFilename).catch((e)=>{});

    
	if (!fileWrong ||properFilename ) {
        throw new Error('FS operation failed');    
	}

    await fs.rename(dirWrong,
        dirProperFilename,
    err => {
        if (err) throw err;
    })
};

await rename();