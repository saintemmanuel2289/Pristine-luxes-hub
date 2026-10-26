let loginForm = document.getElementById("loginForm");
let loginIdentifier = document.getElementById("loginIdentifier");
let loginPassword = document.getElementById("loginPassword");
let loginMessage = document.getElementById("loginMessage");
let loginButton = document.getElementById("loginButton");

loginForm.addEventListener("input", function(){
    if (
        loginIdentifier.value.trim() !== "" &&
        loginPassword.value.trim() !== ""
    ) {
        loginButton.style.background = "green";
    } else {
        loginButton.style.background = "";
    }
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

   if (
    loginIdentifier.value.trim() !== "" &&
    loginPassword.value.trim() !== ""
) {
    loginMessage.textContent = "Login was Successful!";
    loginMessage.style.color = "green";
    loginMessage.style.fontWeight = "bold";
    loginMessage.style.fontSize = "18px";

    setTimeout(function() {
        window.location.href = "member.html";
    }, 3000);

} else {
        loginMessage.textContent = "Please enter your correct username and or password.";
        loginMessage.style.color = "red";
        loginMessage.style.fontWeight = "bold";
        loginMessage.style.fontSize = "18px"
    }
});