$(document).ready(function(){
    console.log('Document ready!');
    // Carga solo en Index
    if (window.location.href.indexOf('index') > -1) {
        //Slider
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 900,
            responsive: true,
            pager: true
        });

    // Selector de Temas

    var tema = $("#theme");
    $("#to-red").click(function(){
        tema.attr('href','assets/css/red.css');
    });
   
    // Scroll subir

    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : 0
        },750);
        return false;
    });

});