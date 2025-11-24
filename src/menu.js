import "./assets/css/menu.css";
const loadMenu = () => {
  const targetElement = document.getElementById("menu");
  if (!targetElement) {
    const menuContent = document.createElement("div");
    menuContent.id = "menu";

    let menuTitle = document.createElement("h1");
    menuTitle.innerText = "Our Menu";
    menuContent.appendChild(menuTitle);

    let starter = document.createElement("div");
    let starterTitle = document.createElement("h2");
    starterTitle.innerText = "Starters";
    starter.appendChild(starterTitle);
    menuContent.appendChild(starter);

    let items = document.createElement("ul");
    let si1 = document.createElement("li");
    si1.innerText = "Garlic Herb Bread";
    items.appendChild(si1);

    let si2 = document.createElement("li");
    si2.innerText = "Crispy Potato Bites";
    items.appendChild(si2);

    let si3 = document.createElement("li");
    si3.innerText = "Classic Tomato Soup";
    items.appendChild(si3);
    starter.appendChild(items);

    let mainCourse = document.createElement("div");
    let courseTitle = document.createElement("h2");
    courseTitle.innerText = "Main Course";
    mainCourse.appendChild(courseTitle);
    menuContent.appendChild(mainCourse);

    let mainItems = document.createElement("ul");
    let mi1 = document.createElement("li");
    mi1.innerText = "Garlic Herb Bread";
    mainItems.appendChild(mi1);

    let mi2 = document.createElement("li");
    mi2.innerText = "Crispy Potato Bites";
    mainItems.appendChild(mi2);

    let mi3 = document.createElement("li");
    mi3.innerText = "Classic Tomato Soup";
    mainItems.appendChild(mi3);
    mainCourse.appendChild(mainItems);

    document.getElementById("content").appendChild(menuContent);
  }
};

export { loadMenu };
