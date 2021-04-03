import loadHome from './home';
import menu from "./menu"

function initializeSite() {
  const content = document.getElementById("content")

  content.appendChild(menu())

  loadHome()
}

export default initializeSite;