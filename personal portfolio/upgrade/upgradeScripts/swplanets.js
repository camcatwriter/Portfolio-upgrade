import { planets } from 'planets.js'

const deckL = document.querySelector('.deckL')

planets.sort((a,b) => (a.diameter > b.diameter) ? 1 : -1 )

planets.forEach(planet => {
let tile = document.createElement('div')

let name = document.createElement('h2')
tile.appendChild(name)
name.textContent = planet.name

let terrain = document.createElement('div')
tile.appendChild(terrain)
terrain.textContent = planet.terrain

})
