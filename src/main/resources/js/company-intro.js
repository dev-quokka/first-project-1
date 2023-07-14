function progress_start($progressBar) {
    var widthTarget = $('.cover-carousel-progress-bar').width();
    $progressBar.animate({
        width: widthTarget
    }, 5000, function() {
        $progressBar.addClass('past');
        $("#covered_carousel").trigger('next.owl.carousel');
    })
}
$(document).ready(function() {
    $("#covered_carousel").owlCarousel({
        singleItem: true,
        items: 1,
        URLhashListener: true,
        loop: true,
        center: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        smartSpeed: 1000,
    });

    $('#covered_carousel').on('changed.owl.carousel', function(event) {
        var current = event.item.index;
        var hash = $(event.target).find(".owl-item").eq(current).find('[data-hash]').attr('data-hash');
        $('.progress-pin').stop();
        for (var i = 1; i < 6; i++) {
            if (i < hash.split('_')[1]) {
                $('[data-carousel-step="' + i + '"]').addClass('past');
            } else if (i == hash.split('_')[1]) {
                $('[data-carousel-step="' + i + '"]').removeClass('past');
                $('[data-carousel-step="' + i + '"]').css('width', 0);
                progress_start($('[data-carousel-step="' + i + '"]'));
            } else {
                $('[data-carousel-step="' + i + '"]').removeClass('past');
                $('[data-carousel-step="' + i + '"]').css('width', 0);
            }
        }
    });

    progress_start($('[data-carousel-step="1"]'));

    $('#linked_carousel').owlCarousel({
        items: 3,
        loop: false,
        margin: 32,
        nav: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 18
    });

    $('#linked_carousel').on('changed.owl.carousel', function(event) {
        var current = event.item.index;
        var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
        var real_hash = hash.split('_')[0];
        $('.linked-carousel-nav > a').removeClass('active');
        $('[linked-carousel-target="' + real_hash + '"]').addClass('active');
    });
});