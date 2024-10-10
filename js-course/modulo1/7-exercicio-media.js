/**
 * 1) Faça um algoritmo que, dadas 3 notas tiradas por um aluno em um semestre na faculdade,
 * calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:
 *
 * Média = (nota1 + nota 2 + nota3) / 3
 *
 * Classificação:
 * - Média menor que 5 = reprovação
 * - Média entre 5 e 7 = recuperação
 * - Média acima de 7 = aprovação
 */

const nota1 = 7.0;
const nota2 = 8.5;
const nota3 = 7.5;

let media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media < 5) {
  console.log("Aluno Reprovado.");
} else if (media >= 5 && media <= 7) {
  console.log("Aluno em Recuperação.");
} else {
  console.log("Aluno Aprovado.");
}
