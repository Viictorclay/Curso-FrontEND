// 5° Crie um programa com for que conte de 10 até 1 (oderm decrescente) mas pare a execução ao encontrar o número 7.

for (let i = 10; i > 0; i--) {
    console.log(i);
    if ( i === 7 ){
        console.log('Cheguei no 7, parando o loop..');
        break;
    }
}