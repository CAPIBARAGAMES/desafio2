function imc(peso, altura) {
    
    let indiceDeMasaCorporal = peso / (altura * altura);
    console.log(indiceDeMasaCorporal)
}


imc(50, 1.40);



function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  
function convertDivisa(dolar) {
 let pesoMx = 20.26
 conversion = pesoMx * dolar
  console.log(conversion)
}


let dolares = 2
convertDivisa(dolares);


function medidas(altura, anchura) {

  let area = altura * anchura
  console.log(area)

  let perimetro = (2 * altura) + (2 * anchura)
  console.log(perimetro)
  
}

medidas(2,4);



function medidasCirculo(radio) {
  let pi = 3.14

  let area = pi * (radio * radio)
  console.log(area)

  let perimetro = (2 * pi) * radio
  console.log(perimetro)
}

medidasCirculo(2);



function tablaDelDos(num) {

  let constant = 2
  let resultado = constant * num
  console.log(resultado);
  
}

tablaDelDos(2);