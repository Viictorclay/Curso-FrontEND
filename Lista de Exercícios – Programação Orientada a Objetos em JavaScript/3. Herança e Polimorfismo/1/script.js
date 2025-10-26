// Crie uma classe Animal e subclasses Cachorro e Gato que sobrescrevam o método falar().

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return 'O Animal faz um som.';
    }
}

class Cachorro extends Animal {
    falar() {
        return `${this.nome} faz: Au Au!`;
    }
}

class Gato extends Animal {
    falar() {
        return `${this.nome} faz: Miau!`;
    }
}

const animais = [new Cachorro("Rex"), new Gato("Mimi")];

for (const animal of animais) {
  console.log(animal.falar());
}