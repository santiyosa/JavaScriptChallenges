import * as readline from 'readline'




function invertirFrases() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let fraseInvertida: string = ""
    rl.question('¿Que frase quieres invertir?', (answer) => {
        fraseInvertida = invertir(answer);
        console.log("La frase invertida quedaría: ", fraseInvertida);
        rl.close();
    });
}

function invertir(frase: string): string {
    // Dividir la frase en palabras individuales
    const palabras = frase.split(' ');

    // Invertir cada palabra y unirlas de nuevo
    const palabrasInvertidas = palabras.map(palabra => {
        return palabra.split('').reverse().join('');
    });

    return palabrasInvertidas.join(' ');
}


export function run() {
    invertirFrases()
}
