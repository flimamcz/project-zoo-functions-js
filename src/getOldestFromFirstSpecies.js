const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployeeById(id) {
  const peopleEmployeeAnimals = employees
    .find((employee) => employee.id === id)
    .responsibleFor.map((identify) => (
      species.filter((specie) => specie.id === identify)))[0];

  const getAges = peopleEmployeeAnimals[0].residents.map((element) => element.age);
  const olderAge = Math.max(...getAges);
  const olderAgeAnimal = peopleEmployeeAnimals[0]
    .residents.find((animal) => animal.age === olderAge);

  return Object.values(olderAgeAnimal);
}

function getOldestFromFirstSpecies(id) {
  return getEmployeeById(id);
}

module.exports = getOldestFromFirstSpecies;
