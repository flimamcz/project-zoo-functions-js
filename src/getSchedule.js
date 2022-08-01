const data = require('../data/zoo_data');

const { species, hours } = data;
const { Tuesday, Friday, Saturday, Sunday, Thursday, Wednesday } = hours;
const animalsName = species.map((specie) => specie.name);
const weekDays = Object.keys(hours);

function getAnimalsByDay(day) {
  const filteredAnimalsByDay = species.filter((specie) => specie.availability.includes(day));
  const availableAnimal = filteredAnimalsByDay.map((animal) => animal.name);

  return availableAnimal;
}

const zooOperation = {
  Tuesday: {
    officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
    exhibition: getAnimalsByDay('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
    exhibition: getAnimalsByDay('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
    exhibition: getAnimalsByDay('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
    exhibition: getAnimalsByDay('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
    exhibition: getAnimalsByDay('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
    exhibition: getAnimalsByDay('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getDayAndHourByDay(day) {
  const keysZooOperation = Object.entries(zooOperation);
  const getHourAndAnimals = keysZooOperation.find((item) => item.includes(day));
  const { officeHour, exhibition } = getHourAndAnimals[1];
  const returnGetHourAndAnimals = {};
  returnGetHourAndAnimals[`${day}`] = {
    officeHour,
    exhibition,
  };

  return returnGetHourAndAnimals;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget !== 'Monday' && weekDays.includes(scheduleTarget)) {
    return getDayAndHourByDay(scheduleTarget);
  }
  const expectMonday = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  if (scheduleTarget === 'Monday') {
    return expectMonday;
  }
  if (animalsName.includes(scheduleTarget)) {
    const { availability } = species.find(
      (specie) => specie.name === scheduleTarget,
    );
    return availability;
  }
  return zooOperation;
}

module.exports = getSchedule;
