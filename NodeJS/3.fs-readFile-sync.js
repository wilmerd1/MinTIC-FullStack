const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text) // Print the file contents as a string

console.log('Hacer cosas mientras lee el archivo...') // Print a message indicating that the program is doing something while reading the file

console.log('Leyendo el segundo archivo...') // Print a message indicating that the first file is being read
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(secondText) // Print the file contents as a string

