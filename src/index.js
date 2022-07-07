document.addEventListener("DOMContentLoaded", () =>{
    const dogUrl = "http://localhost:3000/pups"
    
    function fetchData(url) {
        return fetch(url)
        .then(res => res.json())
    }

    function isGoodDogPatch(id, newValue) {
        return fetch(dogUrl + `/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                isGoodDog: newValue
            })
        }).then(res => res.json())
    }


    function dogList(dogData) {
        const divDogContainer = document.querySelector("div#dog-bar")
        const divDogInfo = document.querySelector("div#dog-info")
        const span = document.createElement('span')
        const imgDog = document.createElement('img')
        const h2Name = document.createElement('h2')
        const goodOrBadbtn = document.createElement('button')

        
        span.textContent = dogData.name
        
        span.addEventListener('click', creatingDogCard

            // if (goodOrBadbtn.innerText.includes("Good"||"Bad")){
            //     divDogInfo.removeChild(img, h2, button);
            //     creatingDogCard
            // } else {creatingDogCard}
        )

        divDogContainer.append(span)

        function creatingDogCard() {
            imgDog.src = dogData.image
            h2Name.textContent = dogData.name
    
            goodOrBadbtn.textContent =
            dogData.isGoodDog ? "Good Dog!" : "Bad Dog!"

            goodOrBadbtn.addEventListener('click', clickingGoodOrBadBtn)
            
            divDogInfo.append(imgDog, h2Name, goodOrBadbtn)
        }

        function clickingGoodOrBadBtn(e) {
            e.preventDefault();

            let newValue;
            if (e.target.innerText.includes("Good")) {
                e.target.innerText = "Bad Dog!"
                newValue = false
            } else {e.target.innerText = "Good Dog!"
                    newValue = true
            }
            isGoodDogPatch(dogData.id, newValue)    
        }
    }


    fetchData(dogUrl)
    .then(obj => obj.forEach(dogList))
    .catch(e => console.log(e))

})