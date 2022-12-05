import { createHash } from 'node:crypto'
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename) + "/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
   const  content = await fs.readFile(golFilename)
  console.log(createHash('sha256').update(content).digest('hex'));
};

await calculateHash();