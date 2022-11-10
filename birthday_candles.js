// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example
 const candles = [4, 4, 1, 4, 3]
// The maximum height candles are 4 units high. There are 2 of them, so return 2.

function birthdayCakeCandles(candles) {
    // Write your code here
    let totalTall = 0;
    let sortedCandles = candles.sort((a, b) => b - a)
    for (let i = 0; i < sortedCandles.length; i++) {
        if(sortedCandles[i] === sortedCandles[0]){
            totalTall ++
        }
    }
    return totalTall
}   

console.log(birthdayCakeCandles(candles));