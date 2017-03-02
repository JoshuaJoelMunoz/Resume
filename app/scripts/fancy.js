$(document).ready(function() {
	$(".fancybox").fancybox({
		maxWidth	: 1280,
		maxHeight	: 720,
		fitToView	: false,
		width		: '80%',
		height		: '80%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		padding : 0
	});

	$(".image").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',

		helpers : {
			title : {
				type : 'over'
			}
		}
	});
});
