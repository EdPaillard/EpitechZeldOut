function postSubscribe() {
    fetch("http://localhost:3000/subscribe",  {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: formSubData
    })
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);companyId
        });
}

postSubscribe();