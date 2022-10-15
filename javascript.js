let containers = document.querySelector("#container_main");
let gridSize = 16;
let size = squareSize();

function gridGenerate(gridSize, newSquareSize) {
  // removes all the collums line
  while (containers.firstChild) {
    containers.removeChild(containers.lastChild);
  }
  // create the columns  inside the main container
  for (i = 0; i < gridSize; i++) {
    const subContainers = document.createElement("div");
    subContainers.id = "container" + i;
    subContainers.classList.add("sizing");
    containers.appendChild(subContainers);
    let container = document.querySelector(`#container${i}`);
    // fill the columns with the containers
    for (let a = 0; a < gridSize; a++) {
      div = document.createElement("div");
      div.classList.add("divsBorder");
      // changes the size of the containers
      div.style.width = newSquareSize + "px";
      div.style.height = newSquareSize + "px";
      container.appendChild(div);
    }
  }
  // adds the eventlistener to change the colors of the containers
  const divhover = document.querySelectorAll(".divsBorder");
  divhover.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("colored");
    });
  });
}
// Calculates the square sizes by using the maincontainerWith
function squareSize() {
  const mainContainerWidth = containers.offsetWidth;
  const containerBorderWidth = 1;
  let containerWidth =
    (mainContainerWidth - containerBorderWidth * gridSize * 2) / gridSize;
  return containerWidth;
}
//calls the gridGenerate function which generates the div
gridGenerate(gridSize, size);
// Button removes the previous eventlistener that was added to change the colors to "clear the grid back to white"
const btn = document.querySelector("#clear");
btn.addEventListener("click", () => {
  const divhover = document.querySelectorAll(".divsBorder");
  divhover.forEach((div) => {
    div.classList.remove("colored");
  });
});
// Slider thats lets user select the value of the grid (min :16 max : 100)
let slider = document.getElementById('myRange');
slider.oninput = function(){
  gridSize = slider.value
  let newSquareSize = squareSize();
  gridGenerate(gridSize, newSquareSize);
}

