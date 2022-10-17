# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {Boolean}



def is_palindrome(head)
    # Find the tail
    
    @head = head
   
    comparisonArray =[]
   
    current_node = @head
    length = 0
    while current_node != nil
        comparisonArray.push(current_node.val)
        current_node = current_node.next
        length += 1
    end
    count = length -1
    
    comparisonArray.count.times do |i|
        
       if comparisonArray[i] ==  comparisonArray[count-(i)]
           @compare = true
       else
           
           return false
          
       end
    end

    #compare 
    @compare
end