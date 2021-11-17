function fetchData() {
    fetch("http://localhost:3000/companies")
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            const htmlComp = data
                .map(company => {
                    return `
                    <article class="companiesCard card">
						<h2 class="card-title teal white-text">${company.name}</h2>
						<span class="miniTitle">${company.location}</span><h4 class="card-title teal white-text">A propos</h4> <p id="aboutCompany">${company.about}</p>
						<p><h4 class="card-title teal white-text">Contact</h4><strong>Email: </strong><a id="mailCompany" href="#">${company.email}</a><br>
							<strong>Téléphone:</strong> <i id="phoneCompany">${company.phone}</i></p>
                            <div class="displayAds"><a id="aDispAds" class="arrowDisplayAds">&#10095;</a></div>
					</article>`;
                })
            .join("")
            document.querySelector("#displayCompanies").insertAdjacentHTML("afterbegin", htmlComp);
        })
            fetch(`http://localhost:3000/companies/${htmlComp.id}/ads`)
            .then(response => { console.log(response);
                if (!response.ok) {
                    throw Error("ERROR");
                }
                return response.json();
            })
            .then(data => { console.log(data);
                const htmlAds = data
                    .map(ad => {
                        return `
                        <article class="companiesCard2 card">
                                <h2 id="adTitle" class="card-title teal white-text"></h2>
                                <span class="miniTitle">Ville - CreatedAt</span><h4 class="card-title teal white-text">Description</h4>
                                <p id="adDescribe" >Lorem ipsum<br><h4 class="card-title teal white-text"><strong>Salaire</strong></h4><strong id="salaryAd">Enormément €</strong>.</p>
                            </article>`
                    })
                    .join("");
                document.querySelector("#displayFetchAds").insertAdjacentHTML("afterbegin", htmlAds);
            })
        .catch(error => {
            console.log(error);
        });
}

fetchData();

// var arrowDisplay = document.querySelectorAll(".arrowDisplayAds");
//     arrowDisplay.forEach(function(arrow) {
//         arrow.addEventListener("click", () => {
//             fetch(`http://localhost:3000/companies/${companyId}/ads`)
//             .then(response => { console.log(response);
//                 if (!response.ok) {
//                     throw Error("ERROR");
//                 }
//                 return response.json();
//             })
//             .then(data => { console.log(data);
//                 const htmlAds = data
//                     .map(ad => {
//                         return `
//                         <article class="companiesCard2 card">
//                                 <h2 id="adTitle" class="card-title teal white-text"></h2>
//                                 <span class="miniTitle">Ville - CreatedAt</span><h4 class="card-title teal white-text">Description</h4>
//                                 <p id="adDescribe" >Lorem ipsum<br><h4 class="card-title teal white-text"><strong>Salaire</strong></h4><strong id="salaryAd">Enormément €</strong>.</p>
//                             </article>`
//                     })
//                     .join("");
//                 document.querySelector("#displayFetchAds").insertAdjacentHTML("afterbegin", htmlAds);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//         });
//     });