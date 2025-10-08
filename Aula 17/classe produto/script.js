// Class e seus metodos
class Produto {
    #nome;
    #preco;
    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    }
    

    // Pegando valor privado
    get preco() {
        return this.#preco
    }

    // Verificando Valor
    set preco(novoPreco) {
        if (novoPreco < 0) {
            console.log('⚠️ Não é permitido números negativos. Digite novamente. ⚠️\n')
        } else {
            this.#preco = novoPreco
            console.log('✔️ Preco alterado com sucesso! ✔️')
        }
    }

    mostrar() {
        console.log('===== Mostrando Produto e Valor =====')
        console.log(`Produto: ${this.#nome} | Preço: ${this.#preco.toLocaleString("pt-BR", { style:'currency', currency: 'BRL' })}\n`)
    }
}

// Atribuindo valores
const p1 = new Produto("Celular", 2500)

// Mostrando Produto e Valor
p1.mostrar()

// Mostrando Produto e Valor ALTERANDO com valor negativo
p1.preco = -1000
p1.mostrar()