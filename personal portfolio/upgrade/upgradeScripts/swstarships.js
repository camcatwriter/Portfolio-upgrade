import { starships } from './starships.js'

const intro = document.querySelector('.intro')


starships.sort(function (a,b) {
    console.log(a.length,b.length)
    if (a.length == "unknown") {
        console.log("a statement")
        return -1;
    }
    if (b.length == "unknown") {
        console.log("b statement")
        return 1;
    }
    if (parseFloat(a.length, 10) > parseFloat(b.length, 10)) {
        return 1;
    }
    else {
        return -1;
    }
} )

// starships.sort((a,b) => (parseFloat(a.length, 10) > parseFloat(b.length, 10)) ? 1 : -1 )

// function sortStarships(a, b) {
//     return a.length > b.length ? -1 : b.length > a.length ? 1 : 0;
//   }

starships.forEach(starship => {
let tile = document.createElement('div')

let name = document.createElement('h2')
name.className = 'box'
tile.appendChild(name)
name.textContent = "Name: " + starship.name

let length = document.createElement('div')
length.className = 'box'
tile.appendChild(length)
length.textContent = "Length: " + starship.length

let starship_class = document.createElement('div')
starship_class.className = 'box'
tile.appendChild(starship_class)
starship_class.textContent = "Class: " + starship.starship_class


intro.appendChild(tile)
})
