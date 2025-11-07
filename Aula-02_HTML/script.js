function verificaDocumento(input) {
    const valor = input.value.trim();

    // Simulação: CPF válido tem 11 dígitos, CNPJ válido tem 14
    const ehCpf = /^\d{11}$/.test(valor);
    const ehCnpj = /^\d{14}$/.test(valor);

    if (valor === "") {
        input.setCustomValidity("Este campo é obrigatório.");
    } else if (!ehCpf && !ehCnpj) {
        input.setCustomValidity("Digite um CPF (11 números) ou CNPJ (14 números) válido.");
    } else {
        input.setCustomValidity(""); // limpa o erro se estiver tudo certo
    }

    // Opcional: exibe o erro em tempo real (para feedback visual)
    input.reportValidity();
}

// --- ALERTA AO ENVIAR O FORMULÁRIO ---
document.getElementById("formInscricao").addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio real do formulário

    // Verifica se todos os campos são válidos
    if (this.checkValidity()) {
        alert("✅ Formulário enviado com sucesso! Boa sorte na Copa DevMaster 🎮");
        this.reset(); // limpa o formulário após o envio
    } else {
        alert("⚠️ Por favor, preencha todos os campos corretamente antes de enviar.");
    }
});