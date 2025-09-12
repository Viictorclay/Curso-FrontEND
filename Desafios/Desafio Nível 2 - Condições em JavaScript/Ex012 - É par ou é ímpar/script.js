function iniciar() {
    let num = Number(window.prompt('Digite um número inteiro:'));

    switch (true) {
        case num % 2 === 0:
            msg = 'PAR'
            break;
    
        default:
            msg = 'ÍMPAR'
    }

    let res = document.getElementById('result')

    res.innerHTML = `O número ${num} que foi digitado é <strong>${msg}!</strong>`
}