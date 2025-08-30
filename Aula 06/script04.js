// 4. Crie um array chamado carrinho com 3 objetos, cada um contendo nome e preco. Use map( ) ou for para calcular e mostrar o total da compra. Em seguida, faça uma atualização do código, mostrando somente os produtos com preço acima de R$ 50 usando filter( ).

let carrinho = [
    { nome: 'Mouse', preço: 137.99},
    { nome: 'Teclado', preço: 150.00},
    { nome: 'MousePad', preço: 25.00}
];

let total = carrinho
    .map(valor => valor.preço)
    .reduce((soma, preço) => soma + preço, 0); // pega todos os elementos de um array e reduz a um único valor

let totalFormatado = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })

console.log('Total:', totalFormatado);

let acimaDe50 = carrinho
    .filter(valor => valor.preço > 50)
    .map(produto => `${produto.nome} - ${produto.preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })}`);

console.log('Produtos acima de 50: \n', acimaDe50);