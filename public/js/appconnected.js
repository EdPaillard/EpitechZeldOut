const app = {
  init : () => {

    const learnBtn = document.querySelectorAll('.learnAd');
    const applyBtn = document.querySelectorAll(".applyBtn");
    const laDiv = document.querySelectorAll(".laDiv");
    console.log(laDiv);
learnBtn.forEach(elem => elem.addEventListener("click", displayMore));
  function displayMore(e) {
    let index = Array.prototype.indexOf.call(learnBtn, e.target);
    if (laDiv[index].style.display == "none") {
      laDiv[index].style.display = "block";
      
    } else {
      laDiv[index].style.display = "none";
    }
  }


    const darkOverlay = document.getElementById("darkOverlay");
    const applyBox = document.getElementById("applyBox");
    const closeBtn = document.getElementById("closeBtn");
    const form1 = document.getElementById("applyFormCon");

applyBtn.forEach(item => item.addEventListener("click", applyMore));
    
    function applyMore(e) {
      let span = e.target.firstChild;
      console.log(span);
      let adId = span.getAttribute("class");
      console.log(adId);
      let numAdId = parseInt(adId);
        form1.setAttribute("action", `http://localhost:3000/ads/${numAdId}/application`);
        applyBox.style.display = "block";
        darkOverlay.style.display = "block";
    }

    closeBtn.addEventListener("click", () => {

        darkOverlay.style.display = "none";
        applyBox.style.display = "none";

    });

    const targetBtn = document.querySelector("#targetbtn")

    targetBtn.addEventListener("click",()=>{
    alert("Candidature bien prise en compte");      
    })
  },
  
};

document.addEventListener("DOMContentLoaded", app.init);
