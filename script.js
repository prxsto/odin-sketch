const gridContainer = document.querySelector('#grid-container');
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

for (let i = 0; i < 256; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = vw / 16;
    pixel.style.height = vh / 16;
    gridContainer.appendChild(pixel);
}


console.log(gridContainer.children);
console.log(vw / 16, vh / 16);