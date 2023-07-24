const palindromes = function (str) {
    let newString = "";
    newString = str.replace(/[^0-9a-zA-Z]/gi,"").replace(/ /g,"");
    newString = newString.toLowerCase();
    
    let revString = reverseString(newString);

    for(let i = 0; i < newString.length; i++){
        if(newString[i] !== revString[i]){
            return false
        }
    }
    return true;

};

function reverseString(str){
   let newString = "";

   for(let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
   }

   return newString;
}

// Do not edit below this line
module.exports = palindromes;
