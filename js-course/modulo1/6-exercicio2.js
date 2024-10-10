/**
Incremento do exercicio 1:
Faça um programa para calcular o valor de uma viagem
Você terá 5 variaveis:
1 - preço do etanol
2 - preco da gasolina
3 - tipo de combustivel do carro
4 - gasto medio de combustivel do carro por Km
5 - distância em Km da viagem
Imprima no console o valor gasto na viagem
 */

const preco_etanol = 3.8;
const preco_gasolina = 5.7;
const tipo_combustivel = "etanol";
const gasto_km_por_litro = 10;
const distancia_km = 150;

let valor_gasto;

const litros_gastos = distancia_km / gasto_km_por_litro;

if (tipo_combustivel === "etanol") {
  valor_gasto = litros_gastos * preco_etanol;
} else {
  valor_gasto = litros_gastos * preco_gasolina;
}

console.log("R$", valor_gasto.toFixed(2));
