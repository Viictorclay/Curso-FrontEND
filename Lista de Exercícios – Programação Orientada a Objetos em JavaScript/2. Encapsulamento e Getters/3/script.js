class Carro {
  marca;
  _velocidade;
  #chassi;

  constructor(marca, velocidadeInicial = 0, chassi) {
    this.marca = marca;
    this._velocidade = velocidadeInicial >= 0 ? velocidadeInicial : 0;
    this.#chassi = chassi;
  }

  acelerar(valor) {
    if (valor > 0) {
        this._velocidade += valor;
        console.log(`🚗 ${this.marca} acelerou! Velocidade atual: ${this._velocidade} km/h`);
    } else {
        console.log("⚠️ Valor inválido para acelerar.");
    }
  }

  frear(valor) {
    if (valor > 0) {
        this._velocidade -= valor;
        if (this._velocidade < 0) this._velocidade = 0;
        console.log(`🛑 ${this.marca} reduziu a velocidade. Velocidade atual: ${this._velocidade} km/h`);
    } else {
        console.log("⚠️ Valor inválido para frear.");
    }
  }

  get velocidade() {
    return this._velocidade;
  }

  get chassi() {
    return this.#chassi;
  }

  mostrarInfo() {
    console.log('\n-----------------------------------------')
    console.log(`📌 Informações do carro:
    Marca: ${this.marca}
    Velocidade: ${this._velocidade} km/h
    Chassi: ${this.#chassi}`);
    console.log('-----------------------------------------\n')
  }
}

// Exemplo de uso
const carro1 = new Carro("Toyota", 0, "ABC123456789");
carro1.mostrarInfo();
carro1.acelerar(60);
carro1.frear(20);
carro1.mostrarInfo();