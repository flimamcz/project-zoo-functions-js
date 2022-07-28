const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const filterSpecies = ids.map((id) => species.find((element) => element.id === id));
  return filterSpecies;
}

module.exports = getSpeciesByIds;
