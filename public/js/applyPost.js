const adId = []; 

async function fetchApply() {
    const reponse = await fetch("http://localhost:3000/ads");
    const ads = await reponse.json();
    console.log(ads);
    ads.forEach(ad => adId.push(ad.id));
        console.log(adId);
        return adId;
}

const applyFormCon = document.getElementById("applyFormCon");
const applyFormDisc = document.getElementById("applyFormDisc");

applyFormCon.addEventListener("submit", async function(e) {
    // e.preventDefault();
    let myForm = e.target;
    const applyForm = new FormData(myForm);
    const datas = Object.fromEntries(applyForm);
    console.log(datas);

    // const datas = Array.from(applyForm);
    
        await fetchApply()
        const options = {
            method: 'POST',
            // headers: "Type-Content : application/json",
            body: datas
        };
        
        var x = document.querySelector(".advertsId").textContent;
        const reponse = await fetch(`http://localhost:3000/ads/${adId[x]}/application`, options);
        console.log(reponse);

});

applyFormDisc.addEventListener("submit", async function(e) {
    let myForm = e.target;
    const applyForm = new FormData(myForm);

    const datas = Object.fromEntries(applyForm);
    console.log(typeof datas);
    console.log(datas);
    
        await fetchApply()
        const options = {
            method: 'POST',
            body: datas
        };
        
        var x = document.querySelector(".advertsId").textContent;
        const response = await fetch(`http://localhost:3000/ads/${adId[x]}/application`, options);
        console.log(response);
});