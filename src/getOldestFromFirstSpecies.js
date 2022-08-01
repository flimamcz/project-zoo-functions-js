const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployeeById(id) {
  const peopleEmployeeAnimals = employees
    .find((employee) => employee.id === id)
    .responsibleFor.map((identify) => (
      species.filter((specie) => specie.id === identify)))[0];
  return peopleEmployeeAnimals;
}

function getOldestFromFirstSpecies(id) {
  const animalSelectByPerson = getEmployeeById(id);
  const getAges = animalSelectByPerson[0].residents.map((element) => element.age);
  const olderAge = Math.max(...getAges);

  const olderAgeAnimal = animalSelectByPerson[0]
    .residents.find((animal) => animal.age === olderAge);

  return Object.values(olderAgeAnimal);
}

console.log((getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f')));

module.exports = getOldestFromFirstSpecies;

// const getAges = peopleEmployeeAnimals[0].residents.map((element) => element.age);
// const olderAge = Math.max(...getAges);
// const olderAgeAnimal = peopleEmployeeAnimals[0]
//   .residents.find((animal) => animal.age === olderAge);

// return Object.values(olderAgeAnimal);
