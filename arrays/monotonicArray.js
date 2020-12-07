// BEST SOLUTION
function isMonotonic(array) {
	if(array.length <= 2) return true;
	
	let direction = array[1] - array[0];
	for (let i=2; i<array.length; i++) {
		if (direction === 0) {
			direction = array[i] - array[i-1];
			continue;
		} 
		if (breaksDirection(direction, array[i-1], array[i])) {
			return false;
		}
	}
	return true;
	
	function breaksDirection(direction, firstNum, secondNum) {
		let difference = secondNum - firstNum;
		if (direction > 0) return difference < 0;
		return difference > 0;
	}
}


// NOT-BEST SOLUTION
function isMonotonic(array) {
	let direction = "";
	for (let i=0; i<array.length; i++) {
		if (array[i] < array[i+1] ) {
			direction = "up";
			break;
		} else if (array[i] > array[i+1] ) {
			direction = "down";
			break;
		} 
	}
	for (let i=0; i< array.length; i++) {
		if (array[i] < array[i+1] && direction === "down" ) {
			return false;
		} else if (array[i] > array[i+1] && direction === "up") {
			return false;
		}
	}
	return true;
}