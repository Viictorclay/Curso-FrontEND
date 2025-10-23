// Crie uma classe Lampada com atributos cor e ligada. Implemente métodos ligar() e desligar().

class Lampada {
    constructor(cor) {
        this.cor = cor;
        this.ligada = false // desligada
    }

    ligar() {
        if(!this.ligada) {
            this.ligada = true;
            console.log(`💡 A lâmpada ${this.cor} foi ligada!`);
        } else {
            console.log(`⚠️ A lâmpada ${this.cor} já está ligada.`);
        }
    }

    desligar() {
        if (this.ligada) {
            this.ligada = false;
            console.log(`💤 A lâmpada ${this.cor} foi desligada.`);
        } else {
            console.log(`⚠️ A lâmpada ${this.cor} já está desligada.`);
        }
    }
}

// 🔹 Testando
const lamp1 = new Lampada("amarela");

lamp1.ligar();     // 💡 A lâmpada foi ligada!
lamp1.ligar();     // ⚠️ A lâmpada já está ligada.
lamp1.desligar();  // 💤 A lâmpada foi desligada.
lamp1.desligar();  // ⚠️ A lâmpada já está desligada.