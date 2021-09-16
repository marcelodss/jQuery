$(document).ready(function() {
    // *********************************************************
    // https://learn.jquery.com/using-jquery-core/jquery-object/
    // ---------------------------------------------------------
    var headings = $( "a" );
    alert( headings.length );
    // *********************************************************

    $("a").click(function(event) {
        alert( "O link não o levará para jquery.com" );
        event.preventDefault();
        $("a").addClass("test");
        $("p").text("classe test foi adicionada aos links.")
        $(this).hide( "slow" );
        $("span").after("<br><br><br>");
        $("span").show("slow");
     });

     $("span").click(function(event) {
        $(".test").show();
        $("br").remove();
        $(this).hide();  
        $("a").removeClass("test"); 
        $("p").text("classe test foi removida dos links.")
     });

 });

function newFunction() {
    $(function () {
        $("p").text("O DOM agora está carregado e pode ser manipulado.");
    });
}
