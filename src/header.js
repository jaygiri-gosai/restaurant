import "./assets/css/header.css";
import { loadHero } from "./hero";
import { loadAbout } from "./about";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

const loadHeader = () => {
  let headerDOM = document.createElement("header");
  headerDOM.className = "header-container";

  let nav = document.createElement("nav");
  nav.className = "button-container";

  let homeButton = document.createElement("button");
  homeButton.innerText = "Home";
  homeButton.addEventListener("click", () => {
    clearContent();
    loadHero();
  });

  let menuButton = document.createElement("button");
  menuButton.innerText = "Menu";
  menuButton.addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  let aboutButton = document.createElement("button");
  aboutButton.innerText = "About";
  aboutButton.addEventListener("click", () => {
    clearContent();
    loadAbout();
  });

  let contactButton = document.createElement("button");
  contactButton.innerText = "Contact Us";
  contactButton.addEventListener("click", () => {
    clearContent();
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(aboutButton);
  nav.appendChild(contactButton);

  headerDOM.appendChild(nav);

  document.body.appendChild(headerDOM);
};

const clearContent = () => {
  const content = document.getElementById("content");
  if (content) content.innerHTML = "";
};

export { loadHeader };
