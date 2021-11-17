const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const inscriptionBtn = document.getElementById("inscriptionBtn");

confirmPassword.addEventListener("change", () => {

    if (password.value != confirmPassword.value) {
        confirmPassword.setAttribute("class" , "invalid");
        inscriptionBtn.setAttribute("disabled", "true");
    } else {
        confirmPassword.setAttribute("class", "valid");
        inscriptionBtn.removeAttribute("disabled");
    }

});