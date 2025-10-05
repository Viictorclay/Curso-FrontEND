let n1;
let n2;

function iniciar() {
    n1 = Number(window.prompt('Digite um valor:'));
    n2 = Number(window.prompt('Digite outro valor:'));
    const res = document.getElementById('result');

    if (isNaN(n1) || (isNaN(n2))) {
        res.innerHTML = `<p>⚠️ Por favor, digite apenas números válidos.</p>`
        return;
    }

    if (n1 === n2) {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong></p>`
    } else {
        const maior = Math.max(n1, n2)
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${maior}</strong></p>`
    }
}

function verificar() {

    const res = document.getElementById('resultVRF');

    if (n1 === undefined || n2 === undefined) {
        res.innerHTML = `<p>⚠️ Você precisa digitar o primeiro número antes (clique em "começar").</p>`;
        return;
    }

    res.innerHTML = ""; // limpa antes de mostrar os resultados

    // Verifica o primeiro número
    if (n1 % 2 === 0) {
        res.innerHTML += `<p>O número <mark>${n1}</mark> é <strong>PAR</strong>.</p>`;
    } else {
        res.innerHTML += `<p>O número <mark>${n1}</mark> é <strong>ÍMPAR</strong>.</p>`;
    }

    // Verifica o segundo número
    if (n2 % 2 === 0) {
        res.innerHTML += `<p>O número <mark>${n2}</mark> é <strong>PAR</strong>.</p>`;
    } else {
        res.innerHTML += `<p>O número <mark>${n2}</mark> é <strong>ÍMPAR</strong>.</p>`;
    }
}

function saudacao() {
    let msg = '';
    const res = document.getElementById('resultSD');
    let nome = window.prompt('Qual é seu nome ?');
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >= 5 && hora < 13) {
        msg = '🌞 Bom dia!';
    } else if (hora >= 13 && hora < 18) {
        msg = '🌤️ Boa tarde!';
    } else {
        msg = '🌙 Boa noite!';
    }

    // Caso o usuário não digite nada
    const nomeFinal = nome && nome.trim() !== '' ? nome : 'Visitante';

    res.innerHTML = `<p>${msg}, <strong>${nomeFinal}</strong>. Já verificou as outras funcões ?! Se não, não perca tempo! Clique em 'Começar' e divirta-se nas funções.</p>`
}

function fatorial() {
    let saida = document.getElementById('saida');
    let num = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h3>Calculando ${num}!<h3>`
    let n = num
    let fat = 1
    while (n > 1) {
        saida.innerHTML += `${n} x `
        fat *= n // Correspondente ao cálculo fat = fat * n
        n --
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    // Usei o toLocaleString() na linha acima apenas para aparecerem os separadores de milhar/milhões/etc...
}

function converterTemperatura() {
    const saida = document.getElementById('saidaCF');
    const celsius = Number(document.getElementById('celsius').value);

    // Validação simples
    if (isNaN(celsius) || celsius < -89 || celsius > 57) {
        saida.innerHTML = `<p>⚠️ Digite um valor entre -89°C e 57°C!</p>`;
        return;
    }

    // Função pura de conversão
    function celsiusParaFAhrenheit(c) {
        return (c * 9/5) + 32;
    }

    const fahrenheit = celsiusParaFAhrenheit(celsius);

    // Mostrar resultado
    saida.innerHTML = `<h3>Convertendo ${celsius}°C para Fahrenheit</h3>`;
    saida.innerHTML += `<p>${celsius}°C equivalem a <strong>${fahrenheit.toFixed(2)}°F</strong></p>`;
}