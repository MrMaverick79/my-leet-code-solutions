// Given a time in

// -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 

function timeConversion(s) {
    // Write your code here
    let firstTwoDigits = s.substring(0,2)
    //Is the string AM or PM?
    if (s.includes("PM")){
       if (firstTwoDigits === '12'){
            return s.substring(0, s.length -2)

        } else {
           let newNumber = parseInt(firstTwoDigits);
           newNumber += 12
           let textNumber = newNumber.toString()
           return s.replace(s.substring(0,2), textNumber).substring(0, s.length -2)

        }

    } else{ //AM
        if (firstTwoDigits === '12'){
            return s.replace(s.substring(0,2), "00").substring(0, s.length -2)
        } else {
            return s.substring(0, s.length -2)
        }
    }

}

//Testing 
console.log(timeConversion("09:00:00PM")); //expect 21:00:00
console.log(timeConversion("12:00:00AM")); //expect 00:00:00
console.log(timeConversion("12:40:01AM")); //expect 00:40:01
console.log(timeConversion("07:00:00AM")); //expect 07:00:00
console.log(timeConversion("12:00:00PM")); //expect 12:00:00
