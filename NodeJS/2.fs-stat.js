// File System
const fs = require('node:fs') // Import the file system module

// is SYNC

const stats = fs.statSync('./archivo.txt') // Get the file stats synchronously
console.log(
    stats.isFile(), // Check if it's a file
    stats.isDirectory(), // Check if it's a directory
    stats.isSymbolicLink(), // Check if it's a symbolic link
    stats.size // Get the file size in bytes
)

// Read File

