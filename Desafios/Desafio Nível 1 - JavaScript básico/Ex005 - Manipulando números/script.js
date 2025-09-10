window.alert('Bem-vindo(a) ao meu site!')

function calcular() {
    let n1 = Number(window.prompt('Digite um número:'))
    let resultado = document.querySelector('section#resultado')

    resultado.innerHTML = `<p>O dobro de ${n1} é ${n1*2} e a metade é ${n1/2}!</p>`
}