const fibonacci = function(number) {

if(number > 0){

    let n1 = 0, n2 = 1, nextTerm = 1;

    for (let i = 1; i < number; i++){
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return nextTerm;
}
return "OOPS";


};

// Do not edit below this line
module.exports = fibonacci;
