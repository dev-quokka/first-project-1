$(document).ready(function() {
    if($('.header').find('section:eq(0)').hasClass('white-color')) {
        $('.yes-login').hide();
        $('.no-login').show();
    }
    else {
        $('.no-login').hide();
        $('.yes-login').show();
    }

    $('.user-img').click(function() {
        if($('.nav-dropdown').css('display') == 'none') {
            $('.nav-dropdown').show();
        }
        else {
            $('.nav-dropdown').hide();
        }
    });
});