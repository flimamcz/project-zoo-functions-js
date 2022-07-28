const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return ids;

  const arrayIndex = [];
  const getSpecies = species.map((element) => element.id);

  getSpecies.filter((id, index) => arrayIndex.push(getSpecies.indexOf(ids[index])));

  const arrayWin = arrayIndex
    .filter((element) => element >= 0 && element <= getSpecies.length);

  return arrayWin.map((element) => species[element]);
}

module.exports = getSpeciesByIds;
