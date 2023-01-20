
const mainDiv = document.querySelector('.main');
for (let i = 0; i < 16; i++) {
    let flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.style.color = 'blue';
        div.textContent = "Testing 123";
        flexContainer.appendChild(div);
    }
    mainDiv.appendChild(flexContainer);
}