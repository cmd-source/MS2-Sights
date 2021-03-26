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

document.getElementById("sub").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMail(contactForm);
    }
})