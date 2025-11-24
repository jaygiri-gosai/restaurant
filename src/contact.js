import "./assets/css/contact.css";
const loadContact = () => {
  const targetElement = document.getElementById("contact");
  if (!targetElement) {
    const contactContent = document.createElement("div");
    contactContent.id = "contact";

    let contactTitle = document.createElement("h1");
    contactTitle.innerText = "Contact Us";
    contactContent.appendChild(contactTitle);

    let contactDiv = document.createElement("div");
    contactDiv.id = "info";
    let infoTitle = document.createElement("h2");
    infoTitle.innerText = "Phone";
    contactDiv.appendChild(infoTitle);
    let infoPhone = document.createElement("p");
    infoPhone.innerText = "+1 (555) 123-4567";
    contactDiv.appendChild(infoPhone);
    contactContent.appendChild(contactDiv);

    let addressDiv = document.createElement("div");
    addressDiv.id = "address";
    let addressTitle = document.createElement("h2");
    addressTitle.innerText = "Address";
    addressDiv.appendChild(addressTitle);
    let addressP = document.createElement("p");
    addressP.innerText = `Flavor Haven Restaurant
        123 Cozy Lane
        Springfield, ST 00000`;
    addressDiv.appendChild(addressP);
    contactContent.appendChild(addressDiv);

    document.getElementById("content").appendChild(contactContent);
  }
};

export { loadContact };
