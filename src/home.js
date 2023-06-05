function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const homeImage = document.createElement("img");
  homeImage.src = "images/homecat.png";
  homeImage.alt = "Chef Cat";

  home.appendChild(createParagraph("Gourmet Cat Cafe"));
  home.appendChild(createParagraph("With 9 lives, its time to live well."));
  home.appendChild(homeImage);
  home.appendChild(createParagraph("We are cat owned and PURRRoud!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.createElement("div");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
