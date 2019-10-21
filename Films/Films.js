const urlFilms = "https://swapi.co/api/films"
const grabFilmDivTag = document.querySelector('.filmInfo') 

    fetch(urlFilms)
            .then(res => res.json()) //this is bringing in the data and converting it to Json data
            .then(res => {       //this  is using an arrow function to console log the results.
                console.log(res.results) //results is what is holding the information 
                res.results.forEach(indices => { //indicies is just the name of the vaiable, but this for each loop is stated here basically stating for each indice
                    let newP2 = document.createElement("p") // create new paragraph for each indice as it loops through
                    //console.log(newP2)
                    let newContent = document.createTextNode(indices.title) // this creates a new variable that is equal to creating a text node, indicies is the array and .title is gonna give me the title of each film
                    //console.log(newContent)
                    newP2.appendChild(newContent); //then in order to add this information I append it.
                    console.log(newP2)
                    grabFilmDivTag.appendChild(newP2) // then i append it to the tag/div i set
                    //console.log(indices.title)
                    let p3 = document.createElement("p") // here I am doing the same thing as above but creating a new paragraph
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