function iniciar() {
    let agora = new Date
    let anoAT = agora.getFullYear()
    
    let nasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade =  anoAT - nasc

    let res = document.getElementById('saida')
    res.innerHTML = `Quem nasceu em ${nasc} vai ter <strong>${idade}</strong> anos em ${anoAT}.`
}