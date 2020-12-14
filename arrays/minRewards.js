
// naive solution O(n^2) time | O(n) space 
function minRewards(scores) {
    const scores = scores.map(_ => 1);
    for (let i = 1; i < scores.length; i++) {
        let j = i - 1;
        if (scores[i] > scores[j]) {
            scores[i] = scores[j] + 1;
        } else {
            while (j >= 0 && scores[j] > scores[j + 1]) {
                scores[j] = Math.max(rewards[j], rewards[j + 1] + 1);
                j--;
            }
        }
    }
    return rewards.reduce((a, b) => a + b);
}


function minRewards(scores) {
    const rewards = scores.map(_ => 1);
    let localMinIdxs = getLocalMinIdxs(scores);
    for (const localMinIdx of localMinIdxs) {
        expandFromLocalMinIdx(localMinIdx, scores, rewards);
    }
    return rewards.reduce((a,b) => a + b)

    function getLocalMinIdxs(array) {
        if (array.length === 1) return [0];
        let localMinIdxs = [];
        for (let i = 0; i < array.length; i++) {
            if (i === 0 && array[i] < array[i + 1]) {
                localMinIdxs.push(i);
            }
            if (i === array.length - 1 && array[i] < array[i - 1]) {
                localMinIdxs.push(i);
            }
            if (i === 0 && i === array.length - 1) {
                continue;
            }
            if (array[i] < array[i + 1] && array[i] < array[i - 1]) {
                localMinIdxs.push(i);
            }
        }
        return localMinIdxs
    }

    function expandFromLocalMinIdx(localMinIdx, scores, rewards) {
        let leftIdx = localMinIdx - 1;
        while (scores[leftIdx] > scores[leftIdx + 1] && leftIdx >= 0) {
            rewards[leftIdx] = Math.max(rewards[leftIdx], rewards[leftIdx - 1] + 1);
            leftIdx --;
        }
        let rightIdx = localMinIdx + 1;
        while (scores[rightIdx] > scores[rightIdx - 1] && rightIdx < scores.length) {
            rewards[rightIdx] = rewards[rightIdx - 1] + 1;
            rightIdx ++;
        }

    }
}



