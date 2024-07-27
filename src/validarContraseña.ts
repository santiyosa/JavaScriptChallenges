import * as readline from 'readline'
// Declaramos la función que será llamada desde el index
function validarContraseña() {
    // Declaramos la constante requerida en readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function printOption() {
        console.log("* Vamos a validar si tu contraseñ es valido. *")
    }

    printOption()
    let validarContrasena: Boolean = false
    rl.question('Ingresa tu contraseña: ', (answer) => {
        validarContrasena = regexParaValidar(answer);
        if (validarContrasena) {
            console.log("La contraseña es valida");
            rl.close();
        } else {
            console.log("La contraseña no es valido, recuerda que debe tener");
            console.log("La contraseña debe tener al menos 8 caracteres de longitud");
            console.log("Debe contener al menos una letra mayúscula");
            console.log("Debe contener al menos una letra minúscula.");
            console.log("Debe contener al menos un número");
            rl.close();
        }
    });
}

// Con esta función regex validamos si la contraseña es valida y devolvemos un booleano
function regexParaValidar(contrasenaValidar: string): boolean {
    const condicion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return condicion.test(contrasenaValidar);
}

export function run() {
    validarContraseña()
}