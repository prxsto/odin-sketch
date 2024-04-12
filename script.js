const gridContainer = document.querySelector("#grid-container");
const newGridButton = document.querySelector("#new-grid-button");

// default values
let gridContainerSize = "960px";
let pixelSize = "60px";
let numPixels = 256;

gridContainer.style.width = gridContainerSize;
gridContainer.style.height = gridContainerSize;

newGridButton.addEventListener("click", (event) => {
  newGridSize = prompt("what size grid?", 60);
  newGridSize = math.min(Number(newGridSize), 100);

  // destroy current grid, rebuilt using newNumPixels
  newPixelSize = gridContainer.style.width / newGridSize;
  newPixelNum = newGridSize * newGridSize;
  gridContainer.replaceChildren();
  createPixelGrid(newPixelNum, newPixelSize, false);
}) 

function createPixelGrid(numPixels, pixelSize, debug = true) {
  for (let i = 0; i < numPixels; i++) {
    let pixel = document.createElement("div");
    if (debug) {
      let para = document.createElement("p");
      para.style.textAlign = "center";
      para.textContent = i + 1;
      pixel.appendChild(para);
    }
    pixel.className = "pixel";
    pixel.style.width = pixelSize;
    pixel.style.height = pixelSize;
    pixel.addEventListener("mouseover", (_event) => {
      pixel.className = "pixel hovered";
    });
    gridContainer.appendChild(pixel);
  }
}

createPixelGrid(numPixels, pixelSize);