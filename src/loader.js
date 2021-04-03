import loadHome from './home';
import menu from "./menu"



function initializeSite() {
  const content = document.getElementById("content")
  

  

  loadHome()

  const button = document.getElementById("menu_btn")

  button.addEventListener("click", ()=> {
    const showcase = document.getElementById("showcase")
    const h1 = document.querySelector("h1")
    const p = document.querySelector("p")
    const a = document.querySelector("a")
    showcase.removeChild(h1);
    showcase.removeChild(p);
    showcase.removeChild(a);

    content.appendChild(menu())
    
  })
}


export default initializeSite;