function threeNumberSum(array, targetSum) {
    // Write your code here.
      let solutions = []
      array.sort((a,b)=>{return a-b});
      for (let i=0; i<array.length; i++){
          let leftPoint = i+1;
          let rightPoint = array.length-1;
          while(leftPoint < rightPoint) {
              if((array[i] + array[leftPoint] + array[rightPoint]) === targetSum) {
                  solutions.push([array[i], array[leftPoint], array[rightPoint]]);
                  leftPoint ++;
                  rightPoint --;
              }
              else if ((array[i] + array[leftPoint] + array[rightPoint]) < targetSum ) {
                  leftPoint ++;
              } 
              else if ((array[i] + array[leftPoint] + array[rightPoint]) > targetSum) {
                  rightPoint --;
              } 
          }
  
      }
      return solutions
  }