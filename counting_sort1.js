

function countingSort(arr) {
    // Write your code here
    const newArr = Array(100).fill(0)
    arr.map(i => newArr[i]+= 1)
    return newArr
}

