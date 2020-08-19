function generateElement(element) {
  let newElement = document.createElement(element.type);

  for (let property in element) {
    if (property === "text") {
      newElement.textContent = element[property];
    } else if (property !== "type" && property !== "children") {
      newElement.setAttribute(property, element[property]);
    } else if (property === "children") {
      element[property].forEach((children) => {
        newElement.appendChild(generateElement(children));
      });
    }
  }

  return newElement;
}

let contact = generateElement({
  type: "div",
  class: "contact",
  children: [
    { type: "p", class: ["header"], text: "Get in Touch" },
    {
      type: "p",
      class: "sub",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
    },
    {
      type: "div",
      class: "icons",
      children: [
        {
          type: "a",
          href: "https://www.facebook.com/",
          children: [{ type: "i", class: "fab fa-facebook-square" }],
        },
        {
          type: "a",
          href: "https://www.instagram.com/",
          children: [{ type: "i", class: "fab fa-instagram" }],
        },
        {
          type: "a",
          href: "https://www.twitter.com/",
          children: [{ type: "a", class: "fab fa-twitter" }],
        },
      ],
    },
  ],
});

export default contact;
