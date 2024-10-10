/*
Faça um programa para calcular o valor de uma viagem
Você terá 3 variaveis:
1 - preço do combustível
2 - gasto medio de combustivel do carro por Km
3 - distância em Km da viagem
Imprima no console o valor gasto na viagem
*/

const preco_combustivel = 3.8;
const consumo_km_por_litros = 10;
const distancia_km = 1500;

const litros_gastos = distancia_km / consumo_km_por_litros;
const valor = litros_gastos * preco_combustivel;

console.log("gastei R$", valor.toFixed(2));

// toFixed: fixa uma quantidade de casas decimais, nesse caso 2 casas
