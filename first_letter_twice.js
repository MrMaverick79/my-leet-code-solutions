// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:

//     A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
//     s will contain at least one letter that appears twice.

const repeatedCharacter = (s) =>{
    
    //Array from s
    const arrayOfString = Array.from(s); //l = could also use split
    const checked =  {}

    for (let i = 0; i < arrayOfString.length; i++) {
        if (arrayOfString[i] in checked){
            return arrayOfString[i]
        } else {
            checked[arrayOfString[i]] = i
            
        }
    }
    
};

//tests
const s = "aa"
console.log(repeatedCharacter(s));