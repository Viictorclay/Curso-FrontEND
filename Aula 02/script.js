let assinaturaCLUBE;
let valorDESCONTADO;
let valorPARCELADO;
let parcelas;
let valorComJuros;
let areaESPECIAl;

//Solicita as informações
let nome = prompt('Nome do cliente:');
let idade = Number(prompt('Idade do cliente:'));
let assinatura = prompt('É assinante do Clube? (Sim/Não)');
let valorTOTAL = Number(prompt('Qual foi o valor total da compra?'));

// Verifica se tem assinatura
if (['sim'].includes(assinatura.toLowerCase())){
  assinaturaCLUBE = true;
} else {
  assinaturaCLUBE = false;
}
 
// Área especial - Apenas >=21 com assinaturaCLUBE
if (idade >= 21 && assinaturaCLUBE) {
  areaESPECIAl = prompt('Você tem acesso a nossa Área especial! Deseja acessar agora?')
  
  if (['sim','ss'].includes(areaESPECIAl.toLowerCase())){
    console.log('======= Área Especial =======')
  } else if (['não','nao','nn'].includes(areaESPECIAl.toLocaleLowerCase())){
    console.log('======= Área Convencional =======')
  }
}
else {
  console.log('Infelizmente você não tem acesso a nossa área especial. Volte em outro momento ou assine o Clube.')
}

// Direcionando qual disconto recebera
if (assinaturaCLUBE === true){
  valorDESCONTADO = valorTOTAL - (valorTOTAL * 10/100);
} else if (assinaturaCLUBE === false){
  valorDESCONTADO = valorTOTAL - (valorTOTAL * 5/100);
}

// Parcelamento do valorDESCONTADO
let deseja = prompt('Deseja parcelar? Ira ser acrescentado 10% por mês');

if (['sim'].includes(deseja.toLowerCase())){
  parcelas = Number(prompt('Em quantas vezes? (2 a 5)'));
  valorComJuros = valorDESCONTADO * (1 + 10/100 * parcelas);
  valorPARCELADO = valorComJuros / parcelas;
}

// Mostra os resultados
console.log(`Cliente: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Assinatura: ${assinaturaCLUBE}`);
console.log(`Valor Total: R$ ${valorTOTAL.toFixed(2)}`);
console.log(`Valor com Disconto: R$ ${valorDESCONTADO.toFixed(2)}`);
console.log(`Maior de 20: ${idade >= 21 && assinaturaCLUBE}`);
if (valorComJuros) {
  console.log(`Valor com Juros: R$ ${valorComJuros.toFixed(2)}`);
  console.log(`Valor pro Mês: R$ ${valorPARCELADO.toFixed(2)}`);
}