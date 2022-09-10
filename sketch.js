let container = document.querySelector('.container')
let button = document.querySelector('#grid-btn')
let defaultButtonSize = 960;

let initialSize = 16
let size;

button.addEventListener("click", function () {
    size = parseInt(prompt("Please insert desired size in this textbox", "Less than 100"))
    let rowSelector = container.querySelectorAll('.row')
    let rowLength = rowSelector.length
        removeContainer(rowLength)
        gridSize (size)
})

function removeContainer (rowsize) {
    let rowID = container.querySelectorAll('.row')
    
    for (let i = 0; i < rowsize; i++) {
        rowID[i].parentNode.removeChild(rowID[i])
        // https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
    }
}




function gridSize (size) {
    let squareSize = (defaultButtonSize/size);
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        container.appendChild(row)
        for (let j = 0; j < size; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid')
            grid.style.width = squareSize + "px";
            grid.style.height = squareSize + "px";
            grid.addEventListener("mouseover", function() {
                grid.style.backgroundColor = 'aqua';
            })
            row.appendChild(grid)
        }
    }
            
            
}
gridSize (initialSize)








