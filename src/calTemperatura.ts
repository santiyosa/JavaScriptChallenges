import * as readline from 'readline'
// Declaramos la función que será llamada desde el index
function calTemperatura() {
    // Declaramos la constante requerida en readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // Imprimimos las opciones iniciales para guiar al usuario sobre lo que puede hacer
    function printOption() {
        console.log("****** Ejercicios ******")
        console.log("* 1: Conversión de  Celsius a Fahrenheit *")
        console.log("* 2: Conversión de  Fahrenheit a Celsius *")
        console.log("************************\n")
    }
    printOption()
    let tempCelcius: number
    let tempFahrenheit: number

    // Usamos la constante de readline, para imprimir una pregunta y leer una respuesta desde la consola
    rl.question('Seleccione el tipo de conversión a realizar: ', (answer) => {
        // Usamos el switch para tomar la decisión de acuerdo a la respuesta anterior
        switch (answer.toLowerCase()) {
            case '1':
                // De nuevo usamos la constante para brindar la opción de ingresar la temperatura por consola
                rl.question('Ingresa la temperatura en celcius: ', (answer) => {
                    // Convertimos la respuesta en number para usarla en las operaciones de conversión
                    tempCelcius = Number.parseInt(answer)
                    // usamos la función de conversión, e imprimimos el return
                    console.log(tempCelcius, " Celsius convertidos a Fahrenheit, son: ", celciustoFahrenheit(tempCelcius), " grados Fahrenheit.");
                    rl.close();
                }
                );
                break;
            case '2':
                // De nuevo usamos la constante para brindar la opción de ingresar la temperatura por consola
                rl.question('Ingresa la temperatura en celcius: ', (answer) => {
                    // Convertimos la respuesta en number para usarla en las operaciones de conversión
                    tempFahrenheit = Number.parseInt(answer)
                    // usamos la función de conversión, el return lo almacenamos en una variable e imprimimos. Quice practicar las dos maneras. 
                    tempCelcius = Fahrenheittocelcius(tempFahrenheit)
                    console.log(tempFahrenheit, " Fahrenheit convertidos a Celsius son: ", tempCelcius, " grados Celsius.");
                    rl.close();
                }
                );
                break;
            default:
                console.log('Invalid selection!');
        }
    });
}
// Declaramos por función el calculo de la conversión
function celciustoFahrenheit(celcius: number): number {
    let fahrenheit = (celcius * (9 / 5)) + 32
    return fahrenheit
}

// Declaramos por función el calculo de la conversión
function Fahrenheittocelcius(fahrenheit: number): number {
    let celcius = (fahrenheit - 32) * 5 / 9
    return celcius
}

export function run() {
    calTemperatura()
}