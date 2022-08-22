const findTheOldest = function(people) {
    return people.reduce((a, b) => {
        const aAge = a.yearOfDeath == undefined ?
                        Number((new Date()).getFullYear()) - a.yearOfBirth :
                        a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath == undefined ?
                        Number((new Date()).getFullYear()) - b.yearOfBirth :
                        b.yearOfDeath - b.yearOfBirth;
        return aAge > bAge ? a : b;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
