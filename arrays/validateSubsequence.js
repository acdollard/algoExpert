function isValidSubsequence(array, sequence) {
    // Write your code here.
      let seqIdx = 0;
      
      for(number of array) {
          if (seqIdx === sequence.length) {
              break;
          } if (number === sequence[seqIdx]) {
              seqIdx++;
          }
      }
      return seqIdx === sequence.length
  }


  ///////////////////////////////////////////////////////////


  function isValidSubsequence(array, sequence) {
    // Write your code here.
      arrIdx = 0;
      seqIdx = 0;
      
      while (arrIdx < array.length && seqIdx < sequence.length) {
          if (array[arrIdx] === sequence[seqIdx]) {
              seqIdx++;
          }
          arrIdx++;
      }
      return seqIdx == sequence.length
  }