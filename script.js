// let form = document.querySelector('form')
// let input = document.querySelector('#input-field')
// const h1 = document.querySelector('h1')
// console.log(form)
// console.log(input)

const urlFilms = "https://swapi.co/api/films"

    fetch(urlFilms)
            .then(res => {
                    return res.json()
            })
            .then(res => {
                    console.log(res.results) // display name of Film
                    
            })
            .catch(err => {
                    console.log("something went wrong...", err)
        })

        // console.log("bob")

const urlPeople = "https://swapi.co/api/people/" //setting equal to URL that access people

    fetch(urlPeople)
            .then(res => {
                    return res.json()
            })
            .then(res => {
                // console.log("this is two")
                    console.log(res.results) // display name of People
                    
            })
            .catch(err => {
                    console.log("something went wrong...", err)
        })

const urlSpecies = "https://swapi.co/api/species/" //setting equal to URL that access people

    fetch(urlSpecies)
            .then(res => {
                    return res.json()
            })
            .then(res => {
                // console.log("this is two")
                    console.log(res.results) // display name of Species
                    
            })
            .catch(err => {
                    console.log("something went wrong...", err)
        })

const urlStarships = "https://swapi.co/api/starships/" //setting equal to URL that access people

    fetch(urlStarships)
            .then(res => {
                    return res.json()
            })
            .then(res => {
                // console.log("this is two")
                    console.log(res.results) // display name of Starships
                    
            })
            .catch(err => {
                    console.log("something went wrong...", err)
        })

const urlVehicles = "https://swapi.co/api/vehicles/" //setting equal to URL that access people

    fetch(urlVehicles)
        .then(res => {
                return res.json()
        })
        .then(res => {
            // console.log("this is two")
                console.log(res.results) // display name of Vehicles
                
        })
        .catch(err => {
                console.log("something went wrong...", err)
        })