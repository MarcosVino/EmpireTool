let select = document.querySelector('#MOEDA');
let button = document.querySelector('#button');
let cotAutal = document.getElementById('cotAtual');



// Capturando a cotação do dia
let USDparaBRL;
let USDparaEUR;
let CotAtualUSDBRL;
let CotAtualUSDEUR;
let ValorCoin = 0.614;

const apiUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR'

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const USDparaBRL = data.USDBRL.bid;
    const USDparaEUR = data.USDEUR.bid;
    console.log('Cotação atual USD -> BRL: ', USDparaBRL, '\nCotação USD -> EUR: ', USDparaEUR);

    var CotAtualUSDEUR = ValorCoin * USDparaEUR;
    var CotAtualUSDBRL = ValorCoin * USDparaBRL;

    document.getElementById('resultado').innerHTML = '1 ₵' + ' = ' + CotAtualUSDBRL.toFixed(2) + " R$"

button.addEventListener('click', () => {
    console.log(select.value);
  
    if (select.value == "BRL") {
      var valorAconverter = parseFloat(document.getElementById("inputConverter").value);
      var resultado = CotAtualUSDBRL * valorAconverter;
      document.getElementById("resultado").innerHTML = valorAconverter + " ₵" + " = " + resultado.toFixed(2) + " R$";
      console.log("deu certo");
    } else if (select.value == "EURO") {
      var valorAconverter = parseFloat(document.getElementById("inputConverter").value);
      var resultado = CotAtualUSDEUR * valorAconverter;
      document.getElementById("resultado").innerHTML = valorAconverter + " ₵" + " = " + resultado.toFixed(2) + " €";
      console.log("euro deu certo");
    } else if (select.value == "DOLAR") {
      var valorAconverter = parseFloat(document.getElementById("inputConverter").value);
      var resultado = 0.614 * valorAconverter;
      document.getElementById("resultado").innerHTML = valorAconverter + " ₵" + " = " + resultado.toFixed(2) + " US$";
      console.log("dolar deu certo");
    } else if (select.value == "COIN") {
      var valorAconverter = parseFloat(document.getElementById("inputConverter").value);
      var resultado = valorAconverter / 3.01;
      document.getElementById("resultado").innerHTML = valorAconverter + " R$" + " = " + resultado.toFixed(2) + " ₵";
      console.log("COIN deu certo");
    }
  });
  
  })
  .catch(error => console.error('Erro ao obter cotações', error));


  