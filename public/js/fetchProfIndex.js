
window.addEventListener("load", fetchIndexProf);
async function fetchIndexProf() {

    const profId = document.getElementById("idInput").value;
    console.log(profId);

    if (profId !== "disconnect") {


        const reponse = await fetch(`http://localhost:3000/fetchprofil/${profId}`);
        console.log(reponse);
        const profil = await reponse.json();
        console.log(profil);
        // const profilJSON = profil.json();
        // console.log(profilJSON);
        // const arrayProfil = profil.slice(0, 1);
        // console.log(arrayProfil);

        // const profilUser = profil[0];
        // console.log(profilUser);
        // const arrayProfil = Object.values(profilUser);
        // console.log(arrayProfil);
        
        if (profil.firstname != null && profil.lastname != null && profil.info != null && profil.formation != null && profil.skills != null) {
            const renduCo = `
                <article class="card white sidebarArtcl">
                    <div class="card-content">
                    <h2 id="canevasInfoPP" class="card-title teal white-text">Infos</h2>
                        <p><strong>${profil.firstname} ${profil.lastname}</strong><br> <em>${profil.age} ans - ${profil.town}</em><br>
                        ${profil.info}</p><br>
                        <a href="/modify/${profil.id}">Modifiez votre profil</a>
                    </div>
                </article>
                <article class="card white sidebarArtcl sidebarArtcl2">
                    <div class="card-content">
                        <h2 class="card-title teal white-text">Formation</h2>
                        <p>${profil.formation}<p>
                    </div>
                </article>
                <article class="card white sidebarArtcl sidebarArtcl2">
                    <div class="card-content">
                        <h2 class="card-title teal white-text">Compétences</h2>
                        <p>${profil.skills}</p>
                    </div>
                </article>
                <article class="card white sidebarArtcl sidebarArtcl2">
                    <div class="card-content">
                        <h2 class="card-title teal white-text">Réseaux sociaux</h2>
                        <p>Abonnez-vous à nos réseaux sociaux pour suivre toute l'actualité du marché de l'emploi de Creuse.
                         100% de nos abonnés ont été chômeur, notre engagement: qu'ils puissent scroller twitter en attendant une réponse positive !</p>
                        <a href="https://www.facebook.com/profile.php?id=100073932182746"><img style="margin: 5% 5% 0 0;"  src="../images/fbico.png" alt="Logo Facebook" /></a>
                        <a href="https://twitter.com/wallemmes"><img src="../images/twitico.png" alt="Logo Twitter" /></a>
                    </div>
                </article>`

            return document.querySelector("#shortInfos").insertAdjacentHTML("afterbegin", renduCo);
        } else {
            const renduDeco =  `
                <article class="card white sidebarArtcl">
                    <div class="card-content">
                    <h2 id="canevasInfoPP" class="card-title teal white-text">Complétez votre profil !</h2>
                        <p>Profitez pleinement de l'expérience ZeldOut en créant votre profil sur le site. 
                        Attirez l'oeil des recruteurs en personnalisant votre page et en exposant les particularités de votre personnalité.</p>
                        <a href="/profil">Cliquez ici !</a>
                    </div>
                </article>
                <article class="card white sidebarArtcl sidebarArtcl2">
                    <div class="card-content">
                        <h2 class="card-title teal white-text">Partenaires</h2>
                        <p>ZeldOut peut compter sur un réseau riche et dense de partennaires qui vous aident à trouver des opportunités dans toute la Creuse !<p>
                    </div>
                </article>
                <article class="card white sidebarArtcl sidebarArtcl2">
                    <div class="card-content">
                        <h2 class="card-title teal white-text">Réseaux sociaux</h2>
                        <p>Abonnez-vous à nos réseaux sociaux pour suivre toute l'actualité du marché de l'emploi de Creuse.
                         100% de nos abonnés ont été chômeur, notre engagement: qu'ils puissent scroller twitter en attendant une réponse positive !</p>
                        <a href="https://www.facebook.com/profile.php?id=100073932182746"><img style="margin: 5% 5% 0 0;"  src="../images/fbico.png" alt="Logo Facebook" /></a>
                        <a href="https://twitter.com/wallemmes"><img src="../images/twitico.png" alt="Logo Twitter" /></a>
                    </div>
                </article>`
    
                return document.querySelector("#shortInfos").insertAdjacentHTML("afterbegin", renduDeco);
            }    

    } else {
        const renduDeco =  `
            <article class="card white sidebarArtcl">
                <div class="card-content">
                <h2 id="canevasInfoPP" class="card-title teal white-text">Inscrivez-vous !</h2>
                    <p>Profitez pleinement de l'expérience ZeldOut en créant votre profil sur le site. 
                    Attirez l'oeil des recruteurs en personnalisant votre page et en exposant les particularités de votre personnalité.</p>
                    <a href="/inscription">Cliquez ici !</a>
                </div>
            </article>
            <article class="card white sidebarArtcl sidebarArtcl2">
                <div class="card-content">
                    <h2 class="card-title teal white-text">Partenaires</h2>
                    <p>ZeldOut peut compter sur un réseau riche et dense de partennaires qui vous aident à trouver des opportunités dans toute la Creuse !<p>
                </div>
            </article>
            <article class="card white sidebarArtcl sidebarArtcl2">
                <div class="card-content">
                    <h2 class="card-title teal white-text">Réseaux sociaux</h2>
                    <p>Abonnez-vous à nos réseaux sociaux pour suivre toute l'actualité du marché de l'emploi de Creuse.
                     100% de nos abonnés ont été chômeur, notre engagement: qu'ils puissent scroller twitter en attendant une réponse positive !</p>
                     <a href="https://www.facebook.com/profile.php?id=100073932182746"><img style="margin: 5% 5% 0 0;"  src="../images/fbico.png" alt="Logo Facebook" /></a>
                     <a href="https://twitter.com/wallemmes"><img src="../images/twitico.png" alt="Logo Twitter" /></a>
                </div>
            </article>`

            return document.querySelector("#shortInfos").insertAdjacentHTML("afterbegin", renduDeco);
        }

}
