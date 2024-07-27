import * as readline from 'readline'
// Declaramos la función que será llamada desde el index
function correoElectronico() {
    // Declaramos la constante requerida en readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function printOption() {
        console.log("* Vamos a validar si tu correo es valido. *")
    }

    printOption()
    let validarEmail: Boolean = false
    rl.question('Ingresa tu correo: ', (answer) => {
        validarEmail = regexParaValidar(answer);
        if (validarEmail) {
            console.log("Correo es valido");
            rl.close();
        } else {
            console.log("Correo no es valido");
            rl.close();
        }
    });
}

// Con esta función regex validamos si el correo es valido y devolvemos un booleano
function regexParaValidar(emailValidar: string): boolean {
    const condicion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return condicion.test(emailValidar);
}

export function run() {
    correoElectronico()
}
