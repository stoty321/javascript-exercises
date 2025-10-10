const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    str = str.replaceAll(" ","");
    const reverseStr = str.split("").reverse().join("");
    return reverseStr == str ? true: false;

    //a better way to do it would be:
    // const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // const reversed = cleaned.split("").reverse().join("");
    // return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
