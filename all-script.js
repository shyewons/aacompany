$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 500) {
        $("header").addClass("scroll");
        } else {
        $("header").removeClass("scroll");
        }
    });
      
    $(".prev").click(function() {
        $(".view-zone").css({'marginLeft':'0px'})
    });
    $(".next").click(function() {
        $(".view-zone").css({'marginLeft':'-800px'})
    });

    $(".familysite-wrap").click(function() {
        $(".familysite-wrap dd").toggleClass("on");
    });
});