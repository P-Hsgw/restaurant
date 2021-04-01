const content = document.getElementById("content");

function createHero() {
  const showcase = document.createElement("header");

  showcase.setAttribute("id", "showcase");

  function createHeroContent() {
    const welcome = document.createElement("h1");
    const description = document.createElement("p");
    const button = document.createElement("a");
    welcome.innerHTML = "Welcome to The Restaurant";
    description.innerHTML = "Our resteraunt serves the best, luxurious food";
    button.href = "#";
    button.classList.add("button");
    button.innerHTML = "Menu";
    showcase.appendChild(welcome);
    showcase.appendChild(description);
    showcase.appendChild(button);
  }
  createHeroContent();
  content.appendChild(showcase);
}

function createSection() {
  const sectionA = document.createElement("section");
  const paragraphA = document.createElement("p");
  sectionA.setAttribute("id", "section_a");
  paragraphA.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem eum fugiat iusto repellendus! Distinctio porro tempora blanditiis ut suscipit cupiditate consectetur quam deserunt molestias corrupti odio debitis voluptas enim minima, officiis possimus. Excepturi quia aliquam enim, id tempora iste, laudantium quidem magni perferendis nihil accusamus molestiae voluptatem fugiat esse quod libero? Temporibus sed possimus ipsam eligendi laborum repellendus, ullam rerum alias ad, sit blanditiis maiores repudiandae quidem repellat facere, ut laudantium? Illo sed ipsa obcaecati id veniam repudiandae facilis voluptate nulla. Facilis quos id impedit vero iure cum repellendus quam excepturi! Tempore perspiciatis doloribus, iste cum incidunt sequi delectus.";
  sectionA.appendChild(paragraphA);

  const sectionC = document.createElement("section");
  sectionC.setAttribute("id", "section_c");

  function createBox(id) {
    const box = document.createElement("div");
    box.classList.add(`box-${id}`);
    content.appendChild(box);
    return box;
  }

  content.appendChild(sectionA);
  content.appendChild(sectionC);

  const boxOne = createBox("1");
  const boxTwo = createBox("2");
  const boxThree = createBox("3");
  sectionC.appendChild(boxOne);
  sectionC.appendChild(boxTwo);
  sectionC.appendChild(boxThree);
}

export { createHero, createSection };
