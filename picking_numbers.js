//
//Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1. 

function pickingNumbers(a) {
    // Write your code here
    let longest = 0;
    let current = 0;
    let sorted = a.sort((a,b)=> a-b);
    for (let i = 0; i < sorted.length; i++) {
        console.log('Longest', longest);
        console.log('Current', current)
                
        if(sorted[i +1] - sorted[i] <= 1 ){
                current ++
            } else{
                if (current > longest) {
                    longest = current
                    current = 0;
                } else {
                    current = 0;
                }
            }

    }
    if (current > longest){
        return current;
    } else {
        return longest
    }
    
}
const a = [1,1,2,2,4,4,5,5,5]
console.log(pickingNumbers(a))
const b = [4,6,5,3,3,1]
console.log(pickingNumbers(b))