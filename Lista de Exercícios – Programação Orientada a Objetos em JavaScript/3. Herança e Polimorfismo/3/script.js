// Crie uma função mostrarSom(animal) que receba qualquer objeto de Animal e chame o método falar().

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return `O animal faz um som.`
    }
}

class Cachorro extends Animal {
    falar() {
        return `${this.nome} Faz: Au Au!`
    }
}

class Gato extends Animal {
    falar() {
        return `${this.nome} Faz: Miau!`
    }
}

// Função polimórfica
function mostrarSom(animal) {
    console.log(animal.falar());
}

// teste
const dog1 = new Cachorro('Fly');
const cat1 = new Gato('O exterminador do futuro');
const animal = new Animal('Bicho')

mostrarSom(dog1); 
mostrarSom(cat1);     
mostrarSom(animal);