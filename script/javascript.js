const grid = document.querySelector('.grid-container');

createGrid();

function createGrid() {
    for (i = 1; i <= 256; i++) {
        let divName = document.createElement('div');
        divName.classList.add('box', `${i}`);
        grid.appendChild(divName); 
        divName = 0;
    }
}