const sumAll = function(int1, int2) {

    let min = int1;
    let max = int2;
    let value = 0;

    if(!Number.isInteger(int1) || !Number.isInteger(int2)){
        return "ERROR";
    }

    if(int1 < 0 || int2 < 0){
        return "ERROR";
    }

    if(int1 > int2){
        min = int2;
        max = int1;
    }
    
    for(i = min; i <= max; i++){
        value += i;
    }

    return value;

};

// Do not edit below this line
module.exports = sumAll;
