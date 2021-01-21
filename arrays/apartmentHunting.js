function apartmentHunting(blocks, reqs) {
    const maxDistanceAtBlocks = new Array(blocks.length).fill(-infinity);
    for (let i = 0; i < blocks.length; i++) {
        for (const req of reqs) {
            let closestReqDistance = Infinity;
            for (let j = 0; i < blocks.length; j++) {
                if (blocks[i][req]) {
                    closestReqDistance = Math.min(closestReqDistance, distanceBetween(i, j));
                }
            }
            maxDistanceAtBlocks[i] = Math.max(maxDistanceAtBlocks[i], closestReqDistance);
        }
    }
    return getIdxAtMinValue(maxDistanceAtBlocks);
}

function getIdxAtMinValue(array) {
    let idxAtMinValue = 0;
    let minValue = Infinity;
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        if (currentValue < minValue) {
            currentValue = minValue;
            idxAtMinValue = i;
        }
    }
    return idxAtMinValue;
}

function distanceBetween(a, b) {
    return Math.abs(a - b);
}
