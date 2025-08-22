// 4° Faça um program que some todos os números de 1 a 10, exceto os múltiplos de 5.

let soma = 0;

for (let i = 1; i <= 10; i++) {
    if ( i % 5 === 0 ) {
        continue; // pula os múltiplos de 5
    }
    soma += i; // acumula só os números que não for múltiplos de 5.
}

console.log('A soma de 1 a 100, exceto os múltiplos de 5, é:', soma);