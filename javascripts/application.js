/**
 * Created by santigallego on 7/15/16.
 */
$(document).on('scroll', function (e) {
    $(".navbar_animation").css('opacity', ($(document).scrollTop() / 500));
});