const ana = {
  nome: "Ana Lara Garcia",
  idade: 23,
  altura: 1.61,
};

ana.altura = 1.8; // muda o valor dessa chave do objeto
console.log(ana);

delete ana.idade; // deleta a chave e o valor
console.log(ana);
