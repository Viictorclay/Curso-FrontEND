
function calcular() {
    let nome = window.prompt('Qual é o nome do aluno?');
    let n1 = Number(window.prompt(`Qual foi a priemira nota de ${nome}?`));
    let n2 = Number(window.prompt(`Além de ${n1}, Qual foi a outra nota de ${nome}?`));
    med = (n1 + n2) / 2

    switch (true) {
        case med > 5:
            msg = 'Meus parabéns!'
            break
        default:
            msg = 'Estude um pocuo mais!'
    }

    let res = document.getElementById('result')
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark><p>`
    res.innerHTML += `<p><strong>NOTAS:</strong> <mark>${n1}</mark> e <mark>${n2}</mark></p>`
    res.innerHTML += `<p><strong>MÉDIA FINAL:</strong> <mark>${med}</mark></p>`
    res.innerHTML += `<p><strong>Mensagem da coodernação:</strong> <strong style='color:red;'>${msg}</strong></p>`
}


