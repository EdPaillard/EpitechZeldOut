var photoP = document.getElementById("photoProfil");
var subMenu = document.getElementById("subMenu");
let bool = true;

photoP.addEventListener("click", () => {

    if (bool == true) {
        subMenu.style.display = "flex";
        bool = false;
    } else {
        subMenu.style.display = "none";
        bool = true;
    }

});
