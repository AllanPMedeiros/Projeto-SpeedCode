// Passo 1
const listaSelecaoPersonagem = document.querySelectorAll('.personagem');

//Passo 2 
 listaSelecaoPersonagem.forEach(personagem => {
   personagem.addEventListener("click", ()=>{
     // Passo 3
     esconderCartaoPersoangem();

     //Passo 4 
      const idPersonagemSelecionado = mostrarCartaoPersonagemSelecionado(personagem);

      //Passo 5
      desativarPersoangemNaListagem();

      //Passo 6
      ativarPersonagemNaListagem(idPersonagemSelecionado);
   })
   
 })

function ativarPersonagemNaListagem(idPersonagemSelecionado) {
  const personagemSelecionadoNaListagem = document.getElementById(idPersonagemSelecionado);
  personagemSelecionadoNaListagem.classList.add("ativo");
}

function desativarPersoangemNaListagem() {
  const personagemAtivoNaListagem = document.querySelector(".ativo");
  personagemAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPersonagemSelecionado(personagem) {
  const idPersonagemSelecionado = personagem.attributes.id.value;
  const idDoCartaoPersonagemParaAbrir = "cartao-" + idPersonagemSelecionado;
  const cartaoPersonagemParaAbrir = document.getElementById(idDoCartaoPersonagemParaAbrir);
  cartaoPersonagemParaAbrir.classList.add("aberto");
  return idPersonagemSelecionado;
}

function esconderCartaoPersoangem() {
  const cartaoPersonagemAberto = document.querySelector(".aberto");
  cartaoPersonagemAberto.classList.remove("aberto");
}

