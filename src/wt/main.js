import {Worker, isMainThread } from 'node:worker_threads'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { cpus } from 'node:os';
const _filename = fileURLToPath(import.meta.url); 
const golFilename = dirname(_filename) + '/worker.js';


const performCalculations = async () => {
  let Gres = [];
  const numCPUs = cpus().length;
  if (isMainThread) {
      for (let i = 0; i < numCPUs; i++) {
        let num = i + 10;
        let res = [];
        let obj ={};  
      const worker = new Worker(golFilename , { 
        workerData : num 
      });
      
      worker
      .on('message', (data) => { 
          obj.status = 'resolved';
          obj.data = data;
          obj.i = i;
          res.push(obj);  
          Gres.push(obj); 
        if(Gres.length == numCPUs) {
           Gres.sort((a, b) => a.i > b.i ? 1 : -1)
           .forEach(element =>{delete element.i});
           console.log(Gres); 
           process.exit();}
         });
         
         worker.on('error', ()=>{
          obj.status = 'error';
          obj.data = null;
          obj.i = i;
          res.push(obj);
          Gres.push(obj); 
          if(Gres.length == numCPUs) {
            Gres.sort((a, b) => a.i > b.i ? 1 : -1)
            .forEach(element =>{delete element.i});
            console.log(Gres);
            process.exit();}
           });
    }  
  }
  else {
    console.log('Not Main Thread');
  }
};

await performCalculations();


