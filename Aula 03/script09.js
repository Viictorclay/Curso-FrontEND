// 9° Faça um programa usando a estrutura do…while para pedir nomes ao usuário até que ele digite a palavra “sair”. 

let NickNames = [] // ARRAY = Lista em um ordem específica

function names(nick) { // FUNÇÃO para guardar os nomes
  NickNames.push(nick); // .push = para subir o nick para função / para .push A — o nome
}

do { // LOOPING com do..while para sempre pedir um nome até que o usuario queira sair
  let nick = window.prompt("digete EXIT para sair\nDIGITE UM NOME: ");

  if (nick.toLowerCase() === 'exit') { // condição de permanencia 
    window.alert('Fim da seção.');
    window.alert("Nomes digitados: \n" + NickNames.join('\n')); // .join = transforma alista em string, pois .alert/.prompt só acentam strings
    break
  } else { // subindo o nome para a lista/array, dando continuidade ao looping
    names(nick);
  }

} while (true);