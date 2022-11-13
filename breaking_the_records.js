// returnts  [int, int]: An array with the numbers of times she broke her records. Index is for breaking most points records, and index is for breaking least points records. 

function breakingRecords(scores) {
    
    let mini = 0; //#of times minimum was broken
    let max = 0; //#of of times max was broken
    let currentMini =  scores[0]; //the value of the current lowes score
    let currentMax = scores[0]; //trhe value of the highest score. Game 1 by default

    for (let i = 1; i < scores.length; i++) {
        const el = scores[i];
        if (el > currentMax){
            
            max ++
            currentMax = el;
        } else if (el < currentMini) {
            mini ++
            currentMini = el;
        }
        
    }
        return [max, mini]
    

} //breaking scores

//Test 
const season = [10, 5, 20, 20, 4, 5 ,2, 25, 1]
console.log(breakingRecords(season));