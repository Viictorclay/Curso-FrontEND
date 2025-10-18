// Classe Processador
class Processador {
    constructor(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    info() {
        console.log(`⚙️ Processador: ${this.marca} ${this.modelo} (${this.velocidade}GHz)`)
    }
}

// Classe Memória
class Memoria {
    constructor(capacidade, tipo) {
        this.capacidade = capacidade;
        this.tipo = tipo;
    }

    info() {
        const unidade = this.capacidade >= 1 ? 'GB' : 'MB';
        console.log(`💾 Memória: ${this.capacidade}${unidade} ${this.tipo}`);
    }
}

// Class HD
class HD {
    constructor(capacidade, tipo) {
        this.capacidade = capacidade;
        this.tipo = tipo;
    }

    info() {
        const unidade = this.capacidade >= 10 ? 'GB' : 'TB';
        console.log(`📀 Armazenamento: ${this.capacidade}${unidade} ${this.tipo === 'SSD' ? ' (SSD)' : ' (HDD)'}`);
    }
}

// Classe Computador (composição)
class Computador {
    constructor(processador, memoria, hd) {
        this.processador = processador;
        this.memoria = memoria;
        this.hd = hd;
    }

    exibirConfig() {
        console.log('============================================');
        console.log('🖥️ Configuração do Computador:');
        this.processador.info();
        this.memoria.info();
        this.hd.info();
        console.log('============================================\n');
        console.log('Easy.')
    }
}

// Exemplo de uso
const cpu = new Processador('AMD', 'Ryzen 5 5600X', 3.7);
const ram = new Memoria(8, 'DDR5');
const disco = new HD(500, 'SSD');

const pc1 = new Computador(cpu, ram, disco);

pc1.exibirConfig();