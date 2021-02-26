
let gridSize = 10;
const container = document.querySelector("#gridContainer");

const clearBtn = document.querySelector("#clearBtn");
clearBtn.style.backgroundColor = "green";
clearBtn.onclick = function(){clearBoard(container)};

buildBoard(15, container);

function buildBoard(gridSize, container) {
let grid = [];
container.innerHTML = '';
container.style.gridTemplateColumns = "1fr ".repeat(gridSize);
container.style.gridTemplateRows = "1fr ".repeat(gridSize);

for (let i=0; i < gridSize; i++) {
		grid.push([]);
	for (let j=0; j < gridSize; j++){
		grid[i].push(document.createElement('div'));
		grid[i][j].classList.add("pixel");
		grid[i][j].addEventListener("mouseover", 
				function(){mouseover.call(this)});
				
		//grid[i][j].addEventListener("mouseout", 
		//		function(){this.classList.toggle("darkened");});		
				
		container.appendChild(grid[i][j]);
	}
}
}

function mouseover(pixel) {
	let color = [];
	
	if (!this.classList.contains("darkened")) {
		color = [Math.floor(Math.random()*360),
				 Math.floor(Math.random()*50)+50,
				 Math.floor(Math.random()*50)+50];
		this.classList.add("darkened");
		
	}
	else {
		color = [this.getAttribute("data-h"),
				 this.getAttribute("data-s"),
				 this.getAttribute("data-l")*0.90];	
	}
	this.setAttribute("data-h", color[0]);
	this.setAttribute("data-s", color[1]);
	this.setAttribute("data-l", color[2]);
	this.style.backgroundColor = 'hsl('+color[0]+','+color[1]+'%,'+color[2]+'%)';
;
}
	




function clearBoard(container) {
	buildBoard(prompt("Enter Grid Size"), container);
}






