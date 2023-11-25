let select = document.querySelector('#MOEDA');
let button = document.querySelector('#button');

let USDparaBRL;
let LTCparaBRL;
let CotAtualCoin;
var coin = 0.614;

const apiUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL,LTC-BRL'

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    USDparaBRL = data.USDBRL.bid;
    LTCparaBRL = data.LTCBRL.bid;
    console.log('Cotação atual USD -> BRL: ', USDparaBRL, '\nCotação USD -> EUR: ', LTCparaBRL);

    CotAtualCoin = coin * USDparaBRL;

    console.log ('\nVALOR DO COIN HOJE: ', CotAtualCoin.toFixed(2),'R$')
})

button.addEventListener('click', () => {
    console.log("BOTAO OK");
  
    var valorAconverter = parseFloat(document.getElementById("inputConverter").value);

    var coinPreal = valorAconverter * CotAtualCoin
    console.log(coinPreal.toFixed(2));

    var DolarParaReal = 1.25 * USDparaBRL
    var resultCSMoneyP = coinPreal * 0.015
    var resultCSMoney = resultCSMoneyP + coinPreal + DolarParaReal
    
    var resultCSFloatC = valorAconverter * coin
    var resultCSFloat = (resultCSFloatC * 0.05) + resultCSFloatC

    document.getElementById('resultadoCSMoney').innerHTML = 'CS.MONEY' + ' = ' + resultCSMoney.toFixed(2) + " R$"
    document.getElementById('resultadoCSFloat').innerHTML = 'CS FLOAT' + ' = ' + resultCSFloat.toFixed(2) + " $"

  });


  