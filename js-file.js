

const container = document.querySelector('#container');


// creating grid
function createGrid(size){
    console.log(`create grid : ${size}`);
    for (let i = 0; i < size; i++){
        const square = document.createElement('div');
        square.classList.add('square');

        container.appendChild(square);
    }
    
    container.style["grid-template-columns"] = `repeat(${Math.sqrt(size)}, auto)`;
    changeColour();
}

function gridSize(){
    let size = prompt("Please enter width");
    
    if (size != null) {
       console.log(size);


       while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }

        createGrid(Math.pow(size,2));
    }
}

// change colour upon hover
function changeColour(){
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });
    });
}

createGrid(Math.pow(16,2));

// button to prompt user for grid size
const body = document.querySelector('body');

const button = document.createElement('button');
button.textContent = "Select grid size";
body.appendChild(button);

button.addEventListener('click', gridSize);











