/*
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

//My Solution 
//good practice with reduce and converting strings to numbers

function sumMix(x){
    return x.reduce((acc, curr) => acc+=Number(curr), 0)
  }