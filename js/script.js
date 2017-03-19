$(document).ready(function(){

	var appendText = {
		"AGAL (Department of cancer)":{
			"goal": "Gives enlighten to all people. In Life,there are many losses and many deaths. It is the desire of the AGAL to bring meaning into their meaningless life, to help the inevitable, We wish to change injustice, cure illness and help misfortune, and we also wish to learn to dance well on the shifting carpet, holding our cancerian hands. We try to achieve the day 'Towards no cancer'"
		},
		"SSET (Department of Education)":{
			"goal": "We the people working towards , to help the under-privileged people in attaining their right to knowledge and quality education. Sset provides a platform for better learning, exposure and give them the best in their pursuit of happiness by transforming their dreams to reality. Our team is working towards the search of uneducated human beings in the dictionary."
		},
		"SIRAGUGAL (Department of Orphanage)":{
			"goal": "wings to attain the aim. We sincerely work and care for the welfare and emancipation of the orphan children. We rescue and care for these led down people in the society to achieve their places. We try to bring meaning to their meaningless life and also to take the step to reach the world ”HUMANE SOCIETY”. We work towards no orphan in this world."
		},
		"RENAISANCE (Department of Medical)":{
			"goal": "A Cure for life. We are trying to provide a proper medical facilities for the people. We rescue and care for the people in the society to achieve their goals. We try to help the people who are in need of medical facilities."
		},
		"IMBUE (Department of Management)":{
			"goal": "Guide for success. We sincerely work and care for the development of our foundation . The work we do to develop the foundation are planning, organizing, directing, and controlling."
		}
	};

  /*
    Animate the page when nav links are linked
  */
  $(".navBar ul li a").click(function(){
  	if($(this).text() != "Home"){
  		$(".navBar ul li a").css("color", "black");
  	}else{
  		$(".navBar ul li a").css("color", "white");
  	}
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 900);
  });

  $("#bookDiv li").click(function(e){
  	$(".detailsDiv").html('<h2>'+ $(this).text() +'</h2><p>'+appendText[$(this).text()].goal+'<p>')
  });

});
