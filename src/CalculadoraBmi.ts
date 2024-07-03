

function CalculadoraBmi(pesoEntrada: number, alturaEntrada: number) : number {
    let bmi : number
    bmi = pesoEntrada / (alturaEntrada*alturaEntrada)
    console.log('Con un peso de: ',pesoEntrada + ', y una altura de: ',alturaEntrada + ', el indice de masa corporal es: ',bmi )
    return bmi
}
export function run() {
    CalculadoraBmi(80, 170) 


    
  }
