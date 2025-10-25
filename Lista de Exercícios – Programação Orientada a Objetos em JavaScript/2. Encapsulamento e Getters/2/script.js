class Aluno {
  #nota; // atributo privado

  constructor(notaInicial = 0) {
    this.nota = notaInicial; // usa o setter para validar
  }

  // Getter para acessar a nota
  get nota() {
    return this.#nota;
  }

  // Setter para validar a nota entre 0 e 10
  set nota(valor) {
    if (valor >= 0 && valor <= 10) {
      this.#nota = valor;
    } else {
      console.log("Nota inválida! Deve estar entre 0 e 10.");
    }
  }
}

// Exemplo de uso
const aluno1 = new Aluno();
aluno1.nota = 8;      // Define nota válida
console.log(aluno1.nota); // 8

aluno1.nota = 12;     // Tenta definir nota inválida
console.log(aluno1.nota); // Continua 8