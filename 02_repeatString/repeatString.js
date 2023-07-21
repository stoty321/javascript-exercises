const repeatString = function(word, repeatValue) {
    if (repeatValue < 0) return "ERROR";

    let string = "";

    for ( let i = 0; i < repeatValue; i++){
        string += word;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
