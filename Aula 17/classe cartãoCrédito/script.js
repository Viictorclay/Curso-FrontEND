// CLASSE BASE — MÃE
class Cartao {
    #limite;
    constructor(titular, limite) {
        this.titular = titular;
        this.#limite = limite;
    }
    
    get limite() {
        return this.#limite;
    }

    set limite(novoLimite) {
        if (novoLimite >= 0) {
            this.#limite = novoLimite;
        } else {
            console.log("⚠️ O limite não pode ser negativo!");
        }
    }

    // Método que cada cartão vai sobrescrever para indicar o tipo de cartão
    tipo() {
        return "Catão";
    }

    realizarCompra(valor) {
        console.log(` ${this.tipo()}`); // exibe o tipo do cartão antes da compra
        if(valor <= this.#limite) {
            this.#limite -= valor
            console.log(`✔️ Compra no Valor: ${valor.toLocaleString("pt-BR", { 
                style: 'currency', 
                currency: 'BRL' 
            })} — Bem Sucedida! ✔️`)
            console.log(`💰 Limite restante: ${this.#limite.toLocaleString("pt-BR", { 
                style: 'currency', 
                currency: 'BRL' 
            })}\n`)
        } else {
            console.log(`⚠️ Compra no valor: ${valor.toLocaleString("pt-BR", { 
                style: 'currency', 
                currency: 'BRL' 
            })} — Negada. ⚠️`)
            console.log(`⚠️ Crédito insuficiente. \n💰 Limite Atual: ${this.#limite.toLocaleString( "pt-BR", { 
                style: 'currency', 
                currency: 'BRL' 
            })}\n`)
        }
    }

    mostrarInfo() {
        console.log(`\n👤 Titular: ${this.titular}`);
        console.log(`💰 Limite atual: ${this.#limite.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })}`);
    }
}

// CLASSE FILHA (Cartão de Crédito)
class CartaoCredito extends Cartao {
    constructor(titular, limite, bandeira) {
        super(titular, limite); // "super" chama o construtor da classe mãe
        this.bandeira = bandeira;
    }

    tipo() {
        return `💳 Cartão de Crédito (${this.bandeira})`; // vai retornar o cartão de Crédito com sua bandeira
    }

    mostrarInfo() {
        console.log(`\n💳 Cartão de Crédito (${this.bandeira})`);
        super.mostrarInfo(); // aproveita o método da classe mãe
    }
}

// Classe filha (Cartão de Débito)
class CartaoDebito extends Cartao {
    constructor(titular, limite) {
        super(titular, limite);
    }
    
    tipo() {
        return "🎫 Cartão de Débito";
    }

    mostrarInfo() {
        console.log(`\n🎫 Cartão de Débito`);
        super.mostrarInfo();
    }
}


// --- CRIAÇÃO DOS OBJETOS ---
const cartao1 = new CartaoCredito('Victorclay', 1500, "Visa");
const cartao2 = new CartaoDebito("Victorclay", 800)

// --- MOSTRAR INFORMAÇÕES INICIAIS ---
console.log("===== INFORMAÇÕES INICIAIS =====");
cartao1.mostrarInfo();
cartao2.mostrarInfo();

// --- REALIZAR COMPRAS ---
console.log("\n===== REALIZANDO COMPRAS =====\n");
cartao1.realizarCompra(299.99);
cartao1.realizarCompra(919.99);
cartao1.realizarCompra(359.99);
cartao2.realizarCompra(319.99);
cartao2.realizarCompra(749.99);


// --- MOSTRAR INFORMAÇÕES FINAIS ---
console.log("\n===== INFORMAÇÕES FINAIS =====");
cartao1.mostrarInfo();
cartao2.mostrarInfo();