function iniciar() {
    let n1 = Number(window.prompt('Digite um número:'))
    let n2 = Number(window.prompt('Digite outro número:'))
    let resultado = document.querySelector('section#resultado')

    resultado.innerHTML = `<p>A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${n1+n2}!</strong> </p>`
}