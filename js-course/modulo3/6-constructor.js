class Pessoa {
  nome;
  idade;
  ano_de_nascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.ano_de_nascimento = 2024 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const ana = new Pessoa("Ana Lara", 23);
const luis = new Pessoa("Luis Felipe", 31);

ana.descrever();
luis.descrever();

console.log(ana);
console.log(luis);
