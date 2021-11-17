// const subSubBtn = document.getElementById("submProfBtn");

// subSubBtn.addEventListener("click", (e) => {
//     e.preventDefault;
//     var formSubData = new URLSearchParams();
//     const subForm = document.getElementById("inscriptionForm");
//         for (const pair of new FormData(subForm)) {
//             data.append(pair[0], pair[1]);
//         }
//         console.log(formSubData);

//         postCreateProfil(formSubData);
// });



// function postCreateProfil(data) {
//     fetch("http://localhost:3000/people",  {
//         method: 'POST',
//         body: data,
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw Error("ERROR");
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// const subForm = document.getElementById("inscriptionForm");

// subForm.addEventListener("submit", function (e) {
//     e.preventDefault;

//     const formData = new FormData(this);
//     console.log(formData);

//     fetch("http://localhost:3000/people",  {
//         method: 'POST',
//         body: formData,
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw Error("ERROR");
//             }
//             return response.text();
//         })
//         .then(text => {
//             console.log(text);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// });

// L'image img#image
var image = document.getElementById("imgModifyProfil");
     
// La fonction previewPicture
var previewPicture  = function (e) {

    // e.files contient un objet FileList
    const [picture] = e.files

    // "picture" est un objet File
    if (picture) {
        // On change l'URL de l'image
        image.src = URL.createObjectURL(picture);
    }
} 