function info() {
    let res = document.querySelector('section#result')
    let entrada = window.prompt('Informe o mês: (ex: Setembro)')
    let estaçao
    let mes

    // tentenado converter para número
    let num = Number(entrada)

    if (!isNaN(num) && num >= 1 && num <= 12) {
        //converte número para nome
        let nomes = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO']
        mes = nomes[num-1]
    } else {
        mes = entrada.toUpperCase()
    }

    switch (mes) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
        estaçao = 'INVERNO'
        break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
        estaçao = 'PRIMAVERA'
        break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
        estaçao = 'VERÃO'
        break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
        estaçao = 'OUTONO'
        break
        default:
            estaçao = 'INDEFINIDA'
            break
    }

    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estaçao}</strong></mark>.</p>`
}