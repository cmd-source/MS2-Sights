$(document).ready(function () {
    $("p").css({
        textAlign: "center"
    }).hide();

    $(".name a").css({
        textAlign: "center",
        fontFamily: "Akaya Telivigala",
        color: "white",
        textDecoration: "none"
    }).hover(function () {
        $(this).css("text-decoration", "underline");
    }, function () {
        $(this).css("text-decoration", "none")
    });

    $(".name a").click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle('slow');
    });

    $(".para").css({
        backgroundColor: "rgba(72, 124, 177, 0.6)"
    })

});

//---------Maps---------//
