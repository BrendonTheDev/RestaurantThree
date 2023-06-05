function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 333 444 1234";

  const address = document.createElement("p");
  address.textContent = "🏠333 Meow Street, Boulder CO, USA";

  const contactImg = document.createElement("img");
  contactImg.src = "images/picture-of-cat-cafe.png";
  contactImg.alt = "Picture of the restaurant";

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
