// 1 Crie uma classe Pessoa com atributos nome e idade. Crie dois objetos e exiba as informações.

// 2 Adicione à classe Pessoa um método apresentar() que exiba uma mensagem com nome e idade.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    aprensentar() {
        console.log(`Novo(a) Aluno(a): ${this.nome} Idade: ${this.idade}`)
    }
}

const p1 = new Pessoa('João', 20)
const p2 = new Pessoa('Maria', 25)

p1.aprensentar()
p2.aprensentar()