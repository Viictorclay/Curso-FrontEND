
function AnteSuce() {
    const n1 = parseInt(prompt('Digite um número interio:'));
    numANT = n1 - 1
    numDPS = n1 + 1
    return{ numANT, numDPS, n1 };
}

const botao01 = document.getElementById('btm01');
botao01.addEventListener('click', function() {
    const resultado = AnteSuce();
    alert(`Antes de ${resultado.n1}, temos o número ${resultado.numANT}.\nDepois de ${resultado.n1}, temos o número ${resultado.numDPS}.`)
})
