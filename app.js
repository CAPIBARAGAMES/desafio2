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
  