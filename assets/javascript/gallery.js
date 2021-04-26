//toggle button created with the help of https://www.youtube.com/watch?v=ZZoA3MjgASQ
//toggle button created with the help of thttps://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode

$(".toggle-btn").click(function () {
    this.classList.toggle('active');

    var element = document.body;
    element.classList.toggle("bodydarkmode");
});