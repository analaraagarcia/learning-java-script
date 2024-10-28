const notas = [];
notas.push(6);
notas.push(8);
notas.push(10);
notas.push(9);
notas.push(7);

let soma = 0;

// estrutura de repetição
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma += nota;
}

let media = soma / notas.length;

console.log(media);
