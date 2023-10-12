const addressBarContent = new URLSearchParams(location.search)
const eventId = addressBarContent.get('eventId')
console.log(eventId)

const generateEventDetails = function (details) {
    // prendo un riferimento alla row
    const row = document.getElementById('event-details')
    row.innerHTML = `
          <div class="col col-12 col-lg-6">
              <h2 class="text-center">DETTAGLI DELL'EVENTO</h2>
              <img
              ${details.photos.src.medium}
              />
              <h3 class="text-center mt-4">${details.photos.photographer}</h3>
              <p>
                ${details.photos.alt}
              </p>
              <a>${details.photos.photographer_url}</a>
              <button class="btn btn-danger"><a href="./pixels-start.html">Ritorna a Home</a></button>
              <a class="btn btn-warning" href="./pixels-start.html?eventId=${details.photos.id}">MODIFICA</a>
          </div>
      `
}

const getSingleEventDetails = function () {
    fetch('https://api.pexels.com/v1/search?eventId=`${details.photos.id}`', {
        headers: {
            Authorization: "Hft5gxEJ164U0nzo9UblQrN8lrTG26FboMC1kBE0JhQUSLj8VBOeHkcq"
        }
    })
        .then((res) => {
            if (res.ok) {
                // abbiamo ottenuto i dettagli del singolo evento su cui abbiamo cliccato
                // recuperiamo il suo JSON
                return res.json()
            } else {
                throw new Error('Errore nel caricamento dei dettagli')
            }
        })
        .then((details) => {
            // eventData è UN OGGETTO! sono i singoli dettagli dell'evento, il suo name, il suo price, etc.
            generateEventDetails(details)
        })
        .catch((err) => console.log('ERRORE', err))
}

getSingleEventDetails()