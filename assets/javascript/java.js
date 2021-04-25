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
        $(this).css("text-decoration", "none");
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
        backgroundColor: "rgba(134, 120, 120, 0.5)"
    });

    $("#marker a i").css({
        transform: "scale(3)",
        color: "red",
        transition: "2s"
    });

    //toggle button created with the help of https://www.youtube.com/watch?v=ZZoA3MjgASQ
    //toggle button created with the help of thttps://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode

    $(".toggle-btn").click(function () {
        this.classList.toggle('active');

        var element = document.body;
            element.classList.toggle("bodydarkmode");
    });

});

// adding in a hello message depending on the time of day

let date = new Date();

let time = date.getHours();

if (time < 12) {
    document.getElementById("hello").innerHTML = "Good morning!";
    
} else {
    document.getElementById("hello").innerHTML = "Good evening!";
} 

