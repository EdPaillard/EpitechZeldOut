// var changePP = document.getElementById("changePP");
// var darkOverlay = document.getElementById("darkOverlay");
// var profilBox = document.getElementById("ppBox");
// var closeBtn = document.getElementById("closeBtn");
// var validateBtn = document.getElementById("sendPP");

// changePP.addEventListener("click", () => {

//     darkOverlay.style.display = "block";
//     profilBox.style.display = "block";

// });

// closeBtn.addEventListener("click", () => {

//     darkOverlay.style.display = "none";
//     profilBox.style.display = "none";

// });

// validateBtn.addEventListener("click", () => {

//     darkOverlay.style.display = "none";
//     profilBox.style.display = "none";

// });

var buttonTrigger = document.getElementById("switchToggle");
var companiesForm = document.getElementById("companiesForm");
var submitBtn = document.getElementById("submProfBtn");
var isSwitched = true;

buttonTrigger.addEventListener("click", () => {

    if (isSwitched == true) {
        companiesForm.style.display = "block";
        isSwitched = false;
    } else {
        companiesForm.style.display = "none";
        isSwitched = true;
    }
});