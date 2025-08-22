// 3° Faça um programa com DO...WHILE que continue pedindo um número até que o usuário digite um número maior que 100.

let num = 0;

do {
   num = parseInt(prompt('Digite um número acima de 100:'));

    if ( !isNaN(num) && num > 100) {
        window.alert(`Boa você digitou ${num}, que é ${num - 100} acima de 100.`);
        break
    } else {
        window.alert('Número ínvalido. Digete novamente.');
    }
} while (true);