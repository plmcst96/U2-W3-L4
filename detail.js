const KEY = 'Hft5gxEJ164U0nzo9UblQrN8lrTG26FboMC1kBE0JhQUSLj8VBOeHkcq'

const addressBarContent = new URLSearchParams(location.search)
const imageId = addressBarContent.get('imageId')

fetch('https://api.pexels.com/v1/photos/' + imageId, {
    headers: {
        authorization: KEY,
    },
})
    .then(res => {
        console.log(res)
        if (res.ok) {
            return res.json()
        } else {
            throw new Error('Errore nella response')
        }
    })
    .then((image) => {
        console.log(image)
        const row = document.getElementById('row-image')
        const col = document.createElement('div')
        col.classList.add('col', 'col-12', 'col-lg-8')
        col.innerHTML = ` <div class="col-lg-8">
    <div class="card mb-4 shadow-sm">
      <img
        src=${image.src.large}
        class="bd-placeholder-img card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">${image.alt}</h5>
        <a href="${image.photographer_url}"><h6 class="card-title">${image.photographer}</h6></a>
        <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
        </div>
      </div>
      <a href="pexels-start.html"><button type="button" class="btn btn-outline-info">Return to Home</button></a>
  </div>`
        row.appendChild(col)
    })
    .catch(err => console.log(err))