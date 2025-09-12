
function start() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)

    let res = document.getElementById('result')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() {
    let res = document.getElementById('result')
    res.innerHTML = 'Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100..'
}
