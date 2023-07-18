const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    //Modo celular
    if(window.innerWidth < 450) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
    //Seleção de personagem
    removerSelecaoDoPersonagem();

    personagem.classList.add('selecionado');

    //Alteração imagem Personagem
    alteracaoImagemPersonagemSelecionado(personagem);

    //Alteração Titulo
    alterarNomePersonagemSelecionado(personagem);

    //Alteração descrição
    alterarDescricaoPersonagemSelecionado(personagem);
  })
})

function alterarDescricaoPersonagemSelecionado(personagem) {
  const descricaoPersonagem = document.getElementById('descricao-personagem');
  descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById('nome-personagem');
  nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alteracaoImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande');
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado');
  personagemSelecionado.classList.remove('selecionado');
}
