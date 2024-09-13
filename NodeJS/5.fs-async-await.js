/* const {promisify} = require('node:util') // Import the promisify function from the util module

const readFile = promisify(fs.readFile) // Create a promisified version of the readFile function
 */

// File System
const {readFile} = require("node:fs/promises") // Import the file system module


// IIFE (Immediately Invoked Function Expression)
;(
  async()=>{
    console.log("Leyendo el primer archivo...");
    const text = await readFile("./archivo.txt", "utf-8");
    console.log("Primer Texto: ", text);
    console.log("Hacer cosas mientras lee el archivo...");
    console.log("Leyendo el segundo archivo...");
    const text2 = await readFile("./archivo2.txt", "utf-8");
    console.log("Segundo Texto: ", text2);

  }
)()


