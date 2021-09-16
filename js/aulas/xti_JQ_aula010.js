/* =================================================================
   Atributos:
   https://api.jquery.com/category/attributes/
  =================================================================*/

// Forma Padrão:
//   $(document).ready(function(){
//    $("span").click(function(){
//       alert($("img").attr("title"));
//       $("img")
//       .attr("src", "https://i.pinimg.com/600x315/59/59/ca/5959cafb739baf5759d0777c84c15509.jpg")
//       .attr("title", "Kikolina continua linda colorida!")
//       .attr("alt", "Kikolina continua linda colorida!")
//    });
// });

// Forma Agrupada:
$(document).ready(function(){
   $("span").click(function(){
      alert($("img").attr("title"));
      $("img").attr({ // Altera atributos
         src: "https://i.pinimg.com/600x315/59/59/ca/5959cafb739baf5759d0777c84c15509.jpg",
         title:  "Kikolina continua linda colorida!",
         alt:  "Kikolina continua linda colorida!"
      });
      $("span").toggleClass("destaque"); // Se a classe estiver aplicada, desaplica e vice-versa
      if (confirm('remove imagem?')) { // Remove atributos
         $("img")
         .removeAttr("src")
         .removeAttr('title')
         .removeAttr('alt')
         .removeAttr('class')
      }
      else {
         $("img").addClass("destaque"); // retorna true se uma classe existir
         alert("classe destaque existe: " + $("img").hasClass("destaque"));
      };
   });
});
