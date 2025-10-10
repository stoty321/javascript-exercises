const fibonacci = function(x) {
    x = +x;
    
    let first = 0; 
    let second = 1;
    let sum = 0;

    if(x < 0) return "OOPS";
    if(x === 1) return 1;

    for(let i = 1; i < x; i++){
        sum = (first + second);
        first = second;
        second = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
