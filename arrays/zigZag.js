function zigzagTraverse(array) {
	let sortedArray = [];
	let y = 0;
	let x = 0;
	
	while (x <= array[0].length && y <= array.length) {
		moveDown(y,x,array);
		moveUpAndRight(y,x,array);
		moveRight(y,x,array);
		moveDownAndLeft(y,x,array);
	}
		
	return sortedArray;
	
	function moveDown(y, x, array) {
		if (y === array.length -1) {
			moveRight(y, x, array);
		}
		else {
			y += 1;
			sortedArray.push(array[y][x]);
		}
	}
	function moveRight(y, x, array) {
		if (x === array[0].length -1) {
			return moveDown(y,x, array);
		}
		else {
			x += 1;
			sortedArray.push(array[y][x]);
		}
	}
	function moveUpAndRight(y, x, array) {
		while (y > 0) {
			y -= 1;
			x += 1;
			sortedArray.push(array[y][x]);
		}
	}
	function moveDownAndLeft(y, x, array) {
		while(x > 0) {
			y += 1;
			x -= 1;
			sortedArray.push(array[y][x]);
		}
	}
}

//WORKS
function zigzagTraverse(array) {
	let height = array.length -1;
	  let width = array[0].length -1;
	  let result = [];
	  let goingDown = true;
	  let row = 0;
	  let col = 0;
	  
	  while (!isOutOfBounds(row, col, height, width)) {
		  result.push(array[row][col]);
		  if (goingDown) {
			  if (col === 0 || row === height) {
				  goingDown = false;
				  if (row === height) {
					  col += 1;
				  } else {
					  row += 1;
				  } 
			  } else {
					  row += 1;
					  col -= 1;
				  }
		  } else {
			  if (row === 0 || col === width) {
				  goingDown = true;
				  if (col === width ) {
					  row += 1;
				  } else {
					  col += 1;
				  }
			  } else {
				  row -= 1;
				  col += 1;
			  }
		  }
	  }
	  return result;
  }
	  function isOutOfBounds (row, col, height, width) {
		  return row < 0 || row > height || col < 0 || col > width;
	  }