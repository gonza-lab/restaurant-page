const home = document.createElement("div");
home.classList.add("home");

const welcome = document.createElement("div");
welcome.classList.add("welcome");
welcome.textContent = "Welcome to";

const name = document.createElement("div");
name.classList.add("name");
name.textContent = "Restaurant";

const info = document.createElement("div");
info.classList.add("info");
info.textContent = "Direction 1234 | (+54) 1234-5678"

home.appendChild(welcome);
home.appendChild(name);
home.appendChild(info);

export default home;