var template = document.getElementById("companiesTemplate");
      console.log(template);

const companiesApp = {
    base_url: "http://localhost:3000/companies",
    adsUrl: "http://localhost:3000/ads",
  
    init: function () {
      companiesApp.getCompaniesFromApi();
      companiesApp.getCompAdsFromApi();
    },

  
    getCompaniesFromApi: async () => {
      try {
        const response = await fetch(companiesApp.base_url);
  
        if (!response.ok) {
          throw new Error(response.status);
        }
        const companies = await response.json();
        console.log(companies);
  
        for (const company of companies) {
          companiesApp.makeCompanyInDOM(company);
        }
      } catch (error) {
        alert(error);
      }
    },

    getCompAdsFromApi: async () => {
        try {
          const response = await fetch(companiesApp.adsUrl);
    
          if (!response.ok) {
            throw new Error(response.status);
          }
          const companiesAds = await response.json();
    
          for (const companiesAd of companiesAds) {
            companiesApp.makeCompAdsInDOM(companiesAd);
          }
        } catch (error) {
          alert(error);
        }
      },

    makeCompAdsInDOM(companiesAd) {
        const adTemplate = document.getElementById("companyAd");
        const companiesAdsElm = document.importNode(adTemplate.content, true);
        companiesAdsElm.getElementById("adTitle").textContent = companiesAd.title;
        companiesAdsElm.querySelector(".miniTitle").textContent = companiesAd.city +
         " - " + companiesAd.createdAt;
        companiesAdsElm.getElementById("adDescribe").textContent = companiesAd.description;
        companiesAdsElm.getElementById("salaryAd").textContent = companiesAd.salary;

        document.getElementById("companiesSection2").append(companiesAdsElm);
    },

    makeCompanyInDOM(company) {
      
      const companiesElm = document.importNode(template.content, true);
      console.log(companiesElm);
      companiesElm.querySelector(".card-title").textContent = company.name;
      companiesElm.querySelector(".miniTitle").textContent = company.location;
      companiesElm.getElementById("aboutCompany").textContent =
        company.about;
      companiesElm.getElementById("mailCompany").textContent = company.email;
      companiesElm.getElementById("phoneCompany").textContent = company.phone;
      
      console.log("hey");   
      
      document.getElementById("companiesSection").append(companiesElm);
    },
  };
  

  // var templ = document.querySelector('#companiesTemplate');
  // var content = document.querySelector('#test');
  // content.appendChild(templ.content.cloneNode(true));

  const arrowDisplayAds = document.getElementsByClassName("arrowDisplayAds");
      console.log(arrowDisplayAds);
  var cCards2 = document.getElementsByClassName("companiesCard2");
  console.log(cCards2);
  var boobool = true;
      
        function arrowClick() {
          console.log(arrowDisplayAds[0])
          for (let i= 0; i < cCards2.length; i++) {
            if (boobool == true) {
              cCards2[i].style.display = "block";
              boobool = false;
            } else {
              cCards2[i].style.display = "none";
              boobool = true;
            }  
          }         
        };
      
        

  document.addEventListener("DOMContentLoaded", companiesApp.init);
  