$(document).ready(function(){

	gofish();

	setInterval(function(){
		
		gofish();
	
	}, 11000);

});


function gofish(){
		$('.fish').animate({right: '130%'}, 7000, function(){
		
			$(this).css({transform: 'scaleX(-1)'});
			
			var height = $(this).height();
			height += 20;
			$(this).height(height);
			$(this).animate({right:'-30%'}, 4000, function(){
				$('.fish').css({transform: 'scaleX(1)'});
			});
		
		});	
};