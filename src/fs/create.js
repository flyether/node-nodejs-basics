import * as fs from 'fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename);

const create = async () => {
  const dir = _dirname +"/files/fresh.txt";
  let file = await fs.stat(dir).catch((e)=>{});

  if (file) {
    throw new Error('FS operation failed');
} else {
  await fs.writeFile(_dirname + '/files/fresh.txt', "I am fresh and young.")
}
};

await create();  