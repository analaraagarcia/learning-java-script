/**
 * Elabore um algoritmo que calcule o valor a ser pago por um produto,
 * considerando o preço normal de etiqueta e a escolha da condição de pagamento.
 * Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
 * escolhida e efetuar o cálculo adequado.
 *
 * - À vista débito: 10% de desconto --------------------(opção 1)
 * - À vista no dinheiro ou pix: 15% de desconto --------(opção 2)
 * - Em duas vezes: preço normal ------------------------(opção 3)
 * - Acima de duas vezes: + 10% de juros ----------------(opção 4)
 */

const preco_etiqueta = 250.0;
let modo_pagamento = 1;
let valor_pago;

if (modo_pagamento === 1) {
  valor_pago = preco_etiqueta * 0.9;
} else if (modo_pagamento === 2) {
  valor_pago = preco_etiqueta * 0.85;
} else if (modo_pagamento === 3) {
  valor_pago = preco_etiqueta;
} else {
  valor_pago = preco_etiqueta * 1.1;
}

console.log("VALOR A PAGAR: R$", valor_pago.toFixed(2));
