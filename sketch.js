
let gridSize = 10;


const container = document.querySelector("#gridContainer");
container.style.borderStyle = "solid";
container.style.gridTemplateColumns = "1fr ".repeat(gridSize);
container.style.gridTemplateRows = "1fr ".repeat(gridSize);

console.log("1f ".repeat(4));

let grid = [];


for (let i=0; i < gridSize; i++) {
		grid.push([]);
	for (let j=0; j < gridSize; j++){
		grid[i].push(document.createElement('div'));
		grid[i][j].classList.add("pixel");
		grid[i][j].addEventListener("mouseover", 
				function(){this.classList.toggle("darkened");});
		grid[i][j].addEventListener("mouseout", 
				function(){this.classList.toggle("darkened");});		
				
		container.appendChild(grid[i][j]);
	}
}



		




