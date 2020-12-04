function twoNumberSum(array, targetSum) {
    // Write your code here.
      let answer = [];
      for(let i=0; i<array.length; i++) {
          for(let j=0; j<array.length; j++) {
              if(i===j) {
                  continue;
              }
              if(array[i] + array[j] === targetSum) {
                  console.log("target hit!");
                  answer.push(array[i]);
                  answer.push(array[j]);
                  console.log(answer);
                  return answer
              }
          }
      }
      return answer;
  }