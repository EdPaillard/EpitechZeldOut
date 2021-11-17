const saveBtn = document.getElementById("submProfBtn");

async function getProfilId(e) {
        e.preventDefault();
    const getId = await fetch(`http://localhost:3000/fetchprofil/`)
    const data = await getId.json();
    console.log(data);

    const mail = document.getElementById("email").value;
    console.log(mail);
    const newArray = [];

    for (let i=0; i < data.length; i++) {
        if (data[i].email === mail) {
            newArray.push(data[i]);
        }
    }
    console.log(newArray);

    const idNumber = newArray[0].id;
    

    const gotThatId = idNumber.toString();
    console.log(gotThatId);

    
    // const sendHttpRequest = (method, url, data) => {
    //     const promise = new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open(method, url);

    //         xhr.responseType = 'json';

    //         if(data) {
    //             xhr.setRequestHeader('Content-Type', 'text/html');
    //         }

    //         xhr.onload = () => {
    //             resolve(xhr.response);
    //         };

    //         xhr.onerror = () => {
    //             reject('Failure. That\'s what you arguments. A failure. With regards');
    //         };

    //         xhr.send(data);
    //     });
    //     return promise;
    // };

    // const sendData = () => {
    //     sendHttpRequest('PUT', `http://localhost:3000/people/${gotThatId}`,
    //         "Jeanjean"
    //     ).then(responseData => {
    //         console.log(responseData);
    //     });
    // };

    // sendData();



    const reponse = await fetch(`http://localhost:3000/people/${gotThatId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'text/html; charset=UTF-8',
        },
        body:{
            firstname: "New name"
        }
    })
    console.log("ici" + reponse);
    const result = await reponse.json();
    console.log(result);
}

saveBtn.addEventListener("click", getProfilId);