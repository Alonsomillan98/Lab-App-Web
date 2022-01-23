$("#ButtonPost").on('click',function(e){
    e.preventDefault();
    let texto = $("#todoText").val();
    
    if(texto != ""){
      $("#todoList").append(`
        <div class = "shopItem">
        <div class= "sop">
        <label><input type="checkbox" class="chbox" value="fcheckbox"> ${texto}</label><br>
        <p></p>
      `);
    }
  })
  
//Boton check para tachar el item de la lista
$("#ButtonClear").on('click',function(event){
  event.preventDefault();
  $( ".chbox").prop('checked', false);
})

//Boton mark los items de la lista
$("#ButtonMark").on('click',function(event){
  event.preventDefault();
  $( ".chbox").prop('checked', true);
})

//Boton delete para borrar el item de la lista
$("#ButtonDelete").on('click',function(event){
  event.preventDefault();
  if ($(".chbox").is(":checked")){
    $(".chbox").parent().parent().remove();
  }
})