const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const getEmployee = employees.filter((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));

  return getEmployee[0];
}

module.exports = getEmployeeByName;
