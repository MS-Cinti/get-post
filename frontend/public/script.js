fetch ("./dog/data.json")
.then(response => response.json())
.then(data => {
    for (const beer of data.cards) {
        document.getElementById('flex-container').insertAdjacentHTML("beforeend", `
            <div class="cards">
                <h2>${beer.title}</h2><br>
                <p>${beer.sub}</p><br>
                <p>${beer.text}</p><br>
            </div>
            `
        )}
    })

//másik megoldások:
//Szilvitől
//Krisztitől