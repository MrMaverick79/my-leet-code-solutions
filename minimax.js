// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. 

function miniMaxSum(arr) {
  
    let mini = arr.sort((a, b)=> b-a).reduce((prev, curr) => prev + curr, -arr[0] )
    let max = arr.sort((a, b)=> b-a).reduce((prev, curr) => prev + curr, -arr[arr.length-1] )
    console.log(mini, max);


}

//Testing

const arr = [1,3,5,7,9]
miniMaxSum(arr)