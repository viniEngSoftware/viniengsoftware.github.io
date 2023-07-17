
const message = "Estou em uma jornada \n em busca de criatividade,\n conhecimento e inovação.";
const title = document.getElementById("mensagem");
const typingSpeed = 50; // Velocidade de digitação em milissegundos
const deletingSpeed = 25; // Velocidade de apagar em milissegundos
const delay = 1000; // Tempo de pausa entre escrever, apagar e escrever novamente em milissegundos

let index = 0;
let isDeleting = false;

function typeEffect() {
  const text = isDeleting ? message.substring(0, index - 1) : message.substring(0, index + 1);
  title.innerText = text;

  if (isDeleting) {
    index--;
  } else {
    index++;
  }

  if (isDeleting && index === 0) {
    isDeleting = false;
    setTimeout(typeEffect, delay);
  } else if (!isDeleting && index === message.length) {
    isDeleting = true;
    setTimeout(typeEffect, delay);
  } else {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();
