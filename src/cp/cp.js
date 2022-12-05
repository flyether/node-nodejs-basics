import  { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename) + "/files/script.js";

// при таких параметрах аргументы можно в командной строке ввести

// const paramArgs = process.argv.slice(2);
const paramArgs = '--cat --dog --pig';


const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [golFilename, ...args.split(' ')], {stdio: "inherit"});
//without {stdio: "inherit"}
  // childProcess.stdout.on('data', data => {
  //   console.log(`${data}`);
  // });
  // process.stdin.pipe(childProcess.stdin)
  
  // childProcess.stderr.on('data', data => {
  //   console.error(`stderr: ${data}`);
  // });

};

spawnChildProcess(paramArgs);
