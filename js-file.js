

const container = document.querySelector('#container');


// creating grid
function createGrid(){
    for (let i = 0; i < 256; i++){
        const square = document.createElement('div');
        square.classList.add('square');


        container.appendChild(square);
    }
}

createGrid();

// change colour upon hover
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('hover');
    });
});










