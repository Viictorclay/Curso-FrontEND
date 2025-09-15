function iniciar() {
    let res = document.getElementById('result')

    res.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    let n1 = parseInt(window.prompt('Contar até quanto ?'));
    while (cont <= n1) {
        if (cont % 2 == 0) {
            res.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`
        } else {
            res.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++
    }
    res.innerHTML += ` &#x1F3C1;`
}