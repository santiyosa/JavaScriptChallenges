import * as readline from 'readline'
// Declaramos la función que será llamada desde el index
function contarVocalConsonante() {
    // Declaramos la constante requerida en readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let conteoVocal: number = 0
    let conteoConsonante: number = 0

    rl.question('Ingresa una frase y te dire cuantas vocales y consonantes hay: ', (answer) => {
        conteoVocal = regexVocal(answer);
        console.log("Tiene ", conteoVocal, "vocales");
        conteoConsonante = regexConsonante(answer);
        console.log("Tiene ", conteoConsonante, "consonantes");
        rl.close();

    });
}

// Con esta función regex validamos si el correo es valido y devolvemos un booleano
function regexVocal(frase: string): number {
    let vocalesRegex = /[aeiouáéíóú]/gi;
    let vocales = frase.match(vocalesRegex)?.length || 0;;
    return vocales;
}
function regexConsonante(frase: string): number {
    let consonanteRegex = /[^aeiouáéíóú\s]/gi;
    let consonante = frase.match(consonanteRegex)?.length || 0;;
    return consonante;
}


export function run() {
    contarVocalConsonante()
}
