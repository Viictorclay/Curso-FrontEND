// 7° Faça um programa que exiba a tabuada do 6 (de 6 x 1 até 6 x 10) usando o for. 

/* let num = 6
 let mult = 0
for ( let i = 0; i <= 10; i++) {
      mult = num * i
    console.log(`${num} x ${i} = ${num * i}`)
} */

function tabuada(num) {
    let resultados = []

    for (let i = 0; i <= 10; i++) {
        resultados.push({
            Operação: `${num} x ${i}`,
            Resultado: num * i
        })
    }

    console.table(resultados)
}

tabuada(6)