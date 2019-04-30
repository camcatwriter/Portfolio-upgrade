import { films } from '../data lists/films.js'

const intro = document.querySelector('.intro')

//sort films in order
films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1 )

films.forEach(film => {
let tile = document.createElement('div')

//titles of films created
let titleElement = document.createElement('h2')
tile.appendChild(titleElement)
titleElement.textContent = film.title

//opening crawls on divs with titles
let crawlElement = document.createElement('div')
tile.appendChild(crawlElement)
crawlElement.textContent = film.opening_crawl

intro.appendChild(tile)
})
