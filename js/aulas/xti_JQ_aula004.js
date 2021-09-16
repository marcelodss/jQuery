
/* =================================================================
  CSS:
   https://api.jquery.com/category/css/   
   
  Seletores Simples  
   https://api.jquery.com/category/selectors/basic-css-selectors/
  ================================================================== */


$(document).ready(function() {
    // $("*").css("color", "#0000FF"); // Aplicar cor em TODOS os elementos
    
    $("#seletor_id").css("color", "green"); // Aplicar cor por ID 
    $(".seletor_classe").css("color", "black"); // Aplicar cor em por classe
    $("h3").css("color", "red"); // Aplicar cor em por tag
    $("h1, a").css("background-color", "yellow"); // Aplicar cor em por tag
});


  
