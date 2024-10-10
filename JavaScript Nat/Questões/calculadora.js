function calcular(num1, num2, operacao) {
    let resultado;
  
    switch (operacao) {
      case 'add':
        resultado = num1 + num2;
        break;
      case 'sub':
        resultado = num1 - num2;
        break;
      case 'mult':
        resultado = num1 * num2;
        break;
      default:
        return 'Operação inválida';
    }
    
    return `Resultado: ${resultado}`;
  }
  
  console.log(calcular(10, 2, 'add'));  
  console.log(calcular(8, 19, 'sub'));  
  console.log(calcular(5, 5, 'mult'));  
  
