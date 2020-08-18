/* import './style.css' */

const nav = document.querySelector("nav");
const sections = nav.querySelectorAll(".links>div");

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


