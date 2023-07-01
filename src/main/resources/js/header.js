$(document).ready(function() {
    $('.user-img').click(function() {
        if($('.nav-dropdown').css('display') == 'none') {
            $('.nav-dropdown').show();
        }
        else {
            $('.nav-dropdown').hide();
        }
    });
});