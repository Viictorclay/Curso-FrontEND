const botao01 = document.getElementById('btm01')

botao01.addEventListener('click', () => {
    botao01.style.backgroundColor = "green";
});

botao01.addEventListener('mouseout', () => {
    botao01.style.backgroundColor = '';
});


const botao02 = document.getElementById('btm02')

botao02.addEventListener('click', () => {
    botao02.style.backgroundColor = "yellow";
});

botao02.addEventListener('mouseout', () => {
    botao02.style.backgroundColor = '';
});


const botao03 = document.getElementById('btm03')

botao03.addEventListener('click', () => {
    botao03.style.backgroundColor = 'red';
});

botao03.addEventListener('mouseout', () => {
    botao03.style.backgroundColor = '';
});