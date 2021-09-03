function lerEntrada(texto) {
  var resultado = [];
  texto.split('').forEach(function(item, index){
    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 122)
        resultado[index] = item.charCodeAt() - (item.charCodeAt() < 97 ? 65 : 97);
    else if(item.charCodeAt() == 32)
        resultado[index] = item.charCodeAt();
  }, {resultado});
  return resultado;
}

function valEntr(valor){
    if(valor && valor?.replaceAll(' ', '').match(/^[a-zA-Z]*$/))
        return lerEntrada(valor);
    else
        alert("Erro ao ler chave/entrada! Informe apenas letras de A-Z.");
}

function processarChave(chNum, entrNum) {
  var chNumFinal = [];

  if (chNum?.length <= entrNum?.length) {
    entrNum?.forEach(function (item, index) {
      if(item != 32)
        chNumFinal[index] = chNum[index % chNum.length];
      else
        chNumFinal[index] = item;
    },{ resultado });
  } else {
    alert("Erro! Informe uma chave de tamanho igual a entrada.");
  }

  return chNumFinal;
}
function valorValid(chvFin, item, op) {
  return (item + (chvFin * op)) % 26;
}
function getOp(func) {
  return func == "IN" ? 1 : -1;
}
function getChvFin(chvFin, func) {
  return chvFin + (!(func == "IN" || chvFin >= 0) ? 26 : 0);
}

function calcularCifra(func) {
  var entrNum = valEntr($("#valor").val());
  var chaveNum = valEntr($("#chave").val());

  var chaveFinal = processarChave(chaveNum, entrNum);

  var result = "";
  entrNum?.forEach(function (item, index) {
      if (chaveFinal[index] != 32){
        var chvFin = valorValid(chaveFinal[index], item, getOp(func));
        result += String.fromCharCode(getChvFin(chvFin, func) + 65);
      }else{
        result += String.fromCharCode(chaveFinal[index]);
      }
  },{result });

  $("#resultado").val(result);
}
