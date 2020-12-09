function largestRange(array) {
    let sortedArray = array.sort((a,b)=> a-b)
    let currentRange = [sortedArray[0]];
    let longestRange = [];
	//edge case array length of 1
    if (sortedArray.length === 1) {
        return [sortedArray[0], sortedArray[0]];
    }
    for (let i = 1; i < sortedArray.length; i++) {
        //edge case duplicates in the array
        if (sortedArray[i]===sortedArray[i-1]) {
            continue;
        }
        //otherwiese, check if in range, push if so, then compare current with longest
        else if (sortedArray[i] === (sortedArray[i-1] + 1)) {
            currentRange.push(sortedArray[i]);
            if (currentRange.length > longestRange.length) {
                longestRange = currentRange;
            }
            continue;
        }
        else {
            currentRange = [sortedArray[i]];
        }
    }
    return [longestRange[0], longestRange[longestRange.length-1]]
}

  console.log(largestRange([8, 4, 2, 10, 3, 6, 7, 9, 1]));
  console.log(largestRange([
    19,
    -1,
    18,
    17,
    2,
    10,
    3,
    12,
    5,
    16,
    4,
    11,
    8,
    7,
    6,
    15,
    12,
    12,
    2,
    1,
    6,
    13,
    14
  ]))
  console.log(largestRange([1, 1, 1, 3, 4]));