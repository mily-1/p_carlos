function abrirJanela() {
    // Cria um novo elemento div
    const janela = document.createElement("div");
  
    // Adiciona o estilo à janela
    janela.setAttribute("style", "width: 400px; height: 500px;");
  
    // Adiciona o texto à janela
    janela.innerHTML = `
      <h2>Notas do aluno</h2>
      <input type="number" placeholder="Nota 1" id="nota1">
      <input type="number" placeholder="Nota 2" id="nota2">
      <input type="number" placeholder="Nota 3" id="nota3">
      <button onclick="calcular()">Calcular</button>
      <p id="resultado"></p>
    `;
  
    // Adiciona a janela à página
    document.body.appendChild(janela);
  }
  
  function calcular() {
    // Obtém as notas do usuário
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    
  
    // Calcula a soma e a média das notas
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
  
    // Exibe o resultado
    document.getElementById("resultado").innerHTML = `
      Soma: ${soma}
      Média: ${media}
    `;
  }