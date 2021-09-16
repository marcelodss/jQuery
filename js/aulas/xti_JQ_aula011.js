/* =================================================================
   CSS:
   https://api.jquery.com/category/css/

   Manipulação de Conteúdo:
   https://api.jquery.com/category/manipulation/
  =================================================================*/

  $(document).ready(function(){
   $("span").click(function(){
      alert($("p").text());
      $("div").html("<h1>O Melhor Trapalhão</h1>");
      
      var p = $("p").html()
      var div = $("div").html()
      $("div").html(div + "<br>" + p + "<br> <h2>....</h2>");
      
      $("p").html($("textarea").val());

      // replaceWith substitue a tag
      $("h2").replaceWith("<p> pontinho pontinho pontinho </p>")
      $("h1").replaceWith("<h2> eu era um H1</h2>")

      // manipulando o DOM
      // Adicionando lista
      // var ul = $("<ul/>").append($("<li>Desenvolvedor de Interface WEB</li>"));
      var ul = $("<ul/>").append($("<li/>").text("Programador de Interface WEB."));
      var ultima_li = $("<li/>").text("Dentro e na Última Posição.");
      var primeira_li = $("<li/>").text("Dentro e na Primeira Posição.");
      var fora_e_depois_li = $("<h2/>").text("Fora e Depois da Lista.");
      var fora_e_antes_li = $("<h1>Fora e Antes da Lista.</h1>");
        
      // Adicionando imgagem
      var img = $("<img/>", {
         src: "https://i.pinimg.com/600x315/59/59/ca/5959cafb739baf5759d0777c84c15509.jpg",
         title:  "Kikolina continua linda colorida!",
         alt:  "Kikolina continua linda colorida!",
         click: function(){alert("princesinha da mamãe!!!!")}
      });
      $("body")
      .append("<br>").append(ul)
      .append("<br>").append(img);
      $("ul").wrap('<div id="div_xxx">wrap</div>');
      $("ul").append(ultima_li);
      $("ul").prepend(primeira_li);
      $("ul").before(fora_e_antes_li);
      $("ul").after(fora_e_depois_li);
      $("#div_xxx").css({width: "300px",
                         background: "#00FF00",
                         border: "30px solid  #B22222",
                         color: "white"
                        })
   });
});
