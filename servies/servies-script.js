$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 200) {
        $("header").addClass("scroll");
        } else {
        $("header").removeClass("scroll");
        }
    });
});