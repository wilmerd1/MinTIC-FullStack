// modulos nativos
const os = require('node:os');

console.log('Información del sistema operativo');
console.log('-----------------------------');

console.log('Nombre del SO:', os.platform());
console.log('Versión del SO:', os.release());
console.log('Arquitectura:', os.arch());
console.log('CPUs:', os.cpus());
console.log('Memoria libre:', os.freemem(), 'bytes');

