


$("button").on("click",function() {
    var list = [1,5,6];
    
    let lista = list.unshift($("#newText"))
    
    list.forEach(element => {
        var para = $("<div class='fib'>")
        para.text(element)
        $(".Lista").append(para)
      });

});

//var lista = list.unshift(8)

