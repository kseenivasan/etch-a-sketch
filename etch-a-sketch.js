
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

function randomIntensity() {
    return Math.floor(Math.random()*256);
}

function createGrid(gridWidth, numSquares) {
    for (let i = 0; i < numSquares; i++) {
        let flexContainer = document.createElement('div');
        flexContainer.classList.add("flex-container");
        flexContainer.style.display = 'flex';
        for (let j = 0; j < numSquares; j++) {
            let singleSquare = document.createElement('div');
            singleSquare.style.width = gridWidth/numSquares + 'px';
            singleSquare.style.height = gridWidth/numSquares + 'px';
            singleSquare.style.flex = '0 1 auto';
            singleSquare.style.backgroundColor = 'white';
            singleSquare.classList.add("grid");
            flexContainer.appendChild(singleSquare);
        }
        mainDiv.appendChild(flexContainer);
    }
    
    const grids = document.querySelectorAll(".grid");
    grids.forEach( (grid) => grid.addEventListener('mouseover', (event) => {
        if(event.target.style.backgroundColor === 'white') {
            event.target.style.backgroundColor = 'rgb(' + randomIntensity() +',' +randomIntensity() + ',' + randomIntensity() +')';
            console.log("initial setting");
        }

        else {
            let hsl = convertRGBtoHSL(event.target.style.backgroundColor);
            let lightness = 0;
            if (hsl[2] > 10) {
                lightness = hsl[2] - 10;
            }
            else {
                lightness = 0;
            }
            event.target.style.backgroundColor = "hsl(" + hsl[0] + "," + hsl[1] + "%," + lightness + "%)";
            console.log(hsl);
            console.log(convertRGBtoHSL(event.target.style.backgroundColor));
            
        }
        
    }));
}

function convertRGBtoHSL(squareRGB) {
    let temp = squareRGB.split("(");
    temp2 = temp[1].split(")");
    temp3 = temp2[0].split(",");
    let red = temp3[0].trim()/255;
    let green = temp3[1].trim()/255;
    let blue = temp3[2].trim()/255;
    let cmax = Math.max(red,green,blue);
    let cmin = Math.min(red,green,blue);
    let delta = cmax - cmin;
    let hue;
    let saturation;
    let lightness = (cmax + cmin)/2;
    if (delta === 0) {
        hue = 0;
        saturation = 0;
    }
    else if (cmax === red) {
        hue = ((green-blue)/delta) % 6;
    }
    else if (cmax === green) {
        hue = (blue - red)/delta + 2;
    }
    else if (cmax === blue) {
        hue = (red - green)/delta + 4;
    }
    hue *= 60;
    if (hue < 0) {
        hue += 360;
    }
    if (lightness === 0) {
        saturation = 0;
    }
    else {
        saturation = delta/(1-Math.abs(2*lightness - 1));
    }
    let hsl = [hue,saturation*100,lightness*100];
    return hsl;

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
        createGrid(gridWidth,input);
    }
})