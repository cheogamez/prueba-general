
document.addEventListener("DOMContentLoaded",() =>{
    fetchData()
})

const fetchData = async(url="https://rickandmortyapi.com/api/character") => {
    //console.log("Obteniendo Datos")
    try {
        loadingData(true)

        const res = await fetch (url)
        const data = await res.json()

        //console.log(data)
        pintarCard(data)
    } catch (error) {
        console.log(error)
    } finally {
        loadingData(false)
    }

}

const pintarCard = (data) =>{
    const cards = document.getElementById ("card-dinamicas")
    const templateCard = document.getElementById ("template-card").content
    const fragment = document.createDocumentFragment() 

    data.results.forEach(item => {
        //console.log(item.name)
        const clone = templateCard.cloneNode (true)
        clone.querySelector("h5").textContent = item.name
        clone.querySelector("p").textContent = item.species
        clone.querySelector("img").setAttribute("src", item.image)

        fragment.appendChild(clone)
    });
    cards.appendChild(fragment)
}

const loadingData = estado => {
    const loading = document.getElementById ("loading")
    if (estado){
        loading.classList.remove ("d-none")
    } else {
        loading.classList.add ("d-none")
    }
}

