var inscriptionStatus = true;
var photoProfil = document.getElementById("photoProfil");
var connectSousMenu = document.getElementById("connectSM");
var inscriptionListItem = document.getElementById("inscriptionListItem");
var originalBG = connectSousMenu.style;
var redirectProfil = document.getElementById("redirectProfil");

window.onload = () => {
    if (inscriptionStatus == true) {
        
        photoProfil.src = "../images/edouard.png";
        connectSousMenu.innerHTML = "<li>Se déconnecter</li>";
    var liDeconnect = connectSousMenu.firstChild;
    var liDeconnectStyle = liDeconnect.style;
        inscriptionListItem.style.display = "none";
       
        connectSousMenu.addEventListener("mouseenter", () => {

            connectSousMenu.style.backgroundColor = "red";
            connectSousMenu.firstChild.style.backgroundColor = "red";

        });
        connectSousMenu.addEventListener("mouseleave", () => {

            connectSousMenu.style = originalBG;
            liDeconnect.style = liDeconnectStyle;

        });
        connectSousMenu.addEventListener("click", () => {
            inscriptionStatus = false;
        });
    
    } else {
        
        photoProfil.src = "../images/default_profil.png";
        connectSousMenu.innerHTML = "<li>Connexion</li>";
        inscriptionListItem.style.display = "flex";
        connectSousMenu.addEventListener("click", () => {
            inscriptionStatus = true;
        });
    }

    if (inscriptionStatus == false) {
        redirectProfil.href = "modifprofil.html";
    } else {
        return;
    }
}
