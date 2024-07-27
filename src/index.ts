import * as readline from 'readline'
import { run as runcalculadoraBmi } from './calculadoraBmi'
import { run as calTemperatura } from './calTemperatura'
import { run as nameGenerate } from './nameGenerate'
import { run as juegoAdivinanza } from './juegoAdivinanza'
import { run as correoElectronico } from './correoElectronico'
import { run as invertirFrases } from './invertirFrases'
import { run as validarContraseña } from './validarContraseña'
import { run as contarVocalConsonante } from './contarVocalConsonante'
import { run as palindromos } from './palindromos'
import { run as expresionMatematica } from './expresionMatematica'


const rl = readline.createInterface({
    input: process.stdin,

});

function printAlgorthms() {
    console.log("****** Ejercicios ******")
    console.log("* 1: Calculadora MBI *")
    console.log("* 2: Conversor de temperatura *")
    console.log("* 3: Generador de usuario *")
    console.log("* 4: Adivina el número *")
    console.log("* 5: Validar correo electrónico *")
    console.log("* 6: Invertir una frase *")
    console.log("* 7: Validar contraseña *")
    console.log("* 8: Contador de vocales*")
    console.log("* 9: Palindromos*")
    console.log("* 10: Validar expresión matematica *")

    console.log("***********Selecciona una opción*************\n")
}

printAlgorthms()
rl.question('Seleccione el reto a ejecutar: ', (answer) => {
    switch (answer.toLowerCase()) {
        case '1':
            runcalculadoraBmi()
            rl.close();
            break;
        case '2':
            calTemperatura()
            break;
        case '3':
            nameGenerate()
            break;
        case '4':
            juegoAdivinanza()
            break;
        case '5':
            correoElectronico()
            break;
        case '6':
            invertirFrases()
            break;
        case '7':
            validarContraseña()
            break;
        case '8':
            contarVocalConsonante()
            break;
        case '9':
            palindromos()
            break;
        case '10':
            expresionMatematica()
            break;
        default:
            console.log('Invalid selection!');
    }
});

