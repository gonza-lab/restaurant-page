import './style.css'
import {
  home as homeButton,
  menu as menuButton,
  contact as contactButton,
} from "./nav.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const content = (function () {
  const contentEl = document.querySelector("#content");

  function addElement(element) {
    contentEl.appendChild(element);
  }

  function removeAll() {
    if (contentEl.children[0]) {
      contentEl.removeChild(contentEl.children[0]);
    }
  }

  return { addElement, removeAll };
})();

homeButton.addEventListener("click", (e) => {
  content.removeAll();
  content.addElement(home);
});

menuButton.addEventListener("click", (e) => {
  content.removeAll();
  content.addElement(menu);
});

contactButton.addEventListener("click", (e) => {
  content.removeAll();
  content.addElement(contact);
});

homeButton.click();
