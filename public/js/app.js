const app = {
  init : () => {

    const learnBtn = document.querySelectorAll('.learnAd');
    console.log(learnBtn);
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
    const applyBox2 = document.getElementById("applyBox2");
    const closeBtn2 = document.getElementById("closeBtn2");
    const form2 = document.getElementById("applyFormDisc");


applyBtn.forEach(item => item.addEventListener("click", applyMore));
    
    function applyMore(e) {
      let span = e.target.firstChild;
      console.log(span);
      let adId = span.getAttribute("class");
      console.log(adId);
      let numAdId = parseInt(adId);
        form2.setAttribute("action", `http://localhost:3000/ads/${numAdId}/application`);
        applyBox2.style.display = "block";
        darkOverlay.style.display = "block";
    }


    closeBtn2.addEventListener("click", () => {

        darkOverlay.style.display = "none";
        applyBox2.style.display = "none";

    });

  },
  
};

document.addEventListener("DOMContentLoaded", app.init);
