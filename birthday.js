function birthday(s, d, m) {
    // Write your code here
    let finalArrays = []; //all the subarrays that meet the conditions
    for (let i = 0; i < s.length; i++) {
        let subArray = s.slice(i, i+m)
        if(subArray.reduce((curr, prev) => curr + prev) === d){
           finalArrays.push(subArray)
        }

        
    }
    return finalArrays.length //returns number of ways array cna be split
}


//Testing
const s = [2,2,1,3,2]
const d = 4 //total
const m = 2 //sub array length
console.log(birthday(s,d,m)); //returns [[2,2], [1,3]]