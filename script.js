// let form = document.querySelector('form')
// let input = document.querySelector('#input-field')
// const h1 = document.querySelector('h1')
// console.log(form)
// console.log(input)

const url = "https://swapi.co/api/films/"

fetch(url)
        .then(res => {
                return res.json()
        })
        .then(res => {
                console.log(res.name) // display name of Pokemon
        })
        .catch(err => {
                console.log("something went wrong...", err)
        })
 



// const url2 = "https://swapi.co/api/people/" //setting equal to URL that access berries
// // const ul = document.querySelector('ul') //create variable for UL on html page

// fetch(url2) //to make request to get all data from specified URL
// .then(res => res.json()) //convwrting response to JSON
// .then(res => {
//     console.log(res.results) //accsessing results with dot notation, got back an object from response 
//     let berries = res.results 
//     for (let i = 0; i < berries.length; i++) {
//         console.log(berries[i]) //console logging 
//         let li = document.createElement('li') // create new element for each variable we are looping through
//         li.innerText = berries[i].name
//         ul.appendChild(li)
//     }
// })



// const url3 = "https://swapi.co/api/species/" //setting equal to URL that access berries
// // const ul = document.querySelector('ul') //create variable for UL on html page

// fetch(url2) //to make request to get all data from specified URL
// .then(res => res.json()) //convwrting response to JSON
// .then(res => {
//     console.log(res.results) //accsessing results with dot notation, got back an object from response 
//     let berries = res.results 
//     for (let i = 0; i < berries.length; i++) {
//         console.log(berries[i]) //console logging 
//         let li = document.createElement('li') // create new element for each variable we are looping through
//         li.innerText = berries[i].name
//         ul.appendChild(li)
//     }
// })




// const url4 = "https://swapi.co/api/starships/" //setting equal to URL that access berries
// // const ul = document.querySelector('ul') //create variable for UL on html page

// fetch(url2) //to make request to get all data from specified URL
// .then(res => res.json()) //convwrting response to JSON
// .then(res => {
//     console.log(res.results) //accsessing results with dot notation, got back an object from response 
//     let berries = res.results 
//     for (let i = 0; i < berries.length; i++) {
//         console.log(berries[i]) //console logging 
//         let li = document.createElement('li') // create new element for each variable we are looping through
//         li.innerText = berries[i].name
//         ul.appendChild(li)
//     }
// })





// const url5 = "https://swapi.co/api/vehicles/" //setting equal to URL that access berries
// // const ul = document.querySelector('ul') //create variable for UL on html page

// fetch(url2) //to make request to get all data from specified URL
// .then(res => res.json()) //convwrting response to JSON
// .then(res => {
//     console.log(res.results) //accsessing results with dot notation, got back an object from response 
//     let berries = res.results 
//     for (let i = 0; i < berries.length; i++) {
//         console.log(berries[i]) //console logging 
//         let li = document.createElement('li') // create new element for each variable we are looping through
//         li.innerText = berries[i].name
//         ul.appendChild(li)
//     }
// })