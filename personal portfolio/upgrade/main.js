import { films } from './films.js'
import { people } from './people.js'

const intro = document.querySelector('.intro')

films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1 )

films.forEach( (film) => {
let tile = document.createElement('div')

let titleElement = document.createElement('h1')
tile.appendChild(titleElement)
titleElement.textContent = film.title

let crawlElement = document.createElement('h3')
tile.appendChild(crawlElement)
crawlElement.textContent = film.opening_crawl

let lineBreak = document.createElement('hr')
})



const female = people.filter(person => person.gender === "female");
const male = people.filter(person => person.gender === "male");
const other = people.filter(person => person.gender === "n/a");
const none = people.filter(person => person.gender === "none");
const hermaphrodite = people.filter(person => person.gender === "hermaphrodite");
