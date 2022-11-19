// Given an array of stick lengths, use of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as integers in non-decreasing order.

// If there are several valid triangles having the maximum perimeter:

//     Choose the one with the longest maximum side.
//     If more than one has that maximum, choose from them the one with the longest minimum side.
//     If more than one has that maximum as well, print any one them.

// If no non-degenerate triangle exists, return
// -1.

function maximumPerimeterTriangle(sticks){

    //sort largest to smallest
    const sortedSticks = sticks.sort((a,b) => b-a)
    let finalArray = []
    let perimeter = 0;
    //check if i+1 + i+2 > i
    for (let i = 0; i < sortedSticks.length; i++) {
        if(sortedSticks[i] < sortedSticks[i +1 ] + sortedSticks[i+2]){
            if(sortedSticks[i +2]+sortedSticks[i +1 ]+sortedSticks[i] > perimeter){
                finalArray.push([sortedSticks[i +2],sortedSticks[i +1 ],sortedSticks[i]])
                perimeter = sortedSticks[i +2]+sortedSticks[i +1 ]+sortedSticks[i]

            }
        }
        
    }
    //Push to a final array

    //Check the next one
    if(finalArray.length > 0){
        return finalArray.flat()
    } else {
        return ([-1])

    }

}

//Testing 

const sticks = [1,2,3,4,5,10]
console.log(maximumPerimeterTriangle(sticks)); //returns [3,4,5]
const noSticks = [1,2,3]
console.log(maximumPerimeterTriangle(noSticks)); //returns -1


