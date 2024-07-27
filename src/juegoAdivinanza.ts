import * as readline from 'readline'
// Declaramos la función que será llamada desde el index
function juegoAdivinanza() {
    // Declaramos la constante requerida en readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function printOption() {
        console.log("* Debes adivinar un número de 1 a 10, y tienes solo 3 intentos *")
    }
    printOption()

    let random: number = Number(((Math.random()) * 10).toFixed(0));

    function intentos(contador: number) {
        if (contador === 3) {
            console.log("Has agotado tus intentos.");
            rl.close();
            return;
        }

        rl.question('Ingresa tu suposición: ', (answer) => {
            const respuesta = Number(answer);
            console.log('Intento número: ', contador + 1);
            console.log('Número a avergiuar: ', random);
            if (respuesta < random) {
                console.log("Tu suposición es baja, intenta de nuevo con un número más alto");
            } else if (respuesta > random) {
                console.log("Tu suposición es alta, intenta de nuevo con un número más bajo");
            } else {
                console.log('Ese es el número.');
                rl.close();
            }
            intentos(contador + 1);
        });
    }

    intentos(0);
}


export function run() {
    juegoAdivinanza()
}
