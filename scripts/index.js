$(function(){
    loadContent("home");

    $("#current_year").text(new Date().getFullYear());
});


function loadContent(page){
    $.get( page + ".html", function( data ) {
        $( "#content" ).html( data );
    });
}