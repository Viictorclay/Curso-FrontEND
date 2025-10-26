// Classe base
class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  descricao() {
    return `Veículo da marca ${this.marca}, modelo ${this.modelo}.`;
  }
}

// Subclasse Carro (herda de Veiculo)
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo);
    this.portas = portas;
  }

  descricao() {
    return `Carro ${this.marca} ${this.modelo} com ${this.portas} portas.`;
  }
}

// Subclasse CarroEsportivo (herda de Carro)
class CarroEsportivo extends Carro {
  constructor(marca, modelo, portas, velocidadeMax) {
    super(marca, modelo, portas);
    this.velocidadeMax = velocidadeMax;
  }

  descricao() {
    return `Carro esportivo ${this.marca} ${this.modelo}, ${this.portas} portas, velocidade máxima de ${this.velocidadeMax} km/h.`;
  }
}

// Testando a hierarquia
const veiculo = new Veiculo("Genérico", "Modelo X");
const carro = new Carro("Toyota", "Corolla", 4);
const carroEsportivo = new CarroEsportivo("Ferrari", "488 GTB", 2, 330);

console.log(veiculo.descricao());
console.log(carro.descricao());
console.log(carroEsportivo.descricao());