const urlFilms = "https://swapi.co/api/films"
const grabFilmDivTag = document.querySelector('.filmInfo') 

    fetch(urlFilms)
            .then(res => res.json())
            .then(res => {
                console.log(res.results)
                res.results.forEach(indices => {
                    let newP2 = document.createElement("p")
                    //console.log(newP2)
                    let newContent = document.createTextNode(indices.title)
                    //console.log(newContent)
                    newP2.appendChild(newContent);
                    console.log(newP2)
                    grabFilmDivTag.appendChild(newP2)
                    //console.log(indices.title)
                    let p3 = document.createElement("p")
                    let crawl = document.createTextNode(indices.opening_crawl)
                    p3.appendChild(crawl);
                    grabFilmDivTag.appendChild(p3)
                    // have it create a p tag
                    // set the value of each p tag to the value of the array you want 
                });
  
            })
            .catch(err => {
                    console.log("something went wrong...", err)
        })

// Have information list out in paragraph 
// create paragraph tag fter nav closed tag
// create class for paragraph tag with name "filmInfo"
// create querySelector for pragraph tag
// Call query selector within my fetch url
// Have it list results/Set the value



// console.log(res.results)
// const filmList = res.results.map(film => film.opening_crawl) this is using an arrow function to where we estabilsh a variable of filmList(name not important) with res.results giving us the results of the array and then .map is used to go over (map the array) the array, essentially retrieving the information from the array 
// console.log(filmList)
// const titleList = res.results.map(title => title.title)
// console.log(titleList)
    //console.log("logging res.results" + " " + res.results) // display name of Film
    //console.log(res)
    //console.log(res.results[0].characters[2]) // results is an array, holds indicies which are the films, [0] is the first indicie in the array, to get more specific you can put .characters then index [] to get character from that indice
    //console.log(res.results[0].director)
    //let films = res[0].opening_crawl
    //console.log("logging film var" + " " + films) 