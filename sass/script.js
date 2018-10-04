$(document).ready(function () {
    // logo effect
    $('#logo a img,button.radial-gradient').tilt({
        glare: true,
        maxGlare: .5,
        scale: 1.2
    });
    // button
    $("button.radial-gradient").mousemove(function (event) {
        windowWidth = $("button.radial-gradient").width();
        windowHeight = $("button.radial-gradient").height();
        mouseXpercentage = Math.round(event.pageX / windowWidth * 1000);
        mouseYpercentage = Math.round(event.pageY / windowHeight * 1000);
        $('button.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #98c8f1, #98c8f1)');
    });
    // modal img
    $(".bpx-naus img").click(function () {
        $(".bpx-naus .modal").css({"display": "block"})
    });
    $(".wr-btn .button,.bpx-naus .modal").click(function () {
        $(".bpx-naus .modal").css({"display": "none"})
    });

    // footer
    $('footer').footerReveal({ shadow: false, zIndex: -101 });

});
