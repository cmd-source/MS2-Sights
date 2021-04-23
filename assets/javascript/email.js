//Email function was mainly taken from Code Institutes lesson Interactive Frontend Developement > Putting it all together > Sending Emails Using EmailJS 

function sendMail(contact) {
    emailjs.send("gmail", "conor", {
        "from_name": contact.name.value,
        "from_email": contact.emailaddress.value,
        "project_request": contact.textarea.value
    })
        .then(
            function (response) {
                console.log("success", response);
            },
            function (error) {
                console.log("failed", error);
            }
        );
    alert("Well get back to you shortly")
    return false;
}

$(document).ready(function () {

    //toggle button created with the help of https://www.youtube.com/watch?v=ZZoA3MjgASQ
    //toggle button created with the help of thttps://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode
    $(".toggle-btn").click(function () {
        this.classList.toggle('active')

        var element = document.body;
            element.classList.toggle("bodydarkmode");
    });
});
