const getAge = function (birth, death) {   // la función recibe el año de nacimiento y el año de muerte
    
  if (!death) {
    death = new Date().getFullYear();    // si no se proporciona el año de muerte, se usa el año actual
  }

  return death - birth;
};
const findTheOldest = function (people) {   // la función recibe un array de objetos con información de personas

    return people.reduce((oldest, currentPerson) => {    

        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);  // se calcula la edad de la persona más vieja hasta el momento
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );

        if (oldestAge < currentAge) {
            return currentPerson;
        } else {
            return oldest;
        }
    });
};


   


// Do not edit below this line
module.exports = findTheOldest;
