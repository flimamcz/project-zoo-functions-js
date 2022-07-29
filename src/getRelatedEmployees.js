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
  const manager = employees.find((person) => person.id === managerId);
  if (!managerVerify) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  try {
    const subordinates = [];
    employees.forEach((people, index) => {
      people.managers.find((id) => (
        id === manager.id ? subordinates.push(`${people.firstName} ${people.lastName}`) : null
      ));
    });
    return subordinates;
  } catch (error) {
    return error;
  }
}

module.exports = { isManager, getRelatedEmployees };

// employee.managers.filter((id) => {
//   if (id === managerId) {
//     return `${employee.firstName} ${employee.lastName}`;
//   }
// });
// })

// if (managerVerify) {
//   employees.map((employee) => employee)
//   .filter((element) => { element.managers.forEach((id) =>id === manager.id ? sub.push(`${element.firstName} ${element.lastName}`) : null);
//   });

//   return sub;
// }
