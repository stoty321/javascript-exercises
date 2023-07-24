const getTheTitles = function(books) {
 let title = [];

 for( let i = 0; i < books.length; i++){
    title[i] = books[i].title;
 }
 return title;
    
};

// Do not edit below this line
module.exports = getTheTitles;
