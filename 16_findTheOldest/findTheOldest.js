const findTheOldest = function(people){
    const currentYear = new Date().getFullYear();
    let peopleWithAges = people.map((person) => {
        if(person.yearOfDeath === undefined){
            return{
                name: person.name,
                yearOfBirth: person.yearOfBirth,
                yearOfDeath: currentYear,
            }       
        }else{
            return{
            name: person.name,
            yearOfBirth: person.yearOfBirth,
            yearOfDeath: person.yearOfDeath,
        }}
    });

    peopleWithAges = peopleWithAges.map((person) =>({
            name: person.name,
            yearOfBirth: person.yearOfBirth,
            yearOfDeath: person.yearOfDeath,
            age: (person.yearOfDeath - person.yearOfBirth),          
    }));

    let sorted = peopleWithAges.sort((a, b) => b.age - a.age);
    return(sorted[0]);

    //can be done better with reduce
    // const currentYear = new Date().getFullYear();

    // const oldest = people.reduce((oldestSoFar, person) => {
    //     const death = person.yearOfDeath || currentYear;
    //     const age = death - person.yearOfBirth;

    //     if(!oldestSoFar) return{...person, age};
    //     const oldestAge = (oldestSoFar.yearOfDeath || currentYear) - oldestSoFar.yearOfBirth;

    //     return age > oldestAge ? {...person, age} : oldestSoFar;
    // }, null);

    // return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
