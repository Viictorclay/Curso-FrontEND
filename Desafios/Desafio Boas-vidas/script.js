
function dados() {
    const nome = prompt('Qual é seu nome?');
    const idade = Number(prompt('Quantos você anos tem?'));
    return{nome, idade};
};


const botao01 = document.getElementById('btm01');
botao01.addEventListener('click', function() {
    const usuario = dados();
    alert(`Prazer em lhe conhecer, ${usuario.nome}, que tem ${usuario.idade} anos de idade!`);
});
