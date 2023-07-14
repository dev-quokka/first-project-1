$(document).ready(function() {
    $('.store-category-nav ul li').click(function() {
        $('.store-category-nav ul li').removeClass('active-li');
        $(this).addClass('active-li');

    });
});

$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});


