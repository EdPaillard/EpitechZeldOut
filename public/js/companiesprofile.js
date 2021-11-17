var profil = document.getElementById("manageProfilItem");
var entreprise = document.getElementById("manageCompanyItem");
var Ads = document.getElementById("manageAdItem");
var profilArticle = document.getElementById("profilManager");
var companyArticle = document.getElementById("profilCompany");
var AdArticle = document.getElementById("profilAd");

profil.addEventListener("click", () => {

    profilArticle.style.display = "block";
    companyArticle.style.display = "none";
    AdArticle.style.display = "none";

});

entreprise.addEventListener("click", () => {

    profilArticle.style.display = "none";
    companyArticle.style.display = "block";
    AdArticle.style.display = "none";

});

Ads.addEventListener("click", () => {

    profilArticle.style.display = "none";
    companyArticle.style.display = "none";
    AdArticle.style.display = "block";

});