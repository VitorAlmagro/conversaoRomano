var dados =
[
  {romano: 'I', inteiro: '1'},
  {romano: 'V', inteiro: '5'},
  {romano: 'X', inteiro: '10'},
  {romano: 'L', inteiro: '50'},
  {romano: 'C', inteiro: '100'},
  {romano: 'D', inteiro: '500'},
  {romano: 'M', inteiro: '1000'}
]

function conversao (searchElement) {

  let resultado = [];

  // transformando a string recebida como parametro em um array de caracteres
  let searchArray = searchElement.toUpperCase().split('');

  // tamanho do array
  let tamanho = searchArray.length;

  let aux = 0;

  //console.log(searchArray);

  // loop para substituir os valores romanos do array por valores decimais
  while(aux < tamanho) {

    dados.find(function(element, index, array){

        if (searchArray[aux] === element.romano) {

          resultado.push(element.inteiro);
        }
    });

    aux = aux + 1;
  }

  //console.log(resultado);

  // reiniciando as variaveis para o novo loop
  tamanho = resultado.length;
  aux = 0;

  let final = 0;

  while(aux < tamanho) {

        //console.log('resultado[aux]: ' + resultado[aux]);
        //console.log('resultado[aux + 1]: ' + resultado[aux + 1]);

        // se o char posterior for maior que o anterior, entao fazer uma subtracao e incrementar 2 na aux (para o loop pular o proximo que ja foi utilizado)
        if (parseInt(resultado[aux]) < parseInt(resultado[aux + 1])) {
            //console.log('entrou no if')
            final = final + parseInt(resultado[aux + 1]) - parseInt(resultado[aux]);
            aux = aux + 2;
        }
        // se nao somar o que esta acumulado na final com o valor do loop
        else {
            //console.log('entrou no else')
            final = final + parseInt(resultado[aux]);
            aux = aux + 1;
        }

        //console.log('final : ' + final);
  }

  return final;

}

resultado = conversao('I');

console.log(resultado);
