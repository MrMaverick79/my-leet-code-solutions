

// Instructions

// Given a number determine whether or not it is valid per the Luhn formula.

const checkNumber = (str) => {

    // Strings of length 1 or less are not valid. Spaces are allowed in the input, but they should be stripped before checking. All other non-digit characters are disallowed.
    const strippedNum = str.replace(/\D|\s/g,'');
    if(strippedNum.length< 1){
        return false; //not valid
    }
    // The first step of the Luhn algorithm is to double every second digit, starting from the right. We will be doubling
    //To do this, make an array and then convert from string --> Int
    const arrayOfStr = Array.from(strippedNum)
    //turn the strings into ints
    const arrayOfNum = arrayOfStr.map(function(x){
        return parseInt(x)
    })  
    //Loop over every second digit
    for (let i = arrayOfNum.length-2; i >= 0; i-=2) {
     
        // If doubling the number results in a number greater than 9 then subtract 9 from the product. The results of our doubling:
        if(arrayOfNum[i]*2 > 9){
            const newNum = arrayOfNum[i]*2 - 9
            arrayOfNum[i] = newNum
        } else{
            const otherNum = arrayOfNum[i]*2
            arrayOfNum[i] = otherNum
        }
        
           
      
        
    }

    // Then sum all of the digits:
    const sum = arrayOfNum.reduce((previous, current) => previous + current, 0)

    if (sum%10===0){
        return true //valid
     } else {
        return false //invald
     }

}

// Example 1: valid credit card number

console.log(checkNumber(  "#$45aa39BBB 3195 0   343 6467  "))

//Example invald
console.log(checkNumber( "8273 1232 7352 0569  "))
