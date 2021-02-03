// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});

// parallax
$(window).on('load', function(){
	$('.kiri').addClass('kiri-go');
	$('.kanan').addClass('kanan-go')
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron container').css({
		'transform': 'translate(0px, '+ wScroll / 4 +'%)'
	});

	$('.jumbotron .display-4').css({
		'transform': 'translate(0px, '+ wScroll / 6 +'%)'
	});

	$('.jumbotron .display-4 span').css({
		'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
	});


	// menu
	if( wScroll > $('.menu').offset().top - 1000 ) {
		
		$('.menu .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.menu .thumbnail').eq(i).addClass('muncul');
			}, 500 * (i+1))

		});

	}

});
