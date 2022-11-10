// #Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.

function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            zeros ++;
        } else if (arr[i] > 0){
            positive ++
        } else {
            negative ++
        }
             
    }
    
    let totalPositive = (positive / arr.length).toFixed(6)
    let totalNegative = (negative/arr.length).toFixed(6)
    let totalZeros = (zeros/ arr.length).toFixed(6)

    console.log(totalPositive); 
    console.log(totalNegative);
    console.log(totalZeros); 

}

const arr = [-1,-1,1,0,1];

console.log(plusMinus(arr));