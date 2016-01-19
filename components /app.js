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
			height = (height > 160)? 160: height + 20;
			$(this).height(height);
			$(this).animate({right:'0'}, 4000, function(){
				$('.fish').css({transform: 'scaleX(1)'});
			});
		
		});	
};