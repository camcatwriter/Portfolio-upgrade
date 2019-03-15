console.log("Hello world")
// import { people } from './people.js'
import { people } from './people.js'

const intro = document.querySelector('.intro')

people.sort((a,b) => (parseInt(a.height) > parseInt(b.height)) ? 1 : -1 )

people.forEach(person => {
let tile = document.createElement('div')

let name = document.createElement('h2')
tile.appendChild(name)
name.textContent = "Name: " + person.name

console.log(person.name)

let height = document.createElement('div')
tile.appendChild(height)
height.textContent = "Height: " + person.height

intro.appendChild(tile)
})