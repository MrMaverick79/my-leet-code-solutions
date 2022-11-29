function fizzBuzz(n) {
    // Write your code here
    let f = 'Fizz';
    let b = 'Buzz';
    let message  = '';
    for (let i = 1; i < n+1; i++) {
        if(i%3===0){
            message + f;
        } else if(i%5===0){
            message + b
        } 
        if(message.length === 0){
            console.log(i);
        } else{
            console.log(message);
            message = ''
        }
        
        
    }
}
