// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    // Write your code here
    const finalPairs = [];
    const sortedAr = ar.sort();
    for (let i = 0; i < sortedAr.length; i++) {
        if(sortedAr[i] === sortedAr[i +1]){
            finalPairs.push([sortedAr[i], sortedAr[i+1]])
            i = i+1
        }
        
    }
        
    return finalPairs.length
    
    
    
 


}


//Testing
const n = 9
const ar = [10,20,20,10,10,30,50,10,20]
console.log(sockMerchant(n, ar)); //returns 3