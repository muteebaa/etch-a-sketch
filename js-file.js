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
    changeColour();
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

// change colour upon hover
function changeColour() {
    const boxes = document.querySelectorAll(".square")
    boxes.forEach((box) => { 
        
        box.addEventListener("mousedown", () => {
            box.classList.add('hover');
           
            const boxes2 = document.querySelectorAll(".square")

            boxes2.forEach((box2) => { box2.addEventListener('mouseenter', () => {
                box2.classList.add('hover');});
                
            });
        });
    });
};

const body = document.querySelector('body');

const btnDiv = document.querySelector('#buttons');

// buttons to change colour/erase
const colour = document.createElement('span');
colour.textContent = "colour";
btnDiv.appendChild(colour);
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



let colourSelected = document.querySelector('#color');
let hex = document.querySelector('#hex');

colourSelected.addEventListener("input", () => {let color = colourSelected.value});

/*
* below is code to experiemnt with colour changing
* - i want to make it so that the colour of a square changes 
*   when the mouse is clicked and dragged simultaneously
*/

/*
function changeColour(){
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', 
        square.addEventListener('click', () => {
            square.classList.add('hover');})
        )
    });
}

function checkClicked(){
    squares.forEach((square) => {
        square.addEventListener('click', () => {
            square.classList.add('hover');})
        })
};*/

/*
function clickCheck(box){
    let test = false;
    box.addEventListener("mousedown", () => {
        box.classList.add('hover');
        
        const boxes2 = document.querySelectorAll(".square")

        boxes2.forEach((box2) => { box2.addEventListener('mouseenter', () => {
            box2.addEventListener("mousedown", () => {test =true; });
            
            if (test==true){
                console.log("ZFGSBCB");
                box2.classList.add('hover');
            }
        
            })})
        })
;}

function cChange() {
    const boxes = document.querySelectorAll(".square")
    console.log("test");
    boxes.forEach((box) => { clickCheck(box)});
 
}; */


