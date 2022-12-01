import {Worker, isMainThread, parentPort, workerData, BroadcastChannel} from 'node:worker_threads'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const _filename = fileURLToPath(import.meta.url); 
const _dirname = dirname(_filename) + "/worker.js";

const bc = new BroadcastChannel('channel1')

if (isMainThread) {
    console.log("this is the main thread")
    const worker = new Worker(_dirname, {workerData: 5});
    worker.postMessage('из маин в воркера перданное сообщение ')
       
  } else {
    console.log('Hello: not isMainThread');  
  }
const performCalculations = async () => {
   
   
};

await performCalculations();


