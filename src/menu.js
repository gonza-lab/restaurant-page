let menus = {
  "STARTERS": ["Tortilla Española", "Olivas Rellenas", "Gambas al Ajillo"],
  "MAIN COURSES": ["Pollo al horno", "Lasagne", "Lenguado", "Bacalao Frito"],
  "DESSERTS": ["Banana Split", "Strawberry Heaven", "Cookie Delight", "Choco Budoir"],
}

const menu = document.createElement("div");
menu.classList.add("menu");

for(const menuProp in menus){
  const section = document.createElement("div");
  section.classList.add("section");

  const title = document.createElement("p");
  title.textContent = menuProp;
  section.appendChild(title);

  const ul = document.createElement("ul");

  menus[menuProp].forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    ul.appendChild(li);
  });


  section.appendChild(ul);
  menu.appendChild(section)
}

export default menu;


