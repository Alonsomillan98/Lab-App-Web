$(".agregar").on('click',function(e){
  let texto = $("#newText").val();

  if(texto != ""){
    $(".Lista").append(`
      <div class = "shopItem">
      <li class = "lis">
      <p class = "itemShop">${texto}</p>
      <button class = "checar" type = "text">Check</button>
      <button class = "del" type = "text">Delete</button>
      <p></p>
    `);
  }
})

//Boton check para tachar el item de la lista
$(".Lista").on('click','.checar', function(event){
  event.preventDefault();
  $(this).parent().toggleClass('check')
})

//Boton delete para borrar el item de la lista
$(".Lista").on('click','del',function(event){
  event.preventDefault();
  $(this).parent().parent().remove();
})