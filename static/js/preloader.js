$(document).ready(function () {
    $(window).resize();
});
$(window).resize(function () {
    $('.loading-fixed').css({ position: 'absolute' }).css({
        left: ($(window).width() - $('.loading-fixed').outerWidth()) / 2,
        top: ($(window).height() - $('.loading-fixed').outerHeight()) / 2
    });
});