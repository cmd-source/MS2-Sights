// added with the help of https://www.youtube.com/watch?v=WhU38HV-Iu8&t=380s

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

    $(".name img").hover(function(){
        $(this).css("box-shadow", "0 0 25px rgb(49, 46, 46)");
    }, function() {
        $(this).css("box-shadow", "none");
    });

    $(".para").css({
        backgroundColor: "rgba(72, 124, 177, 0.6)"
    })

    $("#marker a i").css({
        transform: "scale(3)",
        color: "red",
        transition: "2s"
    })

    $(".toggle-btn").click(function () {
        this.classList.toggle('active')
    });

});

