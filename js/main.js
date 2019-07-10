$(document).ready(function(){

var estActif = false;

$('.menu').on('click', function(){
    if (estActif){
        $(this).removeClass('active');
        $('body').removeClass('menu-open');
    } else{
        $(this).addClass('active');
        $('body').addClass('menu-open'); 
    }
    estActif = !estActif;
});

//Menu: scrolling effect and toTop button
$(window).on("scroll", function() {
    if($(window).scrollTop() > 300){
        $('nav').addClass('white');
        $('#topBtn').css("display","block");
    }
    else {
        $('nav').removeClass('white');
        $('#topBtn').css("display","none");
    }
});

//Scroll to top button



    $("window").scroll(function(){
      if($(window).scrollTop() > 300){
        $("#topBtn").fadeIn();
      } else {
        $("#topBtn").fadeOut();
      }
    });
  
$("#topBtn").click(function(){
    $("html ,body").animate({scrollTop: 0},1500);
});



});