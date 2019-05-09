$(document).ready(function(){
    $('div').bind("click", function(){
        var bg_color = $(this).css(background-color);
        var clipboard = new ClipboardJS(btn);

        clipboard.on('success', function(e) {
        console.log(e);
        });
        clipboard.on('error', function(e) {
            console.log(e);
        });
    });
});