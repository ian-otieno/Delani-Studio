$(document).ready(function(){
    $("#designing").click(function(){
        $("#design").fadeToggle()
        $("#paragraph").fadeToggle();
    });
    $("#developing").click(function(){
        $("#development").fadeToggle()
        $("#paragraph1").fadeToggle();
    });
    $("#producing").click(function(){
        $("#product").fadeToggle()
        $("#paragraph2").fadeToggle();
    });
     $("#Images").animate({
         opacity:1
 
        });
        $("#work1").hover(function() {
         $(this).stop().animate({opacity:.4},250);
         $("#carrey").slideToggle();
     
     }, function() {
         $(this).stop().animate({opacity:1},550)
         $("#carrey").fadeOut();
     });
     $("#work2").hover(function() {
        $(this).stop().animate({opacity:.4},250);
        $("#pyra").slideToggle();
    
    }, function() {
        $(this).stop().animate({opacity:1},550)
        $("pyra").fadeOut();
    });
    $("#work3").hover(function() {
        $(this).stop().animate({opacity:.4},250);
        $("#mighty").slideToggle();
    
    }, function() {
        $(this).stop().animate({opacity:1},550)
        $("mighty").fadeOut();
    });
    $("#work4").hover(function() {
        $(this).stop().animate({opacity:.4},250);
        $("#studio").slideToggle();
    
    }, function() {
        $(this).stop().animate({opacity:1},550)
        $("studio").fadeOut();
    });
    
    $("#work5").hover(function() {
        $(this).stop().animate({opacity:.4},250);
        $("#have").slideToggle();
    
    }, function() {
        $(this).stop().animate({opacity:1},550)
        $("#have").fadeOut();
    });
    $("#work6").hover(function() {
        $(this).stop().animate({opacity:.4},250);
        $("#word").slideToggle();
    
    }, function() {
        $(this).stop().animate({opacity:1},550)
        $("#word").fadeOut();
    });
    $("#work7").hover(function() {
        $(this).stop().animate({opacity:.4},250);
        $("#mock").slideToggle();
    
    }, function() {
        $(this).stop().animate({opacity:1},550)
        $("#mock").fadeOut();
    });
    $("#work8").hover(function() {
        $(this).stop().animate({opacity:.4},250);
        $("#resta").slideToggle();
    
    }, function() {
        $(this).stop().animate({opacity:1},550)
        $("#resta").fadeOut();
    });
    
});  