import { starships } from 'starships.js'

const deckS = document.querySelector('.deckS')

starships.sort((a,b) => (a.length > b.length) ? 1 : -1 )

starships.forEach(starship => {
let tile = document.createElement('div')

let name = document.createElement('h2')
tile.appendChild(name)
name.textContent = starship.name

let length = document.createElement('div')
tile.appendChild(length)
length.textContent = starship.length})
