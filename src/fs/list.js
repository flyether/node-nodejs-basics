import * as fs from 'fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename) + "/files";

const list = async () => {
    const folder = await fs.stat(_dirname).catch((e)=>{});
    
    if (!folder) {
        throw new Error('FS operation failed');
    }

       console.log(await fs.readdir(_dirname ))
};

await list();
