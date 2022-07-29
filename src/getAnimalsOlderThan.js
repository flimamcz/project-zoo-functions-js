const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalThanMin = species
    .filter((element) => element.name === animal)
    .map((item) => item.residents)
    .every((it, index) => it[index].age > age);
  return animalThanMin;
}

module.exports = getAnimalsOlderThan;
