// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const findLongestPrefix = (arr) => {


    //Put the arrays in order from shortest to longest, as the longest prefxi can only be as long as the shortest word
    arr.sort(function (a, b) {
        return a.length - b.length
    })

    //will need to iterate over each word in the array and vreate arrays for each
    let comparisonWord = arr[0];
    let commonPrefix = ""
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < comparisonWord.length; j++) {
           if(comparisonWord[j]== arr[i][j]){
            commonPrefix += arr[i][j]
           } else{
            break
           }
        
        }
        comparisonWord = commonPrefix
        commonPrefix = ""
        
    }

    return comparisonWord
    
        
        
   

    //check each of the arrays to see whether they are common
   

}; //findLongestPrefix

const test1 = ["flower","flow","flight"] //expect fl
const test2 = ["dog","racecar","car"] // expect "" as there is no common prefix

console.log(findLongestPrefix(test2));
