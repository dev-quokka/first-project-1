function title_changer() {
    setInterval(function() {
        $('.rolling-title').animate({
            marginTop: '-' + 64 + 'px'
        }, 'slow', function() {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $('.rolling-title').css({
                marginTop: '0'
            })
        });
    }, 3000);
}

function process_guide_scroll(scrollValueHalf) {
    const process_first_offset = $('#first_desc').offset().top;
    const process_second_offset = $('#second_desc').offset().top;
    const process_third_offset = $('#third_desc').offset().top;
    const process_fourth_offset = $('#fourth_desc').offset().top;

    if (scrollValueHalf < process_second_offset) {
        $('.first').addClass('active');
        $('.second').removeClass('active');
        $('.third').removeClass('active');
        $('.fourth').removeClass('active');

    } else if (scrollValueHalf >= process_second_offset && scrollValueHalf < process_third_offset) {
        $('.first').removeClass('active');
        $('.second').addClass('active');
        $('.third').removeClass('active');
        $('.fourth').removeClass('active');
    } else if (scrollValueHalf >= process_third_offset && scrollValueHalf < process_fourth_offset) {
        $('.first').removeClass('active');
        $('.second').removeClass('active');
        $('.third').addClass('active');
        $('.fourth').removeClass('active');
    } else if (scrollValueHalf >= process_fourth_offset) {
        $('.first').removeClass('active');
        $('.second').removeClass('active');
        $('.third').removeClass('active');
        $('.fourth').addClass('active');
    }
}

function review_slider() {
    let slideLeft = 0;
    let first = 1;
    let last;
    let slideCnt = 0;
    const $slide = $(".review-card");
    let $first;
    let $last;

    $slide.each(function() {
        $(this).css("left", slideLeft);
        slideLeft += $(this).width() + 90;
        $(this).attr("id", "slide" + (++slideCnt));
    });

    last = slideCnt;

    function slide() {
        $slide.each(function() {
            $(this).css("left", $(this).position().left - 1);
        });
        $first = $("#slide" + first);
        $last = $("#slide" + last);
        if ($first.position().left < -480) {
            $first.css("left", $last.position().left + $last.width() + 90);
            first++;
            last++;
            if (last > slideCnt)
                last = 1;
            if (first > slideCnt)
                first = 1;
        }
    }
    let interval = setInterval(slide, 20);

    $slide.hover(function() {
        clearInterval(interval);
    }, function() {
        interval = setInterval(slide, 20);
    })
}

$(document).ready(function() {
    title_changer();
    review_slider();

    var process_card_sticky_position = $(window).height() / 2 - $('.process-card').height() / 2;
    $('.process-card').css('top', process_card_sticky_position);
    $('.footer .container').css('border', 'none');

    $(window).scroll(function() {
        var scrollValue = $(window).scrollTop();
        var scrollValueHalf = scrollValue + $(window).height() / 2;
        process_guide_scroll(scrollValueHalf);
    });

    $('.project-finder-nav-link').on('click', function() {
        $('.project-finder-nav-link').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.progress-bar-group').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top + 130 - $(window).height() / 2 + $(this.hash).height() / 2
        }, 500);
    });
});