
function inicio() {
    let name = window.prompt('Qual é seu nome? ')
    let resu = window.document.getElementById('resultado')
    resu.innerHTML = `<p>Olá, <strong>${name}</strong>! É um grande prazer te conhecer! &#x1F596;`
}