import * as fs from 'fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename);

const remove = async () => {
    const dir = golFilename+"/files/fileToRemove.txt";
    let File = await fs.stat(dir).catch((e)=>{});

	if (!File) {
        throw new Error('FS operation failed');    
	}
    await fs.unlink(dir, function(err){
        if (err) {
            console.log(err);
        }
    });
};

await remove();

