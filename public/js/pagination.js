      const cardArray = []
      const card = document.querySelectorAll(".pag");
      const pagItem = document.querySelectorAll(".numPag");
      console.log(pagItem);
    for(let value of card.values()){
        cardArray.push(value);
    }
    console.log(cardArray);
    const records_per_page = 5;
    var  current_page = 1;

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("testPag");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    switch(page) {
        case 1:
            pagItem[0].setAttribute("class", "active");
            pagItem[1].setAttribute("class", "wave-effect");
            pagItem[2].setAttribute("class", "wave-effect");
            break;

        case 2:
            pagItem[0].setAttribute("class", "wave-effect");
            pagItem[1].setAttribute("class", "active");
            pagItem[2].setAttribute("class", "wave-effect");
            break;

        case 3:
            pagItem[0].setAttribute("class", "wave-effect");
            pagItem[1].setAttribute("class", "wave-effect");
            pagItem[2].setAttribute("class", "active");
            break;
    }

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += cardArray[i].outerHTML;
    }

    

    // if (page == 1) {
    //     btn_prev.style.visibility = "hidden";
    // } else {
    //     btn_prev.style.visibility = "visible";
    // }

    // if (page == numPages()) {
    //     btn_next.style.visibility = "hidden";
    // } else {
    //     btn_next.style.visibility = "visible";
    // }
}

function numPages()
{
    return Math.ceil(cardArray.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};
