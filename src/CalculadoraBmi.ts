

function calculadoraBmi(pesoEntrada:number, alturaEntrada:number): void {
    let bmi: number;
    let salud: string = "";
    bmi = parseFloat((pesoEntrada / (alturaEntrada * alturaEntrada)).toFixed(1));

    if (bmi < 18.5) {
        salud ="tienes bajo peso.";
    }
    else if ( bmi >= 18.5 && bmi <= 24.9) {
        salud ="tienes un peso normal.";
    }
    else if ( bmi >= 25 && bmi <= 29.9) {
        salud ="tienes sobre peso.";
    }
    if (bmi >= 30) {
        salud ="tienes obesidad.";
    }

    console.log('Con un peso de: ', pesoEntrada + 'Kg, y una altura de: ', alturaEntrada +
        ' metros, el indice de masa corporal es: ', bmi + ' .De acuerdo a lo anterior, se determina que', salud);

}
export function run() {
    calculadoraBmi(50 , 1.70)
    calculadoraBmi(60 , 1.70)
    calculadoraBmi(80 , 1.70)
    calculadoraBmi(90 , 1.70)

}
