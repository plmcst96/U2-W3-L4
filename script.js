
const loadFirstFun = function () {
    fetch('https://api.pexels.com/v1/search?query=dogs', {
        headers: {
            Authorization: "Hft5gxEJ164U0nzo9UblQrN8lrTG26FboMC1kBE0JhQUSLj8VBOeHkcq"
        }
    })
        .then((res) => {
            if (res.ok) {
                console.log('Ecco il res', res)
                return res.json()
            } else {
                throw new Error('Errore nel contattare il server')
            }
        })
        .then((images) => {
            console.log(images)
            for (let i = 0; i < images.photos.length; i++) {
                const row = document.getElementById('row-image')
                row.innerHTML += ` <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <a href="./details-image.html"><img
                src=${images.photos[i].src.medium}
                class="bd-placeholder-img card-img-top"
              /></a>
              <div class="card-body">
                <h5 class="card-title">${images.photos[i].photographer}</h5>
                <p class="card-text"><a href="./details-image.html" class="text-decoration-none text-black">
                  ${images.photos[i].alt}
                </a></p>
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary" onclick="removeCardImg(this)"
                    >
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">${images.photos[i].id}</small>
                </div>
              </div>
            </div>
          </div>`;

            }
        })
        .catch((err) => {
            console.log('errore', err)
        })
}

const loadSecondFun = function () {
    fetch('https://api.pexels.com/v1/search?query=landscape', {
        headers: {
            Authorization: "Hft5gxEJ164U0nzo9UblQrN8lrTG26FboMC1kBE0JhQUSLj8VBOeHkcq"
        }
    })
        .then((res) => {
            if (res.ok) {
                console.log('Ecco il res', res)
                return res.json()
            } else {
                throw new Error('Errore nel contattare il server')
            }
        })
        .then((image) => {
            console.log(image)
            for (let i = 0; i < image.photos.length; i++) {
                const row = document.getElementById('row-image')
                row.innerHTML += ` <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img
                src=${image.photos[i].src.medium}
                class="bd-placeholder-img card-img-top""
              />
              <div class="card-body">
                <h5 class="card-title">${image.photos[i].photographer}</h5>
                <p class="card-text">
                  ${image.photos[i].alt}
                </p>
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary" onclick="removeCardImg(this)"
                    >
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">${image.photos[i].id}</small>
                </div>
              </div>
            </div>
          </div>`;

            }
        })
        .catch((err) => {
            console.log('errore', err)
        })
}

const removeCardImg = function (button) {
    const card = button.closest(".col-md-4")
    card.remove()
}


const loadFirst = document.getElementById('load-first')
loadFirst.addEventListener('click', loadFirstFun)


const loadSecond = document.getElementById('load-second')
loadSecond.addEventListener('click', loadSecondFun)
