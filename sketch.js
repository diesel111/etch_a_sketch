console.log("Test")

const container = document.querySelector("#gridContainer");

container.style.borderStyle = "solid";

let grid = [];


for (let i=0; i<4; i++) {
		grid.push([]);
	for (let j=0; j<4; j++){
		grid[i].push(document.createElement('div'));
		grid[i][j].classList.add("pixel");
		container.appendChild(grid[i][j]);
	}
}

container.style.gridTemplateColumns = "repeat(4, 1fr)";
container.style.gridTemplateRows = "repeat(4, 1fr)";

container.appendChild(grid[0][0]);
		
		