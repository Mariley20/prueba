
function calcularMultiplicacion(numMultiplica,numValido){
  var resultado = numMultiplica.reduce(function(valorAnterior,valorActual){
    return parseInt(valorAnterior) * parseInt(valorActual);
  }) * numValido;
  return resultado;
}