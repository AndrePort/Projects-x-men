const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    const personagemSelecionado = document.querySelector('.selecionado');

    personagem.classList.add('selecionado');
    
    personagemSelecionado.classList.remove('selecionado');


  })
})
