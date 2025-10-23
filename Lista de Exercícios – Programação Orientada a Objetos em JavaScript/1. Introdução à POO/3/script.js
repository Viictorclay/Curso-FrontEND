// 3 Crie uma classe Produto com um construtor que receba nome e preço. Imprima os dados.

class Produto {
    constructor(nome, preço) {
        this.nome = nome;
        this.preço = preço;
    }

    dadosProduto() {
        return `Produto: ${this.nome} | Preço: ${this.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
    }

}

class Estoque {
    constructor() {
        this.estoque = [];
    }
    
    atribuirEstoque(produto) {
        this.estoque.push(produto)
        console.log(`✅ ${produto.nome} foi adicionado ao estoque!`);
    }

    exibirProdutos() {
        console.log("\n══════════════════════════════════════════");
        console.log(`📦 Produtos no Estoque: ${this.estoque.length}`)
        console.log("══════════════════════════════════════════");

        if (this.estoque.length === 0) {
            console.log("⚠️ Estoque Vazio.\n")
        } else {
            console.log(`🧾 Lista de Produtos (${this.estoque.length}):\n`);
            this.estoque.forEach((e, i) => {
                console.log(`#${i + 1} - ${e.dadosProduto()}`)
            })
        }
    }
}

const estoque = new Estoque();

const p1 = new Produto('Maçã', 2.50);
const p2 = new Produto('Pêra', 1.50);
const p3 = new Produto('Banana', 5.50);

estoque.atribuirEstoque(p1);
estoque.atribuirEstoque(p2);
estoque.atribuirEstoque(p3);

estoque.exibirProdutos();