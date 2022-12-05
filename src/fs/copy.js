import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename);
const dir_from = golFilename +'/files';
const dir_to = golFilename +'/_files';

const copy = async () => {

    const st = await fs.stat(dir_to).catch((e)=>{});
    const folderFile = await fs.stat(dir_from).catch((e)=>{});
    const files = await fs.readdir(dir_from);

	if (!folderFile || st) {
        throw new Error('FS operation failed');    
	}

    await fs.mkdir(dir_to);
     for (const file of files) {
        await fs.copyFile(dir_from+ '/' + file, dir_to + '/' + file);
  }
   
};

copy();

