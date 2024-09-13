// File System
const fs = require('node:fs') // Import the file system module
/* const {promisify} = require('node:util') // Import the promisify function from the util module

const readFile = promisify(fs.readFile) // Create a promisified version of the readFile function
 */
console.log('Leyendo el primer archivo...') // Print a message indicating that the first file is being read
fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{
    console.log(text)
}) // Read the file synchronously and store its contents in the 'text' variable

//console.log(text) // Print the file contents as a string
console.log('Hacer cosas mientras lee el archivo...') // Print a message indicating that the program is doing something while reading the file

console.log('Leyendo el segundo archivo...') // Print a message indicating that the first file is being read
fs.readFile('./archivo2.txt', 'utf-8', (err, text)=>{
    console.log(text)
}) // Read the file synchronously and store its contents in the 'text' variable
