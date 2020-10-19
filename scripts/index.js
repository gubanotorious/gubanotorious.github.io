$(function(){
    loadContent("home");
});


function loadContent(page){
    $.get( page + ".html", function( data ) {
        $( "#content" ).html( data );
    });
}