class Pessoa {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const ana = new Pessoa();
ana.nome = "Ana Lara";
ana.idade = 23;

const luis = new Pessoa();
luis.nome = "Luis Felipe";
luis.idade = 30;

console.log(ana);
ana.descrever();

console.log(luis);
luis.descrever();
