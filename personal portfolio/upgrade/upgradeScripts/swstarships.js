import { starships } from './starships.js'

const intro = document.querySelector('.intro')



starships.sort((a,b) => (parseFloat(a.length, 10) > parseFloat(b.length, 10)) ? 1 : -1 )

// function sortStarships(a, b) {
//     return a.length > b.length ? -1 : b.length > a.length ? 1 : 0;
//   }

starships.forEach(starship => {
let tile = document.createElement('div')

let name = document.createElement('h2')
tile.appendChild(name)
name.textContent = "Name: " + starship.name

let length = document.createElement('div')
tile.appendChild(length)
length.textContent = "Length: " + starship.length

intro.appendChild(tile)
})
