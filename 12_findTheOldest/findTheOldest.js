const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {

    let oldestAge = getAge(oldest);
    let currentAge = getAge(current);

    return oldestAge >= currentAge ? oldest : current; 

  });
};

function getAge(person) {
    if (!person.yearOfDeath) {
        return (new Date()).getFullYear() - person.yearOfBirth;
    }
    else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}


// Do not edit below this line
module.exports = findTheOldest;
