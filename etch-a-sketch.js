
const mainDiv = document.querySelector('.main');
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