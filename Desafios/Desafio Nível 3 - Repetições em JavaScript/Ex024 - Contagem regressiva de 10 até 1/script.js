function iniciar() {
    let res = document.getElementById('result')
    
    res.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`

    let cont = 1
    let n1 = parseInt(window.prompt('Contagem Regressiva apartir de que número ?'))

    if (isNaN(n1) || n1 <= cont){
        res.innerHTML += `<p>Valor inválido.</p>`
        return
    }

    while(n1 >= cont) {
        res.innerHTML += ` ${n1} &#x1F449;`
        n1 --
    }
    res.innerHTML += ` &#x1F3C1;`
}