$(document).ready(function(){
    $('div').bind("click", function(){
        var bg_color = $(this).css("background-color");
        alert(bg_color);
    });
});