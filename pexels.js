const PEXELS_KEY = 'Hft5gxEJ164U0nzo9UblQrN8lrTG26FboMC1kBE0JhQUSLj8VBOeHkcq'
// funziona anche con 'ciao'?

const getImages = function (query) {
    fetch('https://api.pexels.com/v1/search?query=' + query, {
        headers: {
            authorization: PEXELS_KEY,
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore nella response')
            }
        })
        .then((data) => {
            console.log(data)

            const row = document.querySelector('#content-row')
            console.log(row)
            row.innerHTML = ''
            data.photos.forEach((photo) => {
                const newCol = document.createElement('div')
                newCol.classList.add('col', 'col-md-4')
                newCol.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <img
                src="${photo.src.medium}"
                class="bd-placeholder-img card-img-top"
                />
                <div class="card-body">
                <a href="./details.html?imageId=${photo.id}"><h5 class="card-title">Lorem Ipsum</h5></a>
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
                    >
                        View
                    </button>
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                    >
                        Edit
                    </button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                </div>
                </div>
            </div>
            `
                row.appendChild(newCol)
            })
            // cambiamo tutti gli edit in hide
            const allTheEditButtons = document.querySelectorAll(
                '.card .btn:nth-of-type(2)'
            )
            allTheEditButtons.forEach((button) => {
                button.innerText = 'Hide'
                button.addEventListener('click', function (e) {
                    // questo avviene al click di uno qualsiasi dei nuovi bottoni Hide
                    console.log('click!', e.target)
                    // cerco, risalendo il DOM, la col che contiene questo bottone
                    e.target.closest('.col').remove()
                })
            })
        })
        .catch((err) => console.log(err))
}

const primaryButton = document.querySelector('.btn-primary')
primaryButton.addEventListener('click', () => getImages('kittens'))

const secondaryButton = document.querySelector('.btn-secondary')
secondaryButton.addEventListener('click', () => getImages('hamsters'))

const searchForm = document.getElementById('custom-search')
searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const searchBar = document.getElementById('search-field')
    const searchValue = searchBar.value
    getImages(searchValue)
})