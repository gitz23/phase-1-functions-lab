// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
   if (someValue > 42){
    let result = someValue - 42;
   return result;
}else if (someValue < 42){
    let result = 42 -someValue;
    return result;
}
}

function distanceFromHqInFeet(value){
    let result = distanceFromHqInBlocks(value) * 264
    return result;
}

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        let result = (destination - start) * 264;
        return result;
    }else if (destination < start){
        let result = (start - destination) * 264;
        return result;
    }
}

function calculatesFarePrice(start, destination){ 
    let result = distanceTravelledInFeet(start, destination)
    if (result < 400){
        return 0
    }
    else if(result > 400 && result < 2000){
        return (result - 400) * 0.02
    }
    else if(result > 2000 && result<= 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}