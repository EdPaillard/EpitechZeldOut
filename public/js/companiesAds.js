var displayAds = document.getElementById("aDispAds");
console.log(displayAds);
var adsCard = document.getElementsByClassName("companiesCard2");
var onOffBtn = true;

// for (let i = 0; i < 5; i++) {
    displayAds.addEventListener("click", () => {
        console.log(displayAds[i]);
        if (onOffBtn == true) {
            adsCard[i].style.display = "block";
            onOffBtn = false;
        } else {
            adsCard[i].style.display = "none";
            onOffBtn = true;
        }
    });
// }
