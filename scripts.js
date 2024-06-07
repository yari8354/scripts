var $win = $(window);
$(document).ready(function () {
    $(".b-reviews").slick({
        dots: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
            ]
    });
    if ($win.width() >= 991) {
        $(document).on('scroll', function () {

            scrollShow();
        });

    }
    let scrollShow = function () {

        let element = $('[data-unshow]'),
            scroll = $(document).scrollTop(),
            winHeight = $win.height();

        element.each(function () {
            let self = $(this),
                elementPos = self.offset().top;

            if (scroll >= (elementPos - (winHeight / 1.2))) {
                self.addClass('show')
            }
        });
    };
    $('a.btn').click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop: $("#order_form").offset().top-300}, 1000);
        return false;
    });
});