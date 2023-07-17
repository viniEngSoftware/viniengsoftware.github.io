function mostrarMensagem(mensagem, cabecalho) {
    var mensagemElement = document.getElementById('mensagem-habilidade');
    var cabecalhoElement = document.getElementById('cabecalho-habilitado');
    mensagemElement.textContent = mensagem;
    cabecalhoElement.textContent = cabecalho;
  }
  
  // Para limpar a mensagem quando o mouse sai da imagem
  document.querySelectorAll('.icone-habilidade-icone').forEach(function (element) {
    element.addEventListener('mouseout', function () {
      var mensagemElement = document.getElementById('mensagem-habilidade');
      var cabecalhoElement = document.getElementById('cabecalho-habilitado');
      mensagemElement.textContent = "Passe o mouse sobre as habilidades para obter mais informações.";
      cabecalhoElement.textContent = "Minhas Habilidades";
    });
  });