// 2. Crie um array chamado alunos com 3 objetos, cada um com as propriedades: nome e idade. Depois, exiba apenas os nomes dos alunos com mais de 17 anos. 

let alunos = [
    { nome: 'Ana', idade: 16 },
    { nome: 'Bruno', idade: 20 },
    { nome: 'Carla', idade: 18 }
];

let maiorDeIdade = alunos
    .filter(aluno => aluno.idade > 17) // mantém só os alunos com idade > 17
    .map(aluno => aluno.nome); // pega apenas os nomes

console.log(maiorDeIdade)