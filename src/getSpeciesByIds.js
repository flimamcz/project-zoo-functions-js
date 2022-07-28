const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((element) => element.id === id));
}
getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', 'e8481c1d-42ea-4610-8e11-1752cfc05a46');

module.exports = getSpeciesByIds;
