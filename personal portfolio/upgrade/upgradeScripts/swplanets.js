console.log("Hello world");
// import { films } from '../data lists/films.js'
import { planets } from './planets.js'

const intro = document.querySelector('.intro')




planets.sort((a,b) => (parseInt(a.diameter) > parseInt(b.diameter)) ? 1 : -1 )

planets.forEach(planet => {
let tile = document.createElement('div')

let name = document.createElement('h2')
tile.appendChild(name)
name.textContent = planet.name

console.log(planet.name);

// let terrain = document.createElement('div')
// tile.appendChild(terrain)
// terrain.textContent = planet.terrain

intro.appendChild(tile)
})


