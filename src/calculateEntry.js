const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  const ages = entrants.map((people) => people.age);
  ages.forEach((element) => {
    if (element < 18) {
      child += 1;
    } else if (element >= 18 && element < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const peoplesAge = countEntrants(entrants);
  const valueTotal = ((prices.child * peoplesAge.child)
    + (prices.adult * peoplesAge.adult)
    + (prices.senior * peoplesAge.senior));
  return valueTotal;
}

module.exports = { calculateEntry, countEntrants };
