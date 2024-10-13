const pessoa = {
  nome: "Ana Lara Garcia",
  idade: 23,
  altura: 1.61,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

pessoa.nome = "Felipe";
pessoa.idade = 30;
pessoa.altura = 1.78;

pessoa.descrever();
