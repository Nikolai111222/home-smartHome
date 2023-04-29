var count1 = 1;
var count2 = 1;

$(".right1").click(function() {
	count1++;
	if (count1 == 5) {
		count1 = 4;
	}
	$(".slider1").css({
		background: 'url(pix/slider1_'+ count1 +'.jpg)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	});
});

$(".left1").click(function() {
	count1--;
	if (count1 == 0) {
		count1 = 1;
	}
	$(".slider1").css({
		background: 'url(pix/slider1_'+ count1 +'.jpg)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	});
});

$(".right2").click(function() {
	count2++;
	if (count2 == 5) {
		count2 = 4;
	}
	$(".slider2").css({
		background: 'url(pix/slider2_'+ count2 +'.jpg)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	});
});

$(".left2").click(function() {
	count2--;
	if (count2 == 0) {
		count2 = 1;
	}
	$(".slider2").css({
		background: 'url(pix/slider2_'+ count2 +'.jpg)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	});
});