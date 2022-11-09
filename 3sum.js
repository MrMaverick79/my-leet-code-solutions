// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums){
    let triplets = [];
    let checked = {}

    if (nums.length < 3){
        return []; //return this if nums.length is not the right  size
    }

    nums.sort((a, b) => b - a) //Sort from largest to smallest
   
    //We now know that if we need a certain number to be bigger or smaller, we should look in that direction
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        let currentTotal = element
        if(currentTotal > 0){
            //if a number is > 0, we need to look right
            let rightNumber = i + 1;

        }
        
    }



       
    //add two together and see if the difference is in the checked
    

            
    
    

    return triplets

}; //end threeSum



//Test
//Example 1
const nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums));

//Example 2
// Input: nums = [0,1,1]
// Output: [] (none sum to 0)

//Example 3
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
