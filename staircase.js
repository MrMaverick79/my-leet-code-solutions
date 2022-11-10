// Complete the staircase function in the editor below.
     

// staircase has the following parameter(s):

//     int n: an integer


function staircase(n) {
    for (let i = 1; i < n +1; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i)); 
    }

}

staircase(4)