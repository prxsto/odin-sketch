const gridContainer = document.querySelector("#grid-container");
const newGridButton = document.querySelector("#new-grid-button");

// default values
let gridContainerSize = 960;
let pixelNum = 256;
let pixelSize = "60px";

gridContainer.style.width = gridContainerSize + "px";
gridContainer.style.height = gridContainerSize + "px";

newGridButton.addEventListener("click", (_event) => {
  let newGridSize = Number(prompt("what size grid?", 16));
  newGridSize = Math.min(newGridSize, 100);

  // destroy current grid, rebuilt using newNumPixels
  let newPixelNum = newGridSize ** 2;
  let newPixelSize = Number(gridContainerSize) / newGridSize;
  newPixelSize = `${newPixelSize}px`;
  // console.log(`gridContainer: ${gridContainer.style.width}, ${gridContainer.style.height}`);
  console.log(`newPixelSize: ${newPixelSize}`);
  console.log(`newPixelNum: ${newPixelNum}`);
  gridContainer.replaceChildren();
  createPixelGrid(newPixelNum, newPixelSize);
})

function createPixelGrid(numPixels, pixelSize, debug = true) {
  for (let i = 0; i < numPixels; i++) {
    let pixel = document.createElement("div");
    if (debug) {
      let para = document.createElement("p");
      para.style.textAlign = "center";
      para.style.fontSize = "2px";
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

createPixelGrid(pixelNum, pixelSize);
