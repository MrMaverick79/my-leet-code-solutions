# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

#You may assume that each input would have exactly one solution, and you may not use the same element twice.

#You can return the answer in any order.
nums = [3,2,3] 
target = 6


def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    resultList = list()
    halfTarget = int(target/2)
    checkedList = {}
    #Iterate over each element, adding the others until you reach a target
    #We need the index, so we will use range
    for i in range(len(nums)):
        for j in range (len(nums)):
            #Now we can use nums[i] and j[int] to see if they reach target
            #But we need to make sure we are not using the same element
            if i != j:  
                #We also store all previously calculated additions in a lookup dictionary, 
              if not (nums[i] > halfTarget and nums[j] > halfTarget):
                if (nums[i] in checkedList):
                    if (checkedList[nums[i]] == nums[j]):
                        continue
                    elif nums[i] + nums[j] == target:
                        resultList.extend([i,j])
                        return resultList
                # elif (nums[j] in checkedList):
                #     if checkedList[nums[j]] == nums[i]:
                #         continue
                
                        
                elif nums[i] + nums[j] == target:
                    resultList.extend([i,j])
                    return resultList
                else:
                    checkedList.update({nums[i]:nums[j]})
    print("We did not find any matches")
    print(checkedList)

print(twoSum(nums, target))

