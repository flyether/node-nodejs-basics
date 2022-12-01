import {Transform}  from 'stream';
import process  from 'process';

const transform = async () => {

    console.log('write text to transform. Press the enter to transform. Press the ctrl + c to exit');

    const transform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split(' ').reverse().join(' '));
            callback();
        }
    });

    process.stdin.pipe(transform).pipe(process.stdout);
      
     
};

await transform();