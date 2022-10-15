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
      div.classList.add("test");
      // changes the size of the containers
      div.style.width = newSquareSize + "px";
      div.style.height = newSquareSize + "px";
      container.appendChild(div);
    }
  }
  // adds the eventlistener to change the colors of the containers
  const divhover = document.querySelectorAll(".test");
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
  const divhover = document.querySelectorAll(".test");
  divhover.forEach((div) => {
    div.classList.remove("colored");
  });
});
// Button thats shows a prompt where you can select the amount of grids you want and sets the max to 100
const btn1 = document.querySelector("#gridsSize");
btn1.addEventListener("click", () => {
  gridSize = prompt("write the grid size (max 100)");
  if(gridSize > 100){
    alert("Grid size max is 100")
  }
  else{
  let newSquareSize = squareSize();
  gridGenerate(gridSize, newSquareSize);
}
});
