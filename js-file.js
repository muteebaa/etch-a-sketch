const container = document.querySelector('#container');
let boxes;

// creating grid
function createGrid(size){
    console.log(`create grid : ${size}`);
    for (let i = 0; i < size; i++){
        const square = document.createElement('div');
        square.classList.add('square');

        container.appendChild(square);
    }
    
    container.style["grid-template-columns"] = `repeat(${Math.sqrt(size)}, auto)`;

   boxes = getBoxes();
   console.log(boxes)
}


// prompt user to input grid size
function gridSize(){
    let size = prompt("Please enter width");
    
    while (size >= 100 ||size <= 0 ){
        alert("Must be from  1 - 99!");
        size = prompt("Please enter width");
    }

    if (size != null && size < 100) {
       console.log(size);

        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }

       return size;
    }
}

// changes colour of box
function colorChange(color, box){
      box.style.backgroundColor = color;
}

function getBoxes(){
    console.log("lol");
    return document.querySelectorAll(".square");
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

let size = Math.pow(16,2);
createGrid(size);

// button to prompt user for grid size

const button = document.createElement('button');
button.textContent = "Select grid size";
body.appendChild(button);

button.addEventListener('click', ()=>{size = gridSize()
    createGrid(Math.pow(size,2))
    ;});

console.log(size)

// getting the colour picked by the user
let colourSelected = document.querySelector('#color');

let color = "black";

colourSelected.addEventListener("input", () => {  
     color = colourSelected.value;
});

function edit(){
    boxes.forEach((box) => { 
        box.onmousemove = function(e) {
            if(e.buttons == 1)
                colorChange(color, box)
        }
    })
    
    clearBtn.addEventListener("click", () => {
        boxes.forEach((box) => { 
            colorChange("white", box)
            })
    })
    
    eraseBtn.addEventListener("click", ()=> {color = "white";})
}

//const boxes = document.querySelectorAll(".square");

//https://stackoverflow.com/questions/33725092/click-and-drag-over-multiple-divs

container.addEventListener("mouseenter", edit)

