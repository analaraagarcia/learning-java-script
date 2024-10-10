/**
 * Formula do IMC:
 * IMC = peso / (altura * altura)
 *
 * Elabore um algoritmo que, dado o peso e a altura de um adulto,
 * mostre sua condição de acordo com a tabela abaixo.
 *
 * - Abaixo de 18.5: ABAIXO DO PESO
 * - Entre 18.5 e 25: PESO NORMAL
 * - Entre 25 e 30: ACIMA DO PESO
 * - Entre 30 e 40: OBESO
 * - Acima de 40: OBESIDADE GRAVE
 */

const peso = 63.2;
const altura = 1.61;

let imc = peso / (altura * altura);

console.log(imc.toFixed(2));

if (imc < 18.5) {
  console.log("Abaixo do peso.");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal.");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso.");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso.");
} else {
  console.log("Obesidade grave.");
}
