import * as fs from 'fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename) + '/files/fresh.txt';

const create = async () => {
 // first metod
//   let file = await fs.stat(golFilename).catch((e)=>{});

//   if (file) {
//     throw new Error('FS operation failed');

// } else {
//   await fs.writeFile(golFilename, 'I am fresh and young.');
// }

// second metod with flag
try{
  await fs.writeFile(golFilename, 'I am fresh and young.', {flag: 'wx'});
} catch (error) {
  throw new Error('FS operation failed');
}

};

await create();  

