console.log("Hello world");
// import { films } from '../data lists/films.js'
import { planets } from './planets.js'

const intro = document.querySelector('.intro')




planets.sort((a,b) => (parseInt(a.diameter) > parseInt(b.diameter)) ? 1 : -1 )

planets.forEach(planet => {
let tile = document.createElement('div')

let name = document.createElement('div')
name.className = 'box'
tile.appendChild(name)
name.textContent = "Name: " + planet.name

let diameter = document.createElement('div')
diameter.className = 'box'
tile.appendChild(diameter)
diameter.textContent = "Diameter: " + planet.diameter

console.log(planet.name);

let terrain = document.createElement('div')
terrain.className = 'box'
tile.appendChild(terrain)
terrain.textContent = "Terrain: " + planet.terrain

intro.appendChild(tile)
})


