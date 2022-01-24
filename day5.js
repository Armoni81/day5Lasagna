//https://exercism.org/tracks/javascript/exercises/lasagna


/*let cookTime = 40
function minutesLeft(num){

return  cookTime - num
}
console.log(minutesLeft(30))

let timePerLayer = 2
function preparationTimeInMinutes(layers){


    return timePerLayer * layers
}
console.log(preparationTimeInMinutes(2)) */





 function totalTimeInMinutes(numberOfLayers,actualMinutesInOven){

    return numberOfLayers * 2 + actualMinutesInOven
 }
 console.log(totalTimeInMinutes(3,20))