import { planets } from './planets.js'

const intro = document.querySelector('.intro')

//sort planets by diameter
planets.sort((a,b) => (parseInt(a.diameter) > parseInt(b.diameter)) ? 1 : -1 )

//make tiles for planet info
planets.forEach(planet => {
let tile = document.createElement('div')
tile.className = 'container'


let name = document.createElement('h2')
name.className = 'box'
tile.appendChild(name)
name.textContent = "Name: " + planet.name

let diameter = document.createElement('h2')
diameter.className = 'box'
tile.appendChild(diameter)
diameter.textContent = "Diameter: " + planet.diameter

console.log(planet.name);

let terrain = document.createElement('h2')
terrain.className = 'box'
tile.appendChild(terrain)
terrain.textContent = "Terrain: " + planet.terrain

intro.appendChild(tile)
})


