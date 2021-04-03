function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu")

  function createDiv(id, title, paragraph) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", id);
    newDiv.classList.add("menu_box")

    newDiv.appendChild(title);
    newDiv.appendChild(paragraph);

    menu.appendChild(newDiv)

  }

  function createTitle(content, id="tit") {
    const newTitle = document.createElement("h2");
    newTitle.setAttribute("id", id);

    newTitle.innerHTML = content;

    return newTitle;
  }

  function createContent(content, id="cont") {
    const newContent = document.createElement("p");
    newContent.setAttribute("id", id);

    newContent.innerHTML = content;

    return newContent;
  }

  createDiv(1, createTitle("Pizza"), createContent("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?"));
  createDiv(2, createTitle("Pasta"), createContent("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?"));
  createDiv(3, createTitle("Lasagne"), createContent("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?"));
  createDiv(4, createTitle("Pierogi"), createContent("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?"));
  createDiv(5, createTitle("Zapiekanki"), createContent("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?"));


  return menu;

}

export default createMenu;
