$(".page-scroll").click(function (e) {
    e.preventDefault();
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 70
    }, 800, 'swing');
});

$(window).on('load', function () {
    $('.hero-img').addClass('hero-muncul');
    // $('.pKiri').addClass('pMuncul');
    // $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // console.log($('.SAT').offset().top - 270);
    // console.log(wScroll);
    if (wScroll > 10) {
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
    }

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%'
    });
    $('.jumbotron h4').css({
        'transform': 'translate(0px, ' + wScroll / 1.5 + '%'
    });


    if (wScroll > $('.portofolio').offset().top - 250) {
        $('.portofolio .card').each(function (i) {
            setTimeout(function () {
                $('.portofolio .card').eq(i).addClass('muncul');
            }, 100 * (i + 1));
        });
    };

    if (wScroll > $('.SAT').offset().top - 270) {
        $('.hero-img2').addClass('hero-muncul');
    };
});