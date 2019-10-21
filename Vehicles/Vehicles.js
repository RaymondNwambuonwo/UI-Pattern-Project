const urlVehicles = "https://swapi.co/api/vehicles/" 
const grabVehicles = document.querySelector('.Vehicles') 

    fetch(urlVehicles)
            .then(res => res.json()) //this is bringing in the data and converting it to Json data
            .then(res => {       //this  is using an arrow function to console log the results.
                console.log(res.results) //results is what is holding the information 
                res.results.forEach(indices => { //indicies is just the name of the vaiable, but this for each loop is stated here basically stating for each indice
                    let newP2 = document.createElement("p") // create new paragraph for each indice as it loops through
                    //console.log(newP2)
                    let newContent = document.createTextNode(indices.name) // this creates a new variable that is equal to creating a text node, indicies is the array and .title is gonna give me the title of each film
                    //console.log(newContent)
                    newP2.appendChild(newContent); //then in order to add this information I append it.
                    console.log(newP2)
                    grabVehicles.appendChild(newP2) // then i append it to the tag/div i set
                    //console.log(indices.title)
                    // let p3 = document.createElement("p") // here I am doing the same thing as above but creating a new paragraph
                    // let birthYear = document.createTextNode(indices.birth_year)
                    // p3.appendChild(birthYear);
                    // grabStarships.appendChild(p3)
                    // have it create a p tag
                    // set the value of each p tag to the value of the array you want 
                });
  
            })
            .catch(err => {
                    console.log("something went wrong...", err)
        })