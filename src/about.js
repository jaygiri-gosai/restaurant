import "./assets/css/about.css";
const loadAbout = () => {
  const targetElement = document.getElementById("about");
  if (!targetElement) {
    const aboutContent = document.createElement("div");
    aboutContent.id = "about";

    let aboutTitle = document.createElement("h1");
    aboutTitle.innerText = "Welcome to Flavor Haven!";

    let aboutPara = document.createElement("p");
    aboutPara.innerText = `We are a cozy neighborhood restaurant dedicated to serving fresh, delicious meals made with care. Our menu is inspired by classic home-style cooking, crafted with simple ingredients and bold flavors.`;

    aboutContent.appendChild(aboutTitle);
    aboutContent.appendChild(aboutPara);

    let storySection = document.createElement("section");
    let storyH2 = document.createElement("h2");
    storyH2.innerText = "Our Story";
    let storyPara = document.createElement("p");
    storyPara.innerText = `Flavor Haven started as a small passion project by food lovers who wanted to create a place where anyone could enjoy warm, comforting dishes. Over time, our commitment to quality and friendly service has helped us become a favorite spot for families, friends, and food enthusiasts.`;

    storySection.appendChild(storyH2);
    storySection.appendChild(storyPara);
    aboutContent.appendChild(storySection);

    let philSection = document.createElement("section");
    let philyH2 = document.createElement("h2");
    philyH2.innerText = "Our Philosophy";
    let philPara = document.createElement("p");
    philPara.innerText = `We believe great food doesn’t need to be complicated. Every dish is prepared fresh, using thoughtfully sourced ingredients and recipes passed down through generations. We focus on taste, consistency, and a relaxed dining experience.`;

    philSection.appendChild(philyH2);
    philSection.appendChild(philPara);
    aboutContent.appendChild(philSection);

    let offerSection = document.createElement("section");
    let offerH2 = document.createElement("h2");
    offerH2.innerText = "What We Offer";
    let offerUL = document.createElement("ul");

    let offerLI1 = document.createElement("li");
    offerLI1.innerText = "Signature dishes full of flavor";

    let offerLI2 = document.createElement("li");
    offerLI2.innerText = "A calm and welcoming atmosphere";

    let offerLI3 = document.createElement("li");
    offerLI3.innerText = "Friendly staff";

    let offerLI4 = document.createElement("li");
    offerLI4.innerText = "Fresh ingredients and hygienic preparation";

    let offerLI5 = document.createElement("li");
    offerLI5.innerText = "A menu suitable for all ages";

    offerUL.appendChild(offerLI1);
    offerUL.appendChild(offerLI2);
    offerUL.appendChild(offerLI3);
    offerUL.appendChild(offerLI4);
    offerUL.appendChild(offerLI5);
    offerSection.appendChild(offerH2);
    offerSection.appendChild(offerUL);
    aboutContent.appendChild(offerSection);

    let visitSection = document.createElement("section");
    let visitH2 = document.createElement("h2");
    visitH2.innerText = "Thank You for Visiting";
    let visitPara = document.createElement("p");
    visitPara.innerText = `Whether you're here for a quick bite or a leisurely meal, we’re happy to have you. Sit back, relax, and enjoy the flavors!`;

    visitSection.appendChild(visitH2);
    visitSection.appendChild(visitPara);
    aboutContent.appendChild(visitSection);

    document.getElementById("content").appendChild(aboutContent);
    aboutContent.scrollIntoView({
      behavior: "smooth", // Smooth scrolling animation
      block: "start", // Align the top of the element with the top of the viewport
      inline: "nearest", // Align the element horizontally within the viewport
    });
  }
};

export { loadAbout };
