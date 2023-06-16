import * as fs from 'fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename);
const dirWrong = golFilename + '/files/wrongFilename.txt';
const dirProperFilename = golFilename + '/files/properFilename.md';

const rename = async () => {
    
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