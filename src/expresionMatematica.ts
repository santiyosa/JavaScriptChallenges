import * as readline from 'readline'
// Declaramos la función que será llamada desde el index
function expresionMatematica() {
    // Declaramos la constante requerida en readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let validarEmail: Boolean = false
    rl.question('Ingresa la expresión matematica: ', (answer) => {

        validarEmail = regexParaValidar(answer);
        if (validarEmail) {
            console.log("La expresión matematica es valida");
            rl.close();
        } else {
            console.log("La expresión matematica no es valida");
            rl.close();
        }
    });
}

// Con esta función regex validamos si el correo es valido y devolvemos un booleano
function regexParaValidar(expresion: string): boolean {
    const condicion = /^-?\d+(\.\d+)?\s*[-+*/]\s*-?\d+(\.\d+)?$/g;
    return condicion.test(expresion);
}

export function run() {
    expresionMatematica()
}
