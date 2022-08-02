const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployeeByNameOrId({ name, id }) {
  const getEmployee = employees.filter((employee) => {
    const personByNameOrId = (employee.id === id)
      || (employee.firstName === name)
      || (employee.lastName === name);
    return personByNameOrId;
  });
  return getEmployee;
}

function getAnimalsById(arrayId) {
  const getAnimals = species.filter((specie) => (
    arrayId.find((id) => id === specie.id)));
  const getSpecieNameAnimal = getAnimals.map((animal) => animal.name);
  const getLocationsAnimal = getAnimals.map((animal) => animal.location);

  return {
    getLocationsAnimal,
    getSpecieNameAnimal,
  };
}

function verifyExistPersonEmployee({ name, id }) {
  const verify = employees.some((employee) => {
    const existPerson = (employee.id === id)
      || (employee.firstName === name)
      || (employee.lastName === name);
    return existPerson;
  });

  if (!verify) {
    throw new Error('Informações inválidas');
  }
  return verify;
}

function allAnimalsAndLocation(arrayId) {
  const getAnimals = species.filter((specie) =>
    arrayId.find((id) => id === specie.id));
  const getSpecieNameAnimal = getAnimals.map((animal) => animal.name);
  const getLocationsAnimal = getAnimals.map((animal) => animal.location);
  return {
    getLocationsAnimal,
    getSpecieNameAnimal,
  };
}

function getAllEmployee() {
  const employeePerson = employees.map((employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    const { getSpecieNameAnimal, getLocationsAnimal } = allAnimalsAndLocation(responsibleFor);
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getSpecieNameAnimal,
      locations: getLocationsAnimal,
    };
  });

  return employeePerson;
}

function getEmployeesCoverage(identify) {
  if (identify === undefined) {
    return getAllEmployee();
  }

  const existEmployee = verifyExistPersonEmployee(identify);
  if (existEmployee) {
    const personEmployee = getEmployeeByNameOrId(identify);
    const [{ id, firstName, lastName }] = personEmployee;
    const [{ responsibleFor }] = personEmployee;
    const { getLocationsAnimal, getSpecieNameAnimal } = getAnimalsById(responsibleFor);
    const inforPersonEmployee = {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getSpecieNameAnimal,
      locations: getLocationsAnimal,
    };
    return inforPersonEmployee;
  }
}

module.exports = getEmployeesCoverage;
