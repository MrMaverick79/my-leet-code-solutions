// marsExploration has the following parameter(s):

//     string s: the string as received on Earth

// Returns

//     int: the number of letters changed during transmission

function marsExploration(s){
    let count = 0;
    for (let i = 0; i < s.length; i+=3) {
        if(s[i] !== 'S'){
            count ++
        }
        if(s[i + 1] !== 'O'){
            count ++
        }
        if(s[i+ 2] !== 'S'){
            count ++
        } 
        
    }
    return count
}

let received =  'SOSSPSSQSSORSSO'
console.log(marsExploration(received));