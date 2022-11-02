// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//Testting
const numArray =[2,88,7]
const targ = 95

var twoSum = function(nums, target) {
    const res = {};
     for(let i=0; i<=nums.length; i++){
         if(res[nums[i]] >= 0){
                    
             return [res[nums[i]], i]
         }
         
         res[target - nums[i]] = i;
     }
 };

console.log(twoSum(numArray, targ));