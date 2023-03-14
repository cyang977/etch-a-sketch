// Initialized "grid" variable to ".grid-container"'s div.
// This allows me to access this element's properties/methods and append to it.
const grid = document.querySelector('.grid-container');
// made to keep track of previous user inputs, initialized before createGrid() so that it wont affect start
let previousInput = [];
console.log(previousInput);

// Run function to make grid box
createGrid();


// Initializing both buttons so they can be used later
//const buttonChange = document.querySelector('.change-size');
const buttonErase = document.querySelector('.erase'); 
const buttonChange = document.querySelector('.change-size');

// In and event of a click on said button, it will clear the grid or change size
buttonChange.addEventListener('click', changeGridSize)
buttonErase.addEventListener('click', () => {
    deleteGrid();
    createGrid(previousInput[previousInput.length - 1]);
})


// This function is used to allow the user to change the size of the box.
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

// Deletes the whole grid. It is used in series with the createGrid function so that we can clear all the divs
function deleteGrid() {
    // looking inside document for all ".box" classes. then deletes each one from its parent node
    document
    .querySelectorAll(".box")
    .forEach((e) => e.parentNode.removeChild(e));
    return;
}

// Used to inital grid display and to create user input grid
function createGrid(input = 256) {
    if (input > 10000) {
        alert('Invaild input. Input cannot be more than 1000');
        changeGridSize();
    }
    // Stores the value of "input" so that we can "clear" (recreate) grid.
    previousInput.push(input);
    // Deletes decimal places of "input"
    let columns = Math.trunc(input ** (1/2));
    console.log(columns);
    // Setting the grid columns to a set number in CSS with use of JS
    grid.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr)`);
    for (i = 1; i <= input; i++) {
        let divName = document.createElement('div');
        divName.classList.add('box', `${i}`);
        grid.appendChild(divName); 
    }
    // Used to color in boxes by adding "hover" class to divs.
    const divSelect = document.querySelectorAll('.box');
    divSelect.forEach(coverDiv => coverDiv.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover');
        e.target.style.setProperty('background', `#${Math.floor(Math.random()*16777215).toString(16)}`);
    }))
}