import "./style.css";
import Food from "./food.jpeg";

export function component() {
  const container = document.getElementById("content");

  // Lodash, now imported via above script
  let header = document.createElement("h1");
  header.textContent = "Deja's Diner";

  let paragraph = document.createElement("p");
  paragraph.textContent =
    "Wow! A diner run by cats that feeds cats! Catlorem Catnipsum.";

  const myImage = new Image();
  myImage.src = Food;

  container.classList.add("hello");

  container.appendChild(header);
  container.appendChild(paragraph);
  container.appendChild(myImage);

  return element;
}
