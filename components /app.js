$(document).ready(function(){

	gofish();

	setInterval(function(){
		
		gofish();
	
	}, 11000);

});


function gofish(){
		$('.fish').animate({right: '90%'}, 7000, function(){
		
			$(this).css({transform: 'scaleX(-1)'});
			
			var height = $(this).height();
			height = (height > 50)? 80: height + 20;
			$(this).height(height);
			$(this).animate({right:'0'}, 4000, function(){
				$('.fish').css({transform: 'scaleX(1)'});
			});
		
		});	
};

 var userAnswer = prompt("Hello and welcome to my page! Are you sure you're at the right place?")
 if(userAnswer === "yes"){
 		alert("Great! Feel free to look around.")
 } else if(userAnswer === "no"){
  		alert("Ah that's to bad. Hope you find what your looking for..")
   };