$(document).ready(function() {

    //initializing sliders
    $('.news-slider').slick();
    $('.investigations-slider').slick();
    $('.intro').slick({
        arrows: false
    });

    //customize select
    $('.lang').on('change', function() {
        var selected = $('.lang__option:selected').text();
        $('.js-text-holder').text(selected);
        $('<span>').addClass('lang__arrow').appendTo('.js-text-holder')
    });

    //activating intro-slider nav-buttons
    $('.intro__arrow-left').click(function(){
        $('.intro').slick('slickPrev')
    });
    $('.intro__arrow-right').click(function(){
        $('.intro').slick('slickNext')
    })

});