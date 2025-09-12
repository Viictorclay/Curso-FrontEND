function iniciar() {
    let n1 = Number(window.prompt('Digiete um valor:'))
    let n2 = Number(window.prompt('Digete outro valor:'))

    let res = document.getElementById('result')
    switch (true) {
        case n1 > n2:
            res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong></p>`
            break;
        case n1 < n2:
            res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong></p>`
            break
        default:
            res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong></p>`
    }
}