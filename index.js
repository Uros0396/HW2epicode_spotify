fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
.then(res => res.json())
.then(res => {
    document.querySelector('#eminemSection').innerHTML = res.data.map(elem => {
        return `
            <div class="card m-2 bg-dark" style="width: 18rem">
                <img src="${elem.album.cover_medium}" class="card-img-top w-100" alt="...">
                <div class="card-body mt-5">
                    <h5 class="card-title text-primary">${elem.title}</h5>
                    <div class="d-flex justify-content-between text-secondary">
                        <h6 class="card-text">${elem.artist.name}</h6>
                        <div id="iconContainer${elem.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle"        viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                            </svg>
                        </div>
                        <audio id="${elem.id}" src="${elem.preview}"></audio>
                    </div>
                </div>
            </div>
        `
    }).join('')

    res.data.forEach(elem => {
        let iconContainer = document.querySelector('#iconContainer' + elem.id)
        iconContainer.addEventListener('click', ()=> {
            playMusic(elem.id)
        })
    });
})

function playMusic(audioId) {
    let audio = document.getElementById(audioId)
    if(audio.paused) {
        audio.play()
        let iconContainer = document.querySelector(`#iconContainer${audioId}`)
        iconContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
            </svg>
        `
    }
    else {
        audio.pause()
        let iconContainer = document.querySelector(`#iconContainer${audioId}`)
        iconContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle"        viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
            </svg>
        `
    }
}


fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica") 
    .then(res => res.json())
    .then(res =>{
        document.querySelector("#metallicaSection").innerHTML = res.data.map(elem =>{
           return  ` <div class="card m-2 bg-dark" style="width: 18rem;">
                  <img src="${elem.album.cover_medium}" class="card-img-top w-100" alt="...">
                  
                  <div class="card-body mt-5">
                    <h5 class="text-primary">${elem.title}</h5>
                    <div class="d-flex text-secondary justify-content-between align-items-center">
                        <h6>${elem.artist.name}</h6>
                      <div id = "iconContainer${elem.id}">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle"        viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                            </svg>
                      </div>
                        <audio id="${elem.id}" src="${elem.preview}"></audio>
                    </div>
                    
                  </div>
                </div>`
        }).join('');

         res.data.forEach(elem => {
            let iconContainer = document.getElementById("iconContainer" + elem.id);
            iconContainer.addEventListener("click", () => {
                playMusic(elem.id);
            })


            
        });
        
    })

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen") 
    .then(res => res.json())
    .then(res =>{
        document.querySelector("#queenSection").innerHTML = res.data.map(elem =>{
           return  ` <div class="card m-2 bg-dark" style="width: 18rem;">
                  <img src="${elem.album.cover_medium}" class="card-img-top w-100" alt="...">
                  
                  <div class="card-body mt-5">
                    <h5 class="text-primary">${elem.title}</h5>
                    <div class="d-flex justify-content-between align-items-center text-secondary">
                        <h6>${elem.artist.name}</h6>
                      <div id = "iconContainer${elem.id}">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle"        viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                            </svg>
                      </div>
                        <audio id="${elem.id}" src="${elem.preview}"></audio>
                    </div>
                    
                  </div>
                </div>`
        }).join('');

        res.data.forEach(elem => {
            let iconContainer = document.getElementById("iconContainer" + elem.id);
            iconContainer.addEventListener("click", () => {
                playMusic(elem.id);
            })


            
        });
    });
        



     
    

    const searchArtist = () => {
        const input = document.getElementById("searchField");
        const searchButton = document.getElementById("button-search");
        searchButton.addEventListener("click", () => {
        const searchValue = input.value.trim().toLowerCase();
            
        if (searchValue === "eminem") {
                const element = document.getElementById('eminem');
                element.classList.remove('d-none');
               } else if (searchValue === "metallica") {
                const element2 = document.getElementById("metallica");
                element2.classList.remove("d-none")
               } else if (searchValue === "queen") {
                const element2 = document.getElementById("queen");
                element2.classList.remove("d-none")
            }
        });
    }
    

    searchArtist();
    