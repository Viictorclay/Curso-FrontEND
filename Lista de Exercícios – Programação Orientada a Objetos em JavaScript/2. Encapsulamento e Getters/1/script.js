class ContaBancaria {
  #saldo; // atributo privado

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }

  // Método para depositar dinheiro
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
    } else {
      console.log("Valor inválido para depósito.");
    }
  }

  // Getter para consultar saldo
  get saldo() {
    return this.#saldo;
  }

  // Setter para alterar o saldo de forma controlada
  set saldo(valor) {
    if (valor >= 0) {
      this.#saldo = valor;
    } else {
      console.log("Saldo não pode ser negativo.");
    }
  }

  // Método para consultar saldo de forma prática
  consultarSaldo() {
    console.log(`Saldo atual: R$${this.#saldo.toFixed(2)}`);
  }
}

// Exemplo de uso
const conta = new ContaBancaria(100);
conta.consultarSaldo(); // Saldo atual: R$100.00
conta.depositar(50);    // Depósito de R$50.00 realizado com sucesso!
conta.consultarSaldo(); // Saldo atual: R$150.00

// Usando getter e setter
console.log(conta.saldo); // 150
conta.saldo = 200;
console.log(conta.saldo); // 200
conta.saldo = -50;         // Saldo não pode ser negativo