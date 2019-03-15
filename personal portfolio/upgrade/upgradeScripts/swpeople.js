import { starships } from '.../data lists/people.js'

const deckE = document.querySelector('.deckE')

people.sort((a,b) => (a.mass > b.mass) ? 1 : -1 )

people.forEach(person => {
let tile = document.createElement('div')

let name = document.createElement('h2')
tile.appendChild(name)
name.textContent = person.name

intro.appendChild(tile)
})