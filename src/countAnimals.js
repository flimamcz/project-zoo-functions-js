const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const namesAnimals = species.map((specie) => specie.name);
  const valuesAnimals = species.map((specie) => Object.keys(specie.residents).length);
  const createObjAnimals = namesAnimals.map((name, index) => {
    const animals = {};
    animals[`${name}`] = valuesAnimals[index];
    return animals;
  });
  const animalObject = Object.assign({}, ...createObjAnimals);
  if (animal === undefined) {
    return animalObject;
  }
  const lengthParamenter = Object.keys(animal).length;
  const getAnimalByName = species.find((specie) => specie.name === animal.specie).residents.length;
  const getAnimalBySexeName = species
    .find((specie) => specie.name === animal.specie)
    .residents.filter((element) => element.sex === animal.sex).length;
  if (lengthParamenter === 1) return getAnimalByName;
  return getAnimalBySexeName;
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;

// const count = species.map((element) => (
//   Object.keys(element.residents).length));
// if (animal === undefined) {
//   return {
//     lions: count[0],
//     tigers: count[1],
//     bears: count[2],
//     penguins: count[3],
//     otters: count[4],
//     frogs: count[5],
//     snakes: count[6],
//     elephants: count[7],
//     giraffes: count[8],
//   };
// }
