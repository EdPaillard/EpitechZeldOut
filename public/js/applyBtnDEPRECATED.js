var applyBtn = document.getElementsByClassName("applyBtn");
var darkOverlay = document.getElementById("darkOverlay");
var applyBox = document.getElementById("applyBox");
var applyBox2 = document.getElementById("applyBox2");
var closeBtn = document.getElementById("closeBtn");
var isConnected = false;

for (let i = 0; i < applyBtn.length; i++) {
    applyBtn[i].addEventListener("click", (event) => {
        event.preventDefault;
        if (isConnected == true) {
            darkOverlay.style.display = "block";
            applyBox.style.display = "block";
        } else {
            darkOverlay.style.display = "block";
            applyBox2.style.display = "block";
        }
    });
}

closeBtn.addEventListener("click", () => {

    darkOverlay.style.display = "none";
    applyBox.style.display = "none";

});

closeBtn2.addEventListener("click", () => {

    darkOverlay.style.display = "none";
    applyBox2.style.display = "none";

});