// Crie um array chamado contatos que armazena objetos com: nome, telefone, email. Depois, adicione um novo contato, e exiba todos os nomes dos contatos armazenados. 

let contatos = [];
let nome = '';
let telefone = '';
let email = '';

// função para levat para a array
function guardar(nome, telefone, email) {
  contatos.push({ nome, telefone, email });
}


// função para pegar os dados
function procedimento( nome, telefone, email ) {
  nome = window.prompt('Nome do usuário: ');
  telefone = window.prompt('Telefone com DDD: ');
  email = window.prompt('Agora o e-mail: ');

  return { nome, telefone, email };
}

// loop — sistema principal
do {
  // pega os dados digitados
  let novoContato = procedimento();
  // guarda no array
  guardar(novoContato.nome, novoContato.telefone, novoContato.email)
  
  // pergunta se quer continuar
  var contnue = window.confirm('Caso queria continuar adcionando precione OK e siga o procedimento.')
  
} while (contnue === true);

// mostrando dados

// criando uma string para acumular os contatos
let listaContatos = "📒 Lista de Contatos:\n\n";

// um método de array que executa uma função para cada elemento do array.
contatos.forEach((contato, index) => {
  listaContatos += `${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, E-mail: ${contato.email}\n`;
});

// mostra todos os contatos em um único alert
window.alert(listaContatos);