//1. Crie um array chamado listaDeCompras com os itens: “arroz”, “feijão”, “macarrão”.Depois, adicione “leite” ao final da lista e remova o primeiro item.

let listaDeCompras = ['arroz', 'feijão', 'macarrão']

console.log('----lsita padrão----')
console.log(listaDeCompras, '\n')

console.log('----lista com leite----')
listaDeCompras.push('leite') // adiciona "leite" no final
console.log(listaDeCompras, '\n')

console.log('----lista sem o primeiro item----')
listaDeCompras.shift() // remove o primeiro
console.log(listaDeCompras)

// push() → adiciona no final.

// pop() → remove do final.

// shift() → remove do início.

// unshift() → adiciona no início.

// splice(index, quantidade) → remove qualquer posição que você quiser.
