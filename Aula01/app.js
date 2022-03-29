//Configurando o botão converter
function ConverterEmReal() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    //Fazendo a conversão matemática
    var valorEmReal = valorEmDolarNumerico * 5.07;

    var elementoValorConvertidoEmReal = document.getElementById(
      "valorConvertidoEmReal"
    );
  
    //Configurando oque vai aparacer junto com o resultado da conversão
    var valorConvertidoEmReal = "O resultado em real é: R$ " + valorEmReal;
    elementoValorConvertidoEmReal.innerHTML = valorConvertidoEmReal;
    document.getElementById("valorConvertidoEmEuro");
  }
  
  function ConverterEmEuro() {
     valorElemento = document.getElementById("valor");
     valor = valorElemento.value;
     valorEmDolarNumerico = parseFloat(valor);
  
    //Fazendo a conversão matemática
    var valorEmEuro = valorEmDolarNumerico * 1.09;

    var elementoValorConvertidoEmEuro = document.getElementById("valorConvertidoEmEuro")
  
    //Configurando oque vai aparacer junto com o resultado da conversão
    var valorConvertidoEmEuro = "O resultade em euro é: € " + valorEmEuro;
    elementoValorConvertidoEmEuro.innerHTML = valorConvertidoEmEuro;
  };
  
  function ConverterEmBitcoin() {
    valorElemento = document.getElementById("valor");
    valor = valorElemento.value;
    valorEmDolarNumerico = parseFloat(valor);
 
   //Fazendo a conversão matemática
   var valorEmBitcoin = valorEmDolarNumerico * 47556.40;

   var elementoValorConvertidoEmBitcoin = document.getElementById("valorConvertidoEmBitcoin")
 
   //Configurando oque vai aparacer junto com o resultado da conversão
   var valorConvertidoEmBitcoin = "O resultade em bitcoin é: BTC " + valorEmBitcoin;
   elementoValorConvertidoEmBitcoin.innerHTML = valorConvertidoEmBitcoin;
 };