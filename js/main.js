function calcular() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let numero3 = parseInt(document.getElementById("numero3").value);
  
    let numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => b - a);
    let segundoMaior = numeros[1];
  
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `
      Segundo colocado: ${segundoMaior}
    `;
  }
  