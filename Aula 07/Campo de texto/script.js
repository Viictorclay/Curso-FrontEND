const campoTXT = document.getElementById('campoTexto');
const saida = document.getElementById('saida')

campoTXT.addEventListener('input', () => {
    saida.textContent = campoTXT.value;
})