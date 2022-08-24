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
    //changeColour();
   
}


// prompt user to input grid size
function gridSize(){
    let size = prompt("Please enter width");
    
    while (size >= 100){
        alert("Must be less than 100!");
        size = prompt("Please enter width");
    }

    if (size != null && size < 100) {
       console.log(size);

        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }

        createGrid(Math.pow(size,2));
    }
}

// changes colour of box
function colorChange(e, color, box){
    if(e.buttons == 1){
      box.style.backgroundColor = color;
    }
}

const body = document.querySelector('body');

const btnDiv = document.querySelector('#buttons');

// buttons to change colour/erase
/*
const colour = document.createElement('span');
colour.textContent = "colour";
btnDiv.appendChild(colour); */
let colorInput = document.createElement('input');
colorInput.type = 'color';
colorInput.id = 'color';
btnDiv.appendChild(colorInput);

const clearBtn = document.createElement('button');
clearBtn.textContent = "clear";
btnDiv.appendChild(clearBtn);

const eraseBtn = document.createElement('button');
eraseBtn.textContent = "eraser";
eraseBtn.classList.add('eraser');
btnDiv.appendChild(eraseBtn);

createGrid(Math.pow(16,2));

// button to prompt user for grid size
const button = document.createElement('button');
button.textContent = "Select grid size";
body.appendChild(button);

button.addEventListener('click', gridSize);


// getting the colour picked by the user
let colourSelected = document.querySelector('#color');

let color = "black";

colourSelected.addEventListener("input", () => {  
     color = colourSelected.value;
});


const boxes = document.querySelectorAll(".square");

boxes.forEach((box) => { 
    box.onmousemove = function(e) {
        colorChange(e, color, box)
    }

})

