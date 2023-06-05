import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported via above script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
