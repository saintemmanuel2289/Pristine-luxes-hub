let registrationForm = document.getElementById("registrationForm");
let registrationName = document.getElementById("registrationName");
let registrationPhone = document.getElementById("registrationPhone");
let registrationEmail = document.getElementById("registrationEmail");
let registrationPassword = document.getElementById("registrationPassword");
let confirmPassword = document.getElementById("confirmPassword");
let registerButton = document.getElementById("registerButton");
let registrationMessage = document.getElementById("registrationMessage");

registrationForm.addEventListener("input", function(){
    if(registrationName.value.trim() !== "" && registrationPhone.value.length === 11 && registrationEmail.value.trim() !== "" && registrationPassword.value.length >= 8 && registrationPassword.value === confirmPassword.value){
        registerButton.style.background = "green";
    }else{
        registerButton.style.background = "";
    }
});

registrationForm.addEventListener("submit", function(event){
         event.preventDefault();
    if(registrationName.value.trim() !== "" && registrationPhone.value.length === 11 && registrationEmail.value.trim() !== "" && registrationPassword.value.length >= 8 && registrationPassword.value === confirmPassword.value){
        registrationMessage.textContent = registrationName.value + ", Your registration was Successful, You can now procedd with the Login!";
        registrationMessage.style.color ="green";
    }else{
        registrationMessage.textContent = "Please check that all fields were correctly filled. Phone number must be 11 digits, password must not be less than 8 digits and must match confirmpassword";
        registrationMessage.style.color ="red"
    }
})