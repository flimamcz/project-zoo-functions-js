// const data = require('../data/zoo_data');

// const { species } = data;

// const animalsLocations = {
//   NE: species.filter((specie) => specie.location === 'NE'),
//   NW: species.filter((specie) => specie.location === 'NW'),
//   SE: species.filter((specie) => specie.location === 'SE'),
//   SW: species.filter((specie) => specie.location === 'SW'),
// };

// const filteredAnimals = () => {
//   const locations = Object.keys(animalsLocations);
//   const filterAnimals = Object.entries(animalsLocations)
//     .map((animal) => animal[1])
//     .map((element) => element.map((item) => item.name));

//   const arrayAnimalsAndLocation = locations
//     .map((location, index) => [location, filterAnimals[index]]);

//   const objAnimals = Object.fromEntries(arrayAnimalsAndLocation);
//   return objAnimals;
// };

// const filteredAnimalsByName = () => {
//   const animalsByName = filteredAnimals();
//   const animals = species.map((specie) => {
//     console.log();
//   });
// };

// filteredAnimalsByName();

// function getAnimalMap(options) {
//   if (options === undefined) return filteredAnimals();
//   const { includeNames, sex, sorted } = options;
//   // if (!includeNames) return filteredAnimals();
// }

// getAnimalMap({ name: 1 });

// module.exports = getAnimalMap;
