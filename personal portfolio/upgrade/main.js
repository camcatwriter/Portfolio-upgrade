import { films } from './films.js'

let titleElement = document.querySelector('.title')
let crawlElement = document.querySelector('.crawl')

titleElement.textContent = films[0].title
crawlElement.textContent = films[0].opening_crawl
