/* =================================================================
   CSS:
   https://api.jquery.com/category/css/

   Seletores de Filtros Básicos:
   https://api.jquery.com/category/selectors/basic-filter-selectors/
   
   Seletores de Filtros para conteúdos:
   https://api.jquery.com/category/selectors/content-filter-selector/

   Seletores de Filtros para atributos:
   https://api.jquery.com/category/selectors/attribute-selectors/

   Seletores para formulários
   https://api.jquery.com/category/selectors/form-selectors/
  =================================================================*/

$(document).ready(function(){
   $("tbody tr").css("background", "#CCC"); // colorir todas as tr de corpo cinza
   $("tbody tr:not(tbody tr:last)").css("background", "bisque"); // colorir a todas as trs, exceto a ultima, de corpo com bisque
   $("tbody tr:first").css("background", "tomato"); // colorir a primeira tr de corpo com tomato
   $("tbody tr:even").css("background", "khaki"); // colorir linhas pares de corpo com khaki
   $("tbody tr:odd").css("background", "ivory"); // colorir linhas impares de corpo com ivory
   $("tbody tr:eq(3)").css("background", "lightgreen"); // colorir a linha 3 (começa em Zero)de corpo com lightgreen
   $("tbody tr:gt(3)").css("background", "lightblue"); // colorir todas as linhas maiores que 3 (começa em Zero) de corpo com lightblue
   $("tbody tr:lt(2)").css("background", "cadetblue"); // colorir todas as linhas menores que 1 (começa em Zero) de corpo com cadetblue
   $("th:contains('Carandiru')").css("color", "red"); // texto da td com red quando contiver conteúdo "Carandiru"
   $("a[name]").css("background", "#CCC"); // fundo cinza para tag <a> com atributo name 
   $("a[name='contato']").css("background", "yellow"); // fundo amarelo para tag <a> com atributo name = contato 
   $("a[href*='aula']").css("background", "cadetblue"); // fundo cadetblue para tag <href> contendo aula 
});


/* =================================================================
   Seletores para formulários
   https://api.jquery.com/category/selectors/form-selectors/
  =================================================================*/

$(document).ready(function(){
   $(":input").css("border", "3px solid #FF0000") // aplica um borda vermelha aos elementos input
   $(":button").css("border", "3px solid yellow") // aplica um borda amarela aos elementos button
   $(":button").click(function(){
      $(":text").css("border", "3px solid yellow") // altera cor de text ao clicar em button
      $(":password").css("border", "3px solid yellow") // altera cor de password ao clicar em button
      // utilizando as funções auxiliares next alcançamos próximo elemento
      // veja também prev, parent....
      $(":radio").next().css("border", "3px solid green") 
      $(":checkbox").next().css("border", "3px solid blue") 
      $(":disabled").css("border", "3px solid #000") 
   }); 
});