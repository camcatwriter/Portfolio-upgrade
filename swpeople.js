import { people } from './people.js'

const intro = document.querySelector('.intro')

//sorting people by height
people.sort((a,b) => (parseInt(a.height) > parseInt(b.height)) ? 1 : -1 )

//making tiles for people
people.forEach(person => {
let tile = document.createElement('div')
tile.className = ("container")

let name = document.createElement('h2')
name.className = 'box'
tile.appendChild(name)
name.textContent = "Name: " + person.name

console.log(person.name)

let height = document.createElement('div')
height.className = 'box'
tile.appendChild(height)
height.textContent = "Height: " + person.height

let mass = document.createElement('h2')
mass.className = 'box'
tile.appendChild(mass)
mass.textContent = "Mass: " + person.mass

intro.appendChild(tile)
})
