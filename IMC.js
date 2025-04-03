function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let resultado = document.getElementById('resultado');
  
    if (peso === '' || altura === '') {
      resultado.textContent = 'Por favor, preencha todos os campos.';
      resultado.style.color = 'red';
      return;
    }
  
    // Calcula o IMC
    let imc = peso / (altura * altura);
  
    // Exibe o resultado
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} - ` + classificarIMC(imc);
    resultado.style.color = 'black';
  }
  
  function classificarIMC(imc) {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 39.9) {
      return 'Obesidade';
    } else {
      return 'Obesidade grave';
    }
  }
  