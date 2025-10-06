// ==============================
// PARTE 1 - Classe e Estrutura
// ==============================

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.disponivel = true; // true = disponível | false = emprestado
    }

    // 1 - Informações do livro
    informacoes() {
        const status = this.disponivel ? "Disponível" : "Emprestado";
        return `${this.titulo} - ${this.autor} (${this.ano}) | Status: ${status}`
    }

    // 2 - Emprestar livro
    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`\n📚 Você emprestou o livro: '${this.titulo}'.`);
        } else {
            console.log(`\n⚠️ O livro '${this.titulo}' já está emprestado!`)
        }
    }

    // 3 - Devolver livro
    devolver() {
        if (!this.disponivel) {
            this.disponivel = true;
            console.log(`\n✅ Livro '${this.titulo}' devolvido com sucesso!`);
        } else {
            console.log(`\n⚠️ O livro '${this.titulo}' já estava disponível.`)
        }
    }
}

// Criando o array biblioteca
const biblioteca = [];

// Criando 4 objetos da classe Livro
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new Livro("O Hobbit", "J.R.R. Tolkin", 1937);
const livro3 = new Livro("1984", "George Orwell", 1949);
const livro4 = new Livro("A Revolução dos Bichos", "George Orwell", 1945);

// Adicionando à biblioteca
biblioteca.push(livro1, livro2, livro3, livro4);


// ==============================
// PARTE 2 - Funções da Biblioteca
// ==============================

function listarDisponiveis() {
    console.log("\n📖 Livros disponíveis:");
    const disponiveis = biblioteca.filter(Livro => Livro.disponivel);
    if (disponiveis.length > 0) {
        disponiveis.forEach(Livro => console.log(" - " + Livro.informacoes()));
    } else {
        console.log("❌ Nenhum livro disponível no momento.")
    }
}

function emprestarLivro(titulo) {
    const livro = biblioteca.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
    if (livro) {
        livro.emprestar();
    } else {
        console.log(`❌ Livro '${titulo}' não encontrado na biblioteca.`);
    }
}

function devolverLivro(titulo) {
    const livro = biblioteca.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
    if (livro) {
        livro.devolver();
    } else {
        console.log(`❌ Livro '${titulo}' não encontrado na biblioteca.`);
    }
}


// ==============================
// PARTE 3 - Testes no Console
// ==============================

console.log("===== TESTE DO SISTEMA =====");

// 1. Listar todos os livros disponíveis
listarDisponiveis();

// 2. Emprestar um livro
emprestarLivro("O Hobbit");

// 3. Tentar emprestar o mesmo livro novamente
emprestarLivro("O Hobbit");

// 4. Listar os livros disponíveis novamente
listarDisponiveis();

// 5. Devolver o livro
devolverLivro("O Hobbit");

// 6. Listar os livros disponíveis novamente
listarDisponiveis();