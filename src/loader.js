import loadHome from './home';
import menu from "./menu"



function initializeSite() {
  const content = document.getElementById("content")
  

  

  loadHome()

  const menu_button = document.getElementById("menu_btn")

  menu_button.addEventListener("click", ()=> {
    const showcase = document.getElementById("showcase")
    const h1 = document.querySelector("h1")
    const p = document.querySelector("p")
    const a = document.querySelector("a")

    h1.style.display = "none"
    p.style.display = "none"
    a.style.display = "none"
    showcase.appendChild(menu())
  })


}


export default initializeSite;