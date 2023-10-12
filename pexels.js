// creiamo la const per la chiave API
const KEY = 'Hft5gxEJ164U0nzo9UblQrN8lrTG26FboMC1kBE0JhQUSLj8VBOeHkcq'

const getNewImage = function (query) {
  fetch('https://api.pexels.com/v1/search?query=' + query, {
    headers: {
      authorization: KEY,
    },
  })
    .then(res => {
      if (res.ok) {
        console.log(res)
        return res.json()
      } else {
        throw new Error('Errore nel response')
      }
    })
    .then(dataImg => {
      console.log(dataImg)
      const row = document.getElementById('row-image')
      row.innerHTML = ''
      dataImg.photos.forEach(photo => {
        const col = document.createElement('div')
        col.classList.add('col', 'col-md-4')
        col.innerHTML = ` <div class="card mb-4 shadow-sm">
                <img
                  src=${photo.src.original}
                  class="bd-placeholder-img card-img-top"
                />
                <div class="card-body">
                <a href="./detail.html?imageId=${photo.id}"><h5 class="card-title">${photo.photographer}</h5></a>
                  <p class="card-text">
                    ${photo.alt}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary" onclick="removeCard(this)"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                  </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src=${photo.src.medium} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
              </div>`
        row.appendChild(col)
      });
    })
    .catch(err => console.log(err))
}

const removeCard = function (button) {
  const card = button.closest(".col-md-4")
  card.remove()
}


const firstBtn = document.getElementById('first')
firstBtn.addEventListener('click', () => getNewImage('sea'))

const secondBtn = document.getElementById('second')
secondBtn.addEventListener('click', () => getNewImage('fish'))

const formSearch = document.getElementById('form')
formSearch.addEventListener('submit', function (e) {
  e.preventDefault()
  const bar = document.getElementById('inputSearch')
  const search = bar.value
  getNewImage(search)
})