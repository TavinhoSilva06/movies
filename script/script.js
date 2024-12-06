//ativando menu 
/*function mostraMenu(){
  $('header nav#nav-esq ul#menu-principal').css('display','flex');
  $('header nav#nav-esq ul#menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');
  
    $('header nav#nav-esq ul#icone-menu li#menu').css('display','none');
    $('header nav#nav-esq ul#icone-menu li#menuX').css('display','flex');
}

function esconderMenu(){
  $('header nav#nav-esq ul#menu-principal').css('display','none');

    $('header nav#nav-esq ul#icone-menu li#menu').css('display','flex');
    $('header nav#nav-esq ul#icone-menu li#menuX').css('display','none');
}

let controle = true;

$('header nav#nav-esq ul#icone-menu li#menu').click(function(){
    if(controle = true){
      mostrarMenu();
      controle=false 
    }else{
      esconderMenu();
      controle = true;
    } 
})
*/
function mostrarMenu() {
  // Exibe o menu
  $('header nav#nav-esq ul#menu-principal').css('display', 'flex');
  $('header nav#nav-esq ul#menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');
  $('header nav#nav-esq ul#icone-menu li#menu').css('display', 'none');
  $('header nav#nav-esq ul#icone-menu li#menuX').css('display', 'flex');

  // Armazena o estado no localStorage
  localStorage.setItem('menuAberto', 'true');
}

function esconderMenu() {
  // Esconde o menu
  $('header nav#nav-esq ul#menu-principal').css('display', 'none');
  $('header nav#nav-esq ul#icone-menu li#menu').css('display', 'flex');
  $('header nav#nav-esq ul#icone-menu li#menuX').css('display', 'none');

  // Armazena o estado no localStorage
  localStorage.setItem('menuAberto', 'false');
}

// Verifica o estado do menu ao carregar a página
$(document).ready(function() {
  const menuAberto = localStorage.getItem('menuAberto');
  
  if (menuAberto === 'true') {
    mostrarMenu(
      
    );  // Se o menu estava aberto, exibe-o
  } else {
    esconderMenu();  // Se o menu estava fechado, esconde-o
  }

  let controle = true;

  // Alterna entre abrir e fechar o menu
  $('header nav#nav-esq ul#icone-menu li#menu').click(function() {
    if (controle) {
      mostrarMenu();
      controle = false;
    } else {
      esconderMenu();
      controle = true;
    }
  });
});

$(document).ready(() => {
  // Função para atualizar o conteúdo
  function atualizarConteudo(titulo, texto) {
    $('#conteudo').html(`<h1>${titulo}</h1><p>${texto}</p>`);
  }

  // Eventos de clique para cada item do menu
  $('#home').click(() => {
    atualizarConteudo('Home', 'Bem-vindo à página inicial.');
  });

  $('#lancamentos').click(() => {
    atualizarConteudo('Lançamentos', 'Confira os lançamentos mais recentes!');
  });

  $('#resenhas').click(() => {
    atualizarConteudo('Resenhas', 'Leia as melhores resenhas sobre filmes.');
  });

  $('#em-alta').click(() => {
    atualizarConteudo('Em Alta', 'Veja o que está em alta agora!');
  });

  $('#contato').click(() => {
    atualizarConteudo('Contato', 'Entre em contato conosco.');
  });
});

