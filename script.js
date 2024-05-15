var i = 0;
var slide = $(".conta");
var slideNum = slide.length;

$(document).ready(function(){
	changeSlide();
	var myVar = setInterval(changeSlide, 5000);	
});

function changeSlide()
{
	console.log(slideNum);
	console.log(i);
	if(i == 0)
	{
		$(slide[slideNum - 1]).fadeOut(function(){
			$(slide[i]).fadeIn(400);
			i++;
			console.log(i);
		});
	}
	else if(i<slideNum-1)
	{
		console.log("hello");
		$(slide[i-1]).fadeOut(500, function(){
			$(slide[i]).fadeIn(1000);
			i++;
			console.log(i);
		});
		
	}
	else
	{
		$(slide[i-1]).fadeOut(500, function(){
			$(slide[i]).fadeIn(1000);
			i=0;
			console.log(i);
		});	
	}
}





