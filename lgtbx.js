jQuery(document).ready(function($) {

	var flag = false;
	console.log(flag);
	
	$('.tnailjs').click(function(e) {
	
		e.preventDefault();
		var image_href = $(this).attr("src");
		$('#phh').html('<img src="' + image_href + '" />');
		$('.lgtbox').show();
		flag = true;
		console.log(flag);
});

	
	$('.lgtbox').on('click', '.closed', function() {
	if(flag==true){
	console.log('clicked');
	$('.lgtbox').hide();
	flag = false;
	console.log(flag);}
});


});
