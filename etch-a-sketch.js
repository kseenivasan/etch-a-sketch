
const mainDiv = document.querySelector('.main');
const buttonContainer = document.createElement('div');
const button = document.createElement('button');
button.textContent = 'Select Size';
buttonContainer.style.display = 'flex';
buttonContainer.style.flex = '1';
buttonContainer.appendChild(button);
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';
mainDiv.appendChild(buttonContainer);
for (let i = 0; i < 16; i++) {
    let flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.style.width = '60px';
        div.style.height = '60px';
        div.style.flex = '1 1 auto';
        div.classList.add("grid");
        flexContainer.appendChild(div);
    }
    mainDiv.appendChild(flexContainer);
}

const grids = document.querySelectorAll(".grid");

grids.forEach( (grid) => grid.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'yellow';
    console.log("Hovered");
}));