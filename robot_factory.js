

class InvalidInputError extends Error {

  constructor(message) {

    super();
    this.message = message || 'Invalid Input';
  }

}

class Robot {
   

  get bearing() {
    return this.direction
  }

    get coordinates() {
    return({x:this.x, y:this.y})
  }
  
  place({ x, y, direction }) {

    this.x = x
    this.y = y
    this.direction= direction
    console.log('The robot is starting at',x, y, 'facing:', direction);
    
  }

  turnRobot(leftOrRight){
    const directions = ["West", "North", "East", "South"]
    let currentDirection = this.bearing
    let newDirection;
    if (leftOrRight==='L'){
        if (directions.indexOf(currentDirection)-1 < 0){
            newDirection = directions[-1]
        } else{
            newDirection = directions[directions.indexOf(currentDirection)-1]
        }
        this.direction = newDirection
        
    }
    if (leftOrRight==='R'){
        if (directions.indexOf(currentDirection)+1 > directions.length){
            newDirection = directions[0]
        } else{
            newDirection = directions[directions.indexOf(currentDirection)+1]
        }
        this.direction = newDirection
    }

  }

  evaluate(instructions) {

    //Turn the message into a string to se can iterate over it more eaily
    const steps = Array.from(instructions)
    
        
    //iterate over the instructions
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        if (step === "L" || step=== "R"){
            this.turnRobot(step)
        } else{ //Must be A as the error would catch other messages?
            switch(this.direction){
                case "North":
                    this.y +=1
                    break;
                case "South":
                    this.y-=1
                    break;
                case "East":
                    this.x +=1
                    break;
                case "West":
                    this.x -=1
                    break;
                default:
                    continue
            }//end switch
        } //end iteration

        
    } //end for loop
    


  } //end evaluate()

}

//Testing
const robot1 = new Robot()
robot1.place({x:7,y:3, direction:'North'}) //takes an object
console.log(robot1.direction);
robot1.evaluate("RAALAL");
console.log('After the instructions, the robot is at ', robot1.coordinates, "Facing", robot1.bearing)


