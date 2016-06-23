$(document).ready(function(){
  /*
    Animate the page when nav links are linked
  */
  $(".navBar ul li a").click(function(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 900);
  });

});
