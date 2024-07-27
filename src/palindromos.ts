import * as readline from 'readline'
// Declaramos la función que será llamada desde el index
function palindromos() {
    // Declaramos la constante requerida en readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let validarFrase: Boolean = false
    rl.question('Ingresa una frase y vamos a validar si es palindromo o no: ', (answer) => {
        validarFrase = regexParaValidar(answer);
        if (validarFrase) {
            console.log("Es palindromo");
            rl.close();
        } else {
            console.log("No es palindromo");
            rl.close();
        }
    });
}

// Con esta función regex validamos si el correo es valido y devolvemos un booleano
function regexParaValidar(fraseValidar: string): Boolean {
    let sinEspacios = fraseValidar.replace(/\s/g, '');
    let sinEspaciosReverse = sinEspacios.split('').reverse().join('');

    return sinEspacios.toLowerCase === sinEspaciosReverse.toLowerCase;
}

export function run() {
    palindromos()
}
