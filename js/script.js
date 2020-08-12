$(function () {
    'use strict';

    // Menu js start

    var navOff = $('.main_menu ').offset().top;

    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navOff) {
            $(".main_menu").addClass("menu_fix");
        } else {
            $(".main_menu").removeClass("menu_fix");
        }

    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 100
                }, 1500,);
                return false;
            }
        }
    });

    // About counter js start
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });

    // Filter menu active
    $('.filter_menu ul li').click(function () {
        $('.active').removeClass('active');
        $(this).toggleClass('active');
    });

    //Filter js start
    var containerEl = document.querySelector('.filter_active');
    var mixer = mixitup(containerEl);

    // Veno box js start
    $('.venobox').venobox();

});