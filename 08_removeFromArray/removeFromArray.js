const removeFromArray = function(array, ...remove) {
    let removeIndex;
    for (item of remove){
        do{
            removeIndex = (array.findIndex((index) => index === item));
            if(removeIndex !== -1){
            array.splice(removeIndex, 1);
            }
        }while(removeIndex !== -1)
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
