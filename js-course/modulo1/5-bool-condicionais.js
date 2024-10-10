const numero = 2;

const ehNumeroPar = numero % 2 === 0;
// "==" ignora o tipo da variavel, então converte para numero nesse caso se não for numero
// "===" sempre para fazer as comparações

console.log(ehNumeroPar);

if (numero === 0) {
  console.log("O número é inválido.");
} else if (ehNumeroPar) {
  console.log("O número é par!");
} else {
  console.log("O número é ímpar!");
}
