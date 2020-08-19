//<nav></nav>
const nav = document.createElement("nav");
document.body.insertBefore(nav, document.body.firstChild);

//<div class="brand"></div>
const brand = document.createElement("div");
brand.classList.add("brand");
nav.appendChild(brand);

//<p>Restaurant</>
const nameBrand = document.createElement("p");
nameBrand.textContent = "Restaurant";

brand.appendChild(nameBrand);

//<div class='links'></div>
const links = document.createElement("div");
links.classList.add("links");
nav.appendChild(links);

//<div>HOME</div>
const home = document.createElement("div");
home.textContent = "HOME";
links.appendChild(home);

//<div>MENU</div>
const menu = document.createElement("div");
menu.textContent = "MENU";
links.appendChild(menu);

//<div>CONTACT</div>
const contact = document.createElement("div");
contact.textContent = "CONTACT";
links.appendChild(contact);

const sections = [home, menu, contact];

sections.forEach((span) => {
  span.addEventListener("mouseenter", (event) => {
    event.target.classList.remove("linkLeaveMouse");
    event.target.classList.add("linkEnterMouse");
  });
  span.addEventListener("mouseleave", (event) => {
    event.target.classList.remove("linkEnterMouse");
    event.target.classList.add("linkLeaveMouse");
  });
  span.addEventListener("click", (event) => {
    sections.forEach((span) => {
      if(event.target === span){
        span.classList.add("linkClicked");
      } else {
        span.classList.remove("linkClicked");
      }
    })
  })
});

export { home, menu, contact };