function getEarliestMeetTime(events, k) {
      
    //convert times
    function convertTime(time){
        time = time.replace(':', "")
        return parseInt(time) //get number for comparison
    }
    
    
    const schedule = [] 
    //split elements and sort schedule
    for (let i = 0; i < events.length; i++) {
        schedule.push(events[i].split(/\s+/))
        
    }
    
    ///creat a dictionary of availability
    let availableTimes  = {}
    for (let i = 0; i < schedule.length; i++) {
        if(!availableTimes[schedule[i][0]]){
            availableTimes[schedule[i][0]] = [];
        }
       availableTimes[schedule[i][0]].push([convertTime(schedule[i][2]), convertTime(schedule[i][3])])
    
    }
    
    //creat a daily availability calendar
    const dailyAvailability = [];
    for(const k in availableTimes){
         
         let individualTimes= availableTimes[k]
         for (let i = 0; i < individualTimes.length; i++) {
            
            if(individualTimes[i+1]){

                dailyAvailability.push([individualTimes[i][1], individualTimes[i+1][0]]);
            } else{
                dailyAvailability.push([individualTimes[i][1], 2359])
            }
            
         }

    }

    function convertTime(time){
        time.toString()
        
    }

    return -1 //for no possible meetings








}

//k is mneeting length
//evemnts is name action time time
//Testing
const events = ["alex sleep 0:00 08:00", "sam sleep 07:00 13:00", "alex lunch 12:30 13:59"]
const k=60
getEarliestMeetTime(events, k)