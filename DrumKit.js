const botoes = {
  'a': document.getElementById('a'),
  's': document.getElementById('s'),
  'd': document.getElementById('d'),
  'f': document.getElementById('f'),
  'g': document.getElementById('g'),
  'h': document.getElementById('h'),
  'j': document.getElementById('j'),
  'k': document.getElementById('k'),
  'l': document.getElementById('l'),
}

const som = {
  'a' : new Audio('conteudo-usado/clap.mp3'),
  's' : new Audio('conteudo-usado/hihat.mp3'),
  'd' : new Audio('conteudo-usado/kick.mp3'),
  'f' : new Audio('conteudo-usado/openhat.mp3'),
  'g' : new Audio('conteudo-usado/boom.mp3'),
  'h' : new Audio('conteudo-usado/ride.mp3'),
  'j' : new Audio('conteudo-usado/snare.mp3'),
  'k' : new Audio('conteudo-usado/tom.mp3'),
  'l' : new Audio('conteudo-usado/tink.mp3')
}

document.addEventListener('keydown', function(event) {
  var tecla = event.key.toLowerCase()
  var botao = botoes[tecla]
  var somEscolhido = som[tecla]

  if (botao) {
    botao.classList.add('ampliado')
    somEscolhido.currentTime = 0
    somEscolhido.play()
  }

});
document.addEventListener('keyup', function(event) {
  const tecla = event.key.toLowerCase()
  const botao = botoes[tecla]
  if (botao) {
    botao.classList.remove('ampliado')
  }
});


function tocarSom(tecla) {
  som[tecla].currentTime = 0
  som[tecla].play()
}

// Adicione um ouvinte de eventos para cada botão
for (let tecla in botoes) {
  botoes[tecla].addEventListener('click', function() {
    tocarSom(tecla)
  });
}