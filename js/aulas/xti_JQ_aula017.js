/* =================================================================
    Eventos:
    > https://api.jquery.com/category/events/
    
    Eventos Avançados:
   > Event Object: https://api.jquery.com/category/events/event-object/
  
   > Event Handler Attachment: https://api.jquery.com/category/events/event-handler-attachment/
  =================================================================*/

  $(document).ready(function(e){
    // $(":text")
    // .keyup(function(){
    //    $("#msg").text($(this).val())
    // });
    // -----------------------------------------------------------
    // o bloco abaixo é equivalente ao bloco comentado acima!
    // $(":text")
    // .bind("keyup", function(e){
    // $("#msg").text($(this).val())
    // });
    // -----------------------------------------------------------
    
    // -----------------------------------------------------------
    // a função abaixo poderá ser reutilizada
        function msg(e){
            $("#msg").text($(this).val())
            }
        // .bind vincula evento(s) a uma função
        $(":text").bind("keyup focus blur", msg);
        // a sintaxe acima equivale a:
        // $(":text").keyup(msg).focus(msg).blur(msg);

        // .unbind desvincula evento(s) 
        $(":button").bind("click", function(){
            $(":text").unbind("keyup", msg);
            $(":text").val("keyup unbind e focus com trigguer");
            $(":text").trigger("focus");

            // o campo abaixo foi criado depois da vinculação com .bind, portanto não tem a função msg vinculada a ele.
            // $("fieldset").prepend("outro: <input type='text' name='outro' placeholder='bind não funciona. Este input text foi criado depois da vinculação.'>");

            // para alterar o esplanado acima usa-se a função .delegate:
            $("fieldset").delegate(":text", "focus blur", msg)
            $("fieldset").prepend("outro: <input type='text' name='outro' placeholder='digite algo para ver a função .delegate ativada.'>");

        });
    // -----------------------------------------------------------

  });