import * as readline from 'readline'
import { run as runCalculadoraBmi } from './CalculadoraBmi'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printAlgorthms() {
    console.log("****** Ejercicios ******")
    console.log("* 4: Calculadora MBI *")
    console.log("************************\n")
}

printAlgorthms()
rl.question('Select the script to execute (1) ', (answer) => {
    switch (answer.toLowerCase()) {
        case '1':
            runCalculadoraBmi()
            break;
        default:
            console.log('Invalid selection!');
    }
    rl.close();
});