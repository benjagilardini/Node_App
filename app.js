const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

let pathObj = path.parse(__filename);
let dir = pathObj.dir;
logger.log(pathObj);
console.log(dir);

let freeMemory = os.freemem();
let totalMemory = os.totalmem();
logger.log('Free Memory: ', freeMemory);
logger.log('Total Memory: ', totalMemory);

let rootDir = fs.readdirSync('./');

fs.readdir('./', (err, files) => {
    (err) ? console.log(err) : console.log('Async:', files);
})
console.log('Sync:' ,rootDir);
