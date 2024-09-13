
import { readFile } from "node:fs/promises";

Promise.all([
    readFile("./archivo.txt", "utf-8"),
    readFile("./archivo2.txt", "utf-8"),
])
    .then(([text, text2]) => {
        console.log("Primer Texto: ", text);
        console.log("Segundo Texto: ", text2);
    })
    .catch((error) => {
        console.error("Error al leer los archivos:", error);
    });

