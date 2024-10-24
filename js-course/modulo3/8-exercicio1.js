/**
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um 
gasto médio de combustível por Km rodado.
Crie um método que dado a quantidade de Km 
e o preço do combustível nos dê o valor 
gasto em reais para realizar o percurso.
 */

class Carro {
  marca;
  cor;
  gasto_combustivel;

  constructor(marca, cor, gasto_combustivel) {
    this.marca = marca;
    this.cor = cor;
    this.gasto_combustivel = gasto_combustivel;
  }

  calcula_gasto(distancia, preco_combustivel) {
    return distancia * this.gasto_combustivel * preco_combustivel;
  }
}

const preco_combustivel = 5.6;
const distancia = 250;

const carro1 = new Carro("Chevrolet", "Prata", 1 / 12);
console.log(carro1.calcula_gasto(250, 5));
