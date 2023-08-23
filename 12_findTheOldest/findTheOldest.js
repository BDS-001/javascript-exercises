const findTheOldest = function(people) {

    
    let oldest = people.sort((personA, personB) => {
        let deathA = personA.yearOfDeath
        let deathB = personB.yearOfDeath

        if (deathA === undefined) deathA = (new Date()).getFullYear();
        if (deathB === undefined) deathB = (new Date()).getFullYear();

        const ageA = deathA - personA.yearOfBirth
        const ageB = deathB - personB.yearOfBirth

        if (ageA > ageB) {
            return -1
        } else {
            return 1
        }
    })

    return oldest[0]

};

// Do not edit below this line
module.exports = findTheOldest;
