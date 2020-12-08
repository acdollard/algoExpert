function fourNumberSum(array, targetSum) {
    let allPairSums = {};
    let quadruplets = [];

    for (let i = 1; i < array.length -1; i++){
        for (let j = i + 1; j < array.length; j++) {
            let currentSum = array[i] + array[j];
            let difference = targetSum - currentSum;
            if (difference in allPairSums) {
                //use for-of because we want the actual values, not the property name
                    for (const pair of allPairSums[difference]) {
                            quadruplets.push(pair.concat([array[i], array[j]]));
                    }
                }
            }
        for (let k = 0; k < i; k++) {
            let currentSum = array[i] + array[k];
            if (!(currentSum in allPairSums)) {
                allPairSums[currentSum] = [[array[k], array[i]]]
            }
            else allPairSums[currentSum].push([array[k], array[i]])
        }
    }
    return quadruplets;
}