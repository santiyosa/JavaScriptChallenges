import * as readline from 'readline'
// Declaramos la función que será llamada desde el index
function nameGenerate() {
    // Declaramos la constante requerida en readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function printOption() {
        console.log("* Sigue las siguientes instrucciones *")
    }
    printOption()

    let usuario: string = ""
    let nombre: string = ""
    let apellido: string = ""

    // Usamos la constante de readline, para imprimir una pregunta y leer una respuesta desde la consola
    rl.question('Ingresa tu nombre: ', (answer) => {
        console.log(`Hola, ${answer}!`);
        nombre = answer.slice(0, 3)
        rl.question('Ingresa tu apellido: ', (answer2) => {
            apellido = answer2.slice(0, 3)
            usuario = createUser(nombre, apellido)
            console.log("Tu usuario será: ", usuario)
            rl.close();
        });
    
    });

}

// Declaramos por función la creación de un usuario
function createUser(nombre: string, apellido: string): string {
    let createdsuario: string = ""
    let random : string = (((Math.random()) * 10).toString()).slice(0,1);
    createdsuario = nombre + apellido + random;
    return createdsuario
}

export function run() {
    nameGenerate()
}