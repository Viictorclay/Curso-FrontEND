// Crie uma classe Funcionario e uma subclasse Gerente com atributo bônus e método calcularSalarioTotal().

class Funcionario {
    constructor(nome, salario,) {
        this.nome = nome;
        this.salario = salario;
    }

    exibirInfo() {
        return `Funcionario: ${this.nome} | Salário base: ${this.salario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }

    calcularSalarioTotal() {
        return this.salario + this.bonus;
    }

    exibirInfo() {
        return `Gerente: ${this.nome} | Salário Total: ${this.calcularSalarioTotal().toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
    }
}

const funcionario = new Funcionario('Beatriz', 3000);
const gerente = new Gerente('Clay', 5000, 1500);

console.log(funcionario.exibirInfo());
console.log(gerente.exibirInfo());