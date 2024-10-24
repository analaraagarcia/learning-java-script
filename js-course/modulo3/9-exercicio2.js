/**
 Crie uma classe para representar pessoas.
 Para cada pessoa teremos os atributos nome, peso e altura.
 As pessoas devem ter a capacidade de dizer o valor do seu IMC
 (IMC = peso / (altura * altura)).
 Instancia uma pessoa chamada José que tenha 70kg e 1.75 de
 altura e peça a ele para dizer o valor do seu IMC.
 */

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcula_IMC() {
    return this.peso / (this.altura * this.altura);
  }

  classifica_IMC() {
    let imc = this.calcula_IMC();
    if (imc < 18.5) {
      return "Abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
      return "Acima do peso.";
    } else if (imc >= 30 && imc < 40) {
      return "Obeso.";
    } else {
      return "Obesidade grave.";
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.classifica_IMC());

const ana = new Pessoa("Ana", 63, 1.61);
console.log(ana.classifica_IMC());
