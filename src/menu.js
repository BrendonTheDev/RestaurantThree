export function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Tuna Sandwich",
      "Tuna and bread, garnished with fresh catnip."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Hair Ball",
      "Too much grooming? Feel free to hack up a hairball on our custom cat plates."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Wet Catfood",
      "Opened via the finest electric can opener, this chicken flavored paste is sure to satisfy your senses."
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("div");
  foodName.textContent = name;

  const foodDescription = document.createElement("h2");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/items/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menu.appendChild(foodName);
  menu.appendChild(foodDescription);
  menu.appendChild(foodImage);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
