const data = require('../data/zoo_data');

const { species } = data;

const animalsLocations = {
  NE: species.filter((specie) => specie.location === 'NE'),
  NW: species.filter((specie) => specie.location === 'NW'),
  SE: species.filter((specie) => specie.location === 'SE'),
  SW: species.filter((specie) => specie.location === 'SW'),
};

const filteredAnimals = () => {
  const locations = Object.keys(animalsLocations);
  const filterAnimals = Object.entries(animalsLocations)
    .map((animal) => animal[1])
    .map((element) => element.map((item) => item.name));

  const arrayAnimalsAndLocation = locations
    .map((location, index) => [location, filterAnimals[index]]);

  const objAnimals = Object.fromEntries(arrayAnimalsAndLocation);
  return objAnimals;
};

function getAnimalsBySex(animals, key, sorted, sex) {
  let residentsBySex = animals.residents
    .filter((specie) => specie.sex === sex)
    .map((animal) => animal.name);

  if (sorted && sex) {
    residentsBySex = animals.residents.filter((specie) => specie.sex === sex)
      .map((animal) => animal.name).sort();
  }

  if (sex) return residentsBySex;
}

function getAnimalByName(animals, key, sorted) {
  let residentsNames = animals.residents.map((name) => name.name);

  if (sorted) {
    residentsNames = animals.residents.map((name) => name.name).sort();
  }

  return residentsNames;
}

function getAnimalsByNameTrue(key, sorted, sex) {
  const getAnimals = species
    .map((specie) => {
      const { name, residents } = specie;
      return {
        name, residents };
    })
    .find((item) => (item.name === key ? item : null));
  const returnAnimalsBySex = getAnimalsBySex(getAnimals, key, sorted, sex);
  const returnAnimalByName = getAnimalByName(getAnimals, key, sorted);

  if (sex) return returnAnimalsBySex;
  return returnAnimalByName;
}

const filteredAnimalsByName = (sorted, sex) => ({
  NE: [
    { lions: getAnimalsByNameTrue('lions', sorted, sex) },
    { giraffes: getAnimalsByNameTrue('giraffes', sorted, sex) },
  ],
  NW: [
    { tigers: getAnimalsByNameTrue('tigers', sorted, sex) },
    { bears: getAnimalsByNameTrue('bears', sorted, sex) },
    { elephants: getAnimalsByNameTrue('elephants', sorted, sex) },
  ],
  SE: [
    { penguins: getAnimalsByNameTrue('penguins', sorted, sex) },
    { otters: getAnimalsByNameTrue('otters', sorted, sex) },
  ],
  SW: [
    { frogs: getAnimalsByNameTrue('frogs', sorted, sex) },
    { snakes: getAnimalsByNameTrue('snakes', sorted, sex) },
  ],
});

function getAnimalMap(options) {
  if (options === undefined) return filteredAnimals();
  const { includeNames, sex, sorted } = options;
  if (includeNames === true) return filteredAnimalsByName(sorted, sex);
  if (!includeNames) return filteredAnimals();
}

module.exports = getAnimalMap;
