// Class e seus metodos
class Retangulo {
    #largura;
    #altura;

    constructor(largura, altura) {
        this.#largura = largura;
        this.#altura = altura;
    }

    // Pegando medidas privadas
    get medidas() {
        return { largura: this.#largura, altura: this.#altura }
    }

    // Verificando medidas
    set medidas({ novaAltura, novaLargura }) {
        if (novaAltura < 0 || novaLargura < 0) {
            console.log('⚠️ Não é permitido números negativos. Digite novamente. ⚠️\n')
        } else {
            this.#altura = novaAltura;
            this.#largura = novaLargura;
            console.log('✔️ Medida alterado com sucesso! ✔️\n');
        }
    }

    mostrar_area() {
        console.log('===== Mostrando Área =====')
        console.log(`Largura: ${this.#largura}  Altura: ${this.#altura}`)
        console.log(`Área: ${this.#largura * this.#altura}\n`)
    }

    /*
    calcularArea() {
        return this.#largura * this.#altura
    }
    */

}

// Atribuindo medidas
const ret = new Retangulo(10, 5)

// Mostrando Medidas e a Área
ret.mostrar_area()

// Mostrando medidas ALTERANDO com valor negativo
ret.medidas = { novaLargura: -5, novaAltura: -15};
ret.mostrar_area()