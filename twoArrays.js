function twoArrays(k, A, B) {
    // Write your code here
    const sortA = A.sort((a,b) => a- b)
    const sortB = B.sort((a,b)=> b-a)
    for (let i = 0; i < sortA.length; i++) {
        if(sortA[i] + sortB[i] < k){
            return 'NO'
        }
        
    }

    return 'YES'

}

//Testing
const k = 10
const A = [2, 1, 3]
const B = [7, 8, 9]

console.log(twoArrays(k, A, B));
