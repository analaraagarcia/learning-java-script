/**
 * Refazendo o exercicio do IMC utilizando funções
 */

function calcula_IMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classifica_IMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso.";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal.";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso.";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso.";
  } else {
    return "Obesidade grave.";
  }
}

// funções invocadas imediatamente
(function main() {
  const peso = 63.2;
  const altura = 1.61;
  const imc = calcula_IMC(peso, altura);
  console.log(classifica_IMC(imc));
})();
