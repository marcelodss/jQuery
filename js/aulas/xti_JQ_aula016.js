/* =================================================================
   Eventos:
   https://api.jquery.com/category/events/

   Eventos de Mouse:
   https://api.jquery.com/category/events/mouse-events/

   Eventos de Teclado:
   https://api.jquery.com/category/events/keyboard-events/
   
   Eventos de Formulário:
   https://api.jquery.com/category/forms/
  =================================================================*/

$(document).ready(function(){
   // Eventos de Mouse:
   $("span")
   .click(function(){
      $("div").text("um click").css("color", "blue")
   }) 
   .dblclick(function(){
      $("div").text("double click").css("color", "red")
   })
   .mouseover(function(){
      $("div").text("mouse over").css("color", "green")
   })
   .mouseout(function(){
      $("div").text("mouse out").css("color", "black")
   });

   // Eventos de Teclado:
   $(":text")
   .keyup(function(){
      $("#msg").text($(this).val())
   })
   .focus(function(){
      $(this).css("background", "aliceblue" )
   })
   .blur(function(){
      $(this).css("background", "" )
   });

   $("select")
   .change(function(){
      var escolha = $("option:selected").text();
      $("#msg").text("Selecionado: " + escolha);
   });

   $("textarea")
   .select(function(){
      $("#msg").text("Selecionou");
   });
   
   // Eventos de Formulário:
   $("form").submit(function(){
      if($(":text").val() == "XTI") {
         alert("XTI aceito; Form submetido.")
         return true;
      }
      else{
         alert("Campo 'Text' aceita apenas XTI.")
         return false;
      }
   });
});
