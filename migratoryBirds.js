// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

function migratoryBirds(arr){
   
    const record = new Array(6).fill(0)

    arr.forEach(element => {
        record[element] += 1
    });
    
    return record.indexOf(Math.max(...record));
    
}

//Testing

const arr= [1,2,1,3,1,5,5,5];
console.log(migratoryBirds(arr)); //return 1

