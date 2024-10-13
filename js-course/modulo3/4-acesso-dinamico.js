const pessoa = {
  nome: "Ana Lara Garcia",
  idade: 23,
  altura: 1.61,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

const atributo = "nome";

console.log(pessoa[atributo]);
