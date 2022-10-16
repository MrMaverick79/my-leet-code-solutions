// /**
//  * @param {string} s
//  * @return {number}
//  */

//  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//  I can be placed before V (5) and X (10) to make 4 and 9. 
//  X can be placed before L (50) and C (100) to make 40 and 90. 
//  C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.
 var romanToInt = function(s) {
    //Create an object that stores the different values
     const values = {
        I : 1,
        IV : 4,
        V : 5,
        IX: 9,
        X: 10,
        XL : 40,
        L : 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000 
     }
   
     //split the string into an array
     const splitArray = Array.from(s)
     //create another array to store any elements that beling together (e.g. IV)
     const arrayOfChunks = []
     //Test whether the value of the previous element is less than the current one--which would mean we should keep previous + current
     splitArray.reduce(function(previous, current) {
        if( values[previous] < values[current]){
            arrayOfChunks.push(previous + current);
            return 1001 //to ensure we don't duplicate
        } else{
            if(previous != 1001){
                arrayOfChunks.push(previous)
                
            }
            return current
        }
     })
     //did we get the last element?
     if(splitArray.join("").length > arrayOfChunks.join("").length){
        arrayOfChunks.push(splitArray.pop())
     }
 
    //use the object above to add up the values of the chunks
    const totalSum = arrayOfChunks.reduce(function(previous, current) {
        return values[current] + previous
    }, 0)
    
    return totalSum
 };
