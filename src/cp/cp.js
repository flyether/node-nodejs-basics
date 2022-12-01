import cp, { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { Stream } from 'node:stream';

const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename) + "/files/script.js";


const parseArgs = process.argv;
// const parseArgs = process.argv.slice(2);

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [_dirname, ...args]);

  const stream = new Stream();
  childProcess.stdout.on('data', data => {
    console.log(`stdout:\n${data}`);
  });
  


  childProcess.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
  });

  childProcess.on('close', function (code) {
    console.log('child process exited with code ' + code);  });



};

spawnChildProcess(parseArgs);
