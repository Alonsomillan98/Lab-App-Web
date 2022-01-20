$("#ButtonPost").on('click',function(e){
    e.preventDefault();
    let texto = $("#todoText").val();
    
    

    if(texto != ""){
      $("#todoList").append(`
        <div class = "shopItem">
        <p class = "itemShop">${texto}</p>
        <button class = "clear" type = "text">Clear</button>
        <button class = "mark" type = "text">Mark</button>
        <button class = "del" type = "text">Delete</button>
        <p></p>
      `);
    }
  })
  
  //Boton check para tachar el item de la lista
  $("#todoList").on('click','.clear', function(event){
    event.preventDefault();
    $(this).parent().toggleClass('chec')
  })

  //Boton mark los items de la lista
  $("#todoList").on('click','.mark', function(event){
    event.preventDefault();
    var input = $( "form input:checkbox" )
    $(this).parent().toggleClass('chec')
  })
  
  //Boton delete para borrar el item de la lista
  $("#todoList").on('click','.del',function(event){
    event.preventDefault();
    $(this).parent().parent().remove();
  })





/*
//1 Obtener las referencias de los elementos a interactuar
 
let post = document.getElementById("ButtonPost")
let clear = document.getElementById("ButtonClear")
let mark = document.getElementById("ButtonMark")
let del = document.getElementById("ButtonDelete")
 
// Registrar el Evento
 
post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click",TodoDel)
 
function TodoPost(e) {
e.preventDefault()
 
let todo = document.getElementById("todoText").value
let list = document.getElementById("todoList")
 
let div = document.createElement("div")
let input = document.createElement("input")
let label = document.createElement("label")
 
input.type = "checkbox"
input.name = "todo"
 
label.textContent = todo
 
div.appendChild(input)
div.appendChild(label)
 
list.append(div)
 
}
 
function TodoClear(){
 
    let todos = document.getElementsByName("todo")
    for(let i = 0; i< todos.length; i++){
        todos[i].checked = false
    }
 
}
 
function TodoMark() {
 
    let todos = document.getElementsByName("todo")
    for(let i = 0; i< todos.length; i++){
        todos[i].checked = true
    }
 
}
 
function TodoDel() {
 
    let todos = document.getElementsByName("todo")
 
    for(let i = 0; i< todos.length; i++){
  
    if (todos[i].checked){
        todos[i].parentElement.remove()
    }
 
    }
 
}
*/