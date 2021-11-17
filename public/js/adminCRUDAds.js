const modifyBtn = document.querySelector(".modify");
const deleteBtn = document.querySelector(".delete");
const button = document.querySelectorAll("button");
const input = document.querySelectorAll("input");
const formHidden = document.getElementById("formHidden");
const formCreateHidden = document.getElementById("formCreateHidden");
const confirmSupr = document.getElementById("confirmSupr");
const createBtn = document.querySelector(".create")
const suppressForm = document.getElementById("suppressForm");
const textarea = document.querySelectorAll("textarea");



modifyBtn.addEventListener("click", () => {
   validateBtn();
});


function validateBtn() {
    for (let i = 0; i < input.length; i++) {
        input[i].removeAttribute("disabled");
    }
    for (let j = 0; j < button.length; j++) {
        button[j].removeAttribute("disabled");
    }
    for (let k = 0; k < textarea.length; k++) {
        textarea[k].removeAttribute("disabled");
    }
}

deleteBtn.addEventListener("click", () => {
    formHidden.style.display = "block";
})

confirmSupr.addEventListener("click", async (e) => {
    e.preventDefault();
    const catchForm = new FormData(suppressForm);
    console.log(...catchForm);
    const reForm = []
    for (pair of catchForm) {
        reForm.push(pair[0], pair[1]);
    }
    console.log(reForm);
    const suppression = await fetch(`http://localhost:3000/${reForm[0]}/${reForm[1]}`, {
        method: 'DELETE',
        // body: "null"
    });
    const res = await suppression.text();
    function pageReload() {window.location.reload();}
    pageReload();
    console.log(res);
})

createBtn.addEventListener("click", () => {
    formCreateHidden.style.display = "block";
})

createBtn.addEventListener("click", async (e) => {
    const getCompId = await fetch('http://localhost:3000/fetchcompanies');
    const result = await getCompId.json();
    console.log(result);

    const htmlIDNameComp = result.map(company => {
         return `
         <option name="valueId" id="optionDelete" value="${company.idc}">${company.name}</option>`;
    })
    document.querySelector("#idNameComp").insertAdjacentHTML("afterbegin", htmlIDNameComp);
})