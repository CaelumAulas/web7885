var botao = $(".novidades button")

botao.click(function () {

  // if($(".novidades").hasClass("painel-aberto")) {
  //   $(".novidades").removeClass("painel-aberto")
  // } else {
  //   $(".novidades").addClass("painel-aberto")
  // }

  $(".novidades").toggleClass("painel-aberto")
  if($(".novidades").hasClass("painel-aberto")) {
    $(".novidades button").text("Menos produtos")
  } else {
    $(".novidades button").text("Mais produtos")
  }

})
