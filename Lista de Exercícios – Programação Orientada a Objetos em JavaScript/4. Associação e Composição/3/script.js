// Crie uma classe Aluno que tenha vários Cursos (associação múltipla).


class Curso {
    constructor(nome) {
        this.nome = nome;
    }
}

class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.cursos = []; // associação múltipla
    }

    // método para associar um curso ao aluno
    matricular(curso) {
        process.stdout.write(`📚 Matriculando ${this.nome} no curso de ${curso.nome}`);

        let pontos = 0;
        const animacao = setInterval(() => {
            process.stdout.write('.');
            pontos++;

            if (pontos === 5) {
                clearInterval(animacao);
                console.log('\n');
                setTimeout(() => {
                    this.cursos.push(curso);
                    console.log('================================================================');
                    console.log(`🎓 Aluno(a): ${this.nome}`);
                    console.log(`📘 Curso adicionado: ${curso.nome}`);
                    console.log('🟢 Status: Matrícula realizada com sucesso!');
                    console.log('================================================================\n');
                }, 500);
            }
        }, 400);
    }

    // exibir todos os cursos associados
    exibirInfo() {
        console.log('================================================================');
        console.log(`🎓 Aluno(a): ${this.nome}`);
        if (this.cursos.length > 0) {
            console.log('📚 Cursos matriculados:');
            this.cursos.forEach((curso, i) => {
                console.log(`   ${i + 1}. ${curso.nome}`);
            });
            console.log('🟢 Status: Aluno matriculado em cursos.');
        } else {
            console.log('⚠️ Nenhum curso matriculado no momento.');
        }
        console.log('================================================================\n');
    }
}

// --- Execução ---
const aluno1 = new Aluno('Victorclay');
const curso1 = new Curso('Desenvolvimento Web');
const curso2 = new Curso('Banco de Dados');
const curso3 = new Curso('Lógica de Programação');

// 1 Mostra status inicial
aluno1.exibirInfo();

// 2 Matricula o aluno em dois cursos com delay
setTimeout(() => {
    aluno1.matricular(curso1);
}, 1000);

setTimeout(() => {
    aluno1.matricular(curso2);
}, 4000);

setTimeout(() => {
    aluno1.matricular(curso3);
}, 7000);

// 3 Depois de tudo, mostra o status atualizado
setTimeout(() => {
    aluno1.exibirInfo();
}, 11000);