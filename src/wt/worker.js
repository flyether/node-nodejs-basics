// n should be received from main thread
import {BroadcastChannel, parentPort, workerData} from 'node:worker_threads'

console.log( 'маин', workerData )
parentPort.on('message', msg => { console.log( msg)})

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
const bc = new BroadcastChannel('channel1')
const sendResult = () => {
    nthFibonacci(workerData);
    bc.sendResult(nthFibonacci(workerData))
    // This function sends result of nthFibonacci computations to main thread
};

sendResult();