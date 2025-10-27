// Crie classes Professor e Disciplina, associando o professor à disciplina.

// Primeiro declaro o que será associado
class Disciplina {
    constructor(nome) {
        this.nome = nome;
    }
}

// Segundo declaro a 'Classe que contém a associação'
class Professor {
    constructor(nome) {
        this.nome = nome;
        this.disciplina = null; // associação
    }

    // Método para associar as duas classes
    associar(disciplina) {
        this.disciplina = disciplina;
    }

    // Método para exibir as Informações com efeito de processamento
    exibirInfo() {
            if (this.disciplina) { // o 'this.nome' sempre será o da classe
                process.stdout.write('vinculando') // escreve sem pular linha

                let pontos = 0;
                const animacao = setInterval(() => {
                    process.stdout.write('.');
                    pontos++;
                    if ( pontos === 5) {
                        clearInterval(animacao);
                        console.log('\n');
                        setTimeout(() => {
                            console.log('================================================================')
                            console.log(`👩‍🏫 Professor(a): ${this.nome} \n📘 Disciplina: ${this.disciplina.nome} \n🟢 Status: Associado com sucesso!` ); // para colocar nome de fora da classe 'this.*nomeDoAssociado*.nome
                            console.log('================================================================\n')
                        },500);
                    }
                }, 500); // meio segundo entre cada ponto
                
            } else {
                console.log('================================================================')
                console.log(`👩‍🏫 Professor(a): ${this.nome} \n⚠️ Status: Não está vinculado(a) a nenhuma disciplina no momento.`)
                console.log('================================================================\n')
        }
       
    }
}

// Exemplo de uso

const prof1 = new Professor('Beatriz Marinheiro')
const disc1 = new Disciplina('Desenvolvimento WEB')

prof1.exibirInfo(); // Antes de associar
setTimeout(() => {
    prof1.associar(disc1);
    prof1.exibirInfo(); // Associou
}, 2000);