import { starships } from './starships.js'

const intro = document.querySelector('.intro')

//sorting starships via length
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

//making tiles with bulma box
starships.forEach(starship => {
let tile = document.createElement('div')
tile.className = 'container'


let name = document.createElement('h2')
name.className = 'box'
tile.appendChild(name)
name.textContent = "Name: " + starship.name

let length = document.createElement('h2')
length.className = 'box'
tile.appendChild(length)
length.textContent = "Length: " + starship.length

let starship_class = document.createElement('h2')
starship_class.className = 'box'
tile.appendChild(starship_class)
starship_class.textContent = "Class: " + starship.starship_class



intro.appendChild(tile)
})
