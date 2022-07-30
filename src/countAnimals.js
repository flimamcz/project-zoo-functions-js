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

module.exports = countAnimals;
