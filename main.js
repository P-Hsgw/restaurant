(()=>{"use strict";const e=document.getElementById("content");document.getElementById("content"),e.appendChild(function(){const e=document.createElement("header");return e.setAttribute("id","showcase"),function(){const t=document.createElement("h1"),i=document.createElement("p"),n=document.createElement("a");t.innerHTML="Welcome to The Restaurant",i.innerHTML="Our resteraunt serves the best, luxurious food",n.classList.add("button"),n.setAttribute("id","menu_btn"),n.innerHTML="Menu",e.appendChild(t),e.appendChild(i),e.appendChild(n)}(),e}()),function(){const t=document.createElement("section"),i=document.createElement("p");t.setAttribute("id","section_a"),i.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem eum fugiat iusto repellendus! Distinctio porro tempora blanditiis ut suscipit cupiditate consectetur quam deserunt molestias corrupti odio debitis voluptas enim minima, officiis possimus. Excepturi quia aliquam enim, id tempora iste, laudantium quidem magni perferendis nihil accusamus molestiae voluptatem fugiat esse quod libero? Temporibus sed possimus ipsam eligendi laborum repellendus, ullam rerum alias ad, sit blanditiis maiores repudiandae quidem repellat facere, ut laudantium? Illo sed ipsa obcaecati id veniam repudiandae facilis voluptate nulla. Facilis quos id impedit vero iure cum repellendus quam excepturi! Tempore perspiciatis doloribus, iste cum incidunt sequi delectus.",t.appendChild(i);const n=document.createElement("section");function u(t){const i=document.createElement("div");return i.classList.add(`box-${t}`),e.appendChild(i),i}n.setAttribute("id","section_c"),e.appendChild(t),e.appendChild(n);const a=u("1"),s=u("2"),o=u("3");n.appendChild(a),n.appendChild(s),n.appendChild(o)}(),document.getElementById("menu_btn").addEventListener("click",(()=>{const e=document.getElementById("showcase"),t=document.querySelector("h1"),i=document.querySelector("p"),n=document.querySelector("a");e.removeChild(t),e.removeChild(i),e.removeChild(n),e.appendChild(function(){const e=document.createElement("div");function t(t,i,n){const u=document.createElement("div");u.setAttribute("id",t),u.classList.add("menu_box"),u.appendChild(i),u.appendChild(n),e.appendChild(u)}function i(e,t="tit"){const i=document.createElement("h2");return i.setAttribute("id",t),i.innerHTML=e,i}function n(e,t="cont"){const i=document.createElement("p");return i.setAttribute("id",t),i.innerHTML=e,i}return e.classList.add("menu"),t(1,i("Pizza"),n("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?")),t(2,i("Pasta"),n("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?")),t(3,i("Lasagne"),n("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?")),t(4,i("Pierogi"),n("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?")),t(5,i("Zapiekanki"),n("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?")),t(5,i("Zapiekanki"),n("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?")),t(5,i("Zapiekanki"),n("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus voluptatum aut. Eaque, praesentium labore?")),e}())}))})();