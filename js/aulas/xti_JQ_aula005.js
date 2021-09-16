

/* =================================================================
   CSS:
   https://api.jquery.com/category/css/

   Seletores de Hierarquia, também conhecidos como compostos
   https://api.jquery.com/category/selectors/hierarchy-selectors/
  =================================================================*/
  
$(document).ready(function(){
   $("div span").css("background-color", "yellow") // descendentes
   $("li > ul").css("color", "red") // filho (>)
   $("#item1_1 + li").css("color", "blue") // primeiro irmão (id + tag)
   $("#item2_1 ~ li").css("color", "green") // todos os irmãos (id ~ tag)
})