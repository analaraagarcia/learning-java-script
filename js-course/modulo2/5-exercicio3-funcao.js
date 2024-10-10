function valor_a_ser_pago(modo_pagamento) {
  if (modo_pagamento === 1) {
    return aplica_desconto(10);
  } else if (modo_pagamento === 2) {
    return aplica_desconto(15);
  } else if (modo_pagamento === 3) {
    return aplica_desconto(0);
  } else {
    return aplica_juros(10);
  }
}

function aplica_desconto(desconto) {
  return preco_etiqueta * (1 - desconto / 100);
}

function aplica_juros(juros) {
  return preco_etiqueta * (1 + juros / 100);
}

const preco_etiqueta = 100.0;
let modo_pagamento = 4;

console.log("Valor a pagar: R$", valor_a_ser_pago(modo_pagamento).toFixed(2));
