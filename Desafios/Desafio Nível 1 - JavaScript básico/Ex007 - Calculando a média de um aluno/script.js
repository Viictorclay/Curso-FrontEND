function calcular_media() {
    let nome = window.prompt('Qual é nome do aluno(a)?');
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`));
    mediaF = (n1 + n2) / 2 
    let resultado = document.querySelector('section#resultado');

    resultado.innerHTML = `<p><strong>ALUNO(a)</strong>: <mark>${nome}</mark></p>`
    resultado.innerHTML += `<p><strong>NOTAS OBTIDAS</strong>: <mark>${n1}</mark> e <mark>${n2}</mark></p>`
    resultado.innerHTML += `<p><strong>MÈDIA FINAL</strong>: <mark>${mediaF}</mark></p>`
}