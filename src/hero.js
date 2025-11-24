import "./assets/css/hero.css";

const loadHero = () => {
  const content = document.getElementById("content");

  const heroContent = document.createElement("div");
  heroContent.id = "hero";

  let title = document.createElement("h1");
  title.innerText = `Welcome to the Flavor Haven`;
  title.className = "title";
  heroContent.appendChild(title);

  content.appendChild(heroContent);

  document.body.appendChild(content);
};

export { loadHero };
