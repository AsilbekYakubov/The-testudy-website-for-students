"use strict";
jQuery(document).ready(function() {
    var $slicknav_label;
    $('.responsive-menu').slicknav({
        duration: 500,
        easingOpen: 'easeInExpo',
        easingClose: 'easeOutExpo',
        closedSymbol: '<i class="fa fa-plus"></i>',
        openedSymbol: '<i class="fa fa-minus"></i>',
        prependTo: '#slicknav-mobile',
        allowParentLinks: true,
        label: ""
    });
    var $slicknav_label;
    $('#responsive-menu').slicknav({
        duration: 500,
        easingOpen: 'easeInExpo',
        easingClose: 'easeOutExpo',
        closedSymbol: '<i class="fa fa-plus"></i>',
        openedSymbol: '<i class="fa fa-minus"></i>',
        prependTo: '#slicknav-mobile',
        allowParentLinks: true,
        label: ""
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('navbar-sticky-in')
        } else {
            $('.navbar').removeClass('navbar-sticky-in')
        }
    })
    var selected = $('#navbar li');
    selected.on("mouseenter", function() {
        $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
    });
    selected.on("mouseleave", function() {
        $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
    });
    if ($(window).width() > 992) {
        $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
    }
});