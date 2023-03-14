const grid = document.querySelector('.grid-container');
let previousInput = [];
console.log(previousInput);

createGrid();
const buttonChange = document.querySelector('.change-size');
const buttonErase = document.querySelector('.erase'); 

buttonErase.addEventListener('click', () => {
    deleteGrid();
    createGrid(previousInput[previousInput.length - 1]);
})

function changeGridSize() {
    let ask = prompt("Enter an amount")
    console.log(typeof ask);
    ask = Number(ask);
    if (ask === NaN) {
        alert('Invalid answer. Must use a real Number');
        changeGridSize();
    } else {
      deleteGrid();
      createGrid(ask);
    }
    
}

function deleteGrid() {
    document
    .querySelectorAll(".box")
    .forEach((e) => e.parentNode.removeChild(e));
    return;
}

function createGrid(input = 256) {
    if (input > 10000) {
        alert('Invaild input. Input cannot be more than 1000');
        changeGridSize();
    }
    previousInput.push(input);
    let columns = Math.trunc(input ** (1/2));
    console.log(columns);
    grid.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr)`);
    for (i = 1; i <= input; i++) {
        let divName = document.createElement('div');
        divName.classList.add('box', `${i}`);
        grid.appendChild(divName); 
    }
    console.log(grid.children.length);
    const buttonChange = document.querySelector('button');
    buttonChange.addEventListener('click', changeGridSize)
    const divSelect = document.querySelectorAll('.box');
    divSelect.forEach(coverDiv => coverDiv.addEventListener('mouseover', (e) => {
    console.log(e)
    e.target.classList.add('hover');
}))
}