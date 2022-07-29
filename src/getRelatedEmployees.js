const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const getIsManager = employees
    .map((element) => element.managers)
    .some((identify) => identify.find((idActual) => idActual === id));

  return getIsManager;
}

function getRelatedEmployees(managerId) {
  const managerVerify = isManager(managerId);
  if (!managerVerify) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  try {
    if (managerVerify) {
      const subordinates = [];
      const manager = employees.find((person) => person.id === managerId);
      employees.forEach((people, index) => {
        people.managers.find((id) => (
          id === manager.id ? subordinates.push(`${people.firstName} ${people.lastName}`) : null
        ));
      });
      return subordinates;
    }
  } catch (error) {
    return error.message;
  }
}

console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = { isManager, getRelatedEmployees };

// employee.managers.filter((id) => {
//   if (id === managerId) {
//     return `${employee.firstName} ${employee.lastName}`;
//   }
// });
// })
