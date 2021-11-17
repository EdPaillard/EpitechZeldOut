const profilApp = {
    base_url: "http://localhost:3000/people/1",
  
    init: function () {
      console.log("profilApp.init");
      profilApp.getProfilFromApi();
    },
  
    getProfilFromApi: async () => {
      try {
        const response = await fetch(profilApp.base_url);
  
        if (!response.ok) {
          throw new Error(response.status);
        }
        const profil = await response.json();
  
        // for (const profil of profils) {
          profilApp.makeProfilInDOM(profil);
        // }
      } catch (error) {
        alert(error);
      }
    },
    makeProfilInDOM(profil) {
      const profilTemplate = document.getElementById("profilTemplate");
      const profilElm = document.importNode(profilTemplate.content, true);
      
      profilElm.querySelector(".card-title").textContent = profil.firstname + profil.lastname;
      profilElm.getElementById("aboutMe").textContent = profil.info;
      profilElm.getElementById("formation").textContent = profil.formation;
      profilElm.getElementById("skills").textContent = profil.skills;
      profilElm.getElementById("contact").innerHTML = "Email: " +
       profil.email + "<br>Téléphone: " + profil.phone;
      profilElm.getElementById("ageSexeVille").textContent = profil.age +
       " - sexe - " + profil.town;
      profilElm.getElementById("imgProfil").src = profil.img;
      
      document.getElementById("profilArticle").append(profilElm);
    },
  };
  
  document.addEventListener("DOMContentLoaded", profilApp.init);
  