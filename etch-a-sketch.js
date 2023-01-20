
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


const gridWidth = 760;
function createGrid(gridWidth, numSquares) {
    for (let i = 0; i < numSquares; i++) {
        let flexContainer = document.createElement('div');
        flexContainer.classList.add("flex-container");
        flexContainer.style.display = 'flex';
        for (let j = 0; j < numSquares; j++) {
            let div = document.createElement('div');
            div.style.width = gridWidth/numSquares + 'px';
            div.style.height = gridWidth/numSquares + 'px';
            div.style.flex = '0 1 auto';
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
}

function removeGrid() {
    let deletionList = Array.from(document.querySelectorAll('.flex-container'));
    while (deletionList.length > 0) {
        let toRemove = deletionList.pop();
        toRemove.parentNode.removeChild(toRemove);
    }

}
createGrid(760, 16);




button.addEventListener('click', () => {
    let input = prompt("Please enter number of squares on each side (max 100)");
    if (Number.isNaN(input)  || input > 100) {
        let valid = false;
        while (!valid) {
            input = prompt("Input was invalid, please try again");
            if (Number.isNaN(input) || input > 100) {
                valid = false;
            }
            else {
                valid = true;
            }
        }
    }
    else {
        removeGrid();
        createGrid(gridWidth,Number.parseInt(input));
    }
})